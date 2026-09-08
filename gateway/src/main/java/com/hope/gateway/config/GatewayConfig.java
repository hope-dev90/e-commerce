package com.hope.gateway.config;

import com.hope.gateway.filter.JwtAuthenticationFilter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.reactive.CorsWebFilter;
import org.springframework.web.cors.reactive.UrlBasedCorsConfigurationSource;

import java.util.List;
import java.util.Arrays;

@Configuration
public class GatewayConfig {

    @Value("${services.auth.url}")
    private String authServiceUrl;

    @Value("${services.order.url}")
    private String orderServiceUrl;

    @Value("${services.product.url}")
    private String productServiceUrl;

    @Value("${services.message.url}")
    private String messageServiceUrl;

    @Value("${cors.allowed-origins}")
    private String allowedOriginsRaw;

    @Value("${cors.allowed-methods}")
    private String allowedMethodsRaw;

    @Value("${cors.max-age:3600}")
    private long corsMaxAge;

    private final JwtAuthenticationFilter jwtFilter;

    public GatewayConfig(JwtAuthenticationFilter jwtFilter) {
        this.jwtFilter = jwtFilter;
    }

    @Bean
    public RouteLocator routes(RouteLocatorBuilder builder) {
        return builder.routes()

                // Auth — public (no JWT required for login/register)
                .route("auth-service", r -> r
                        .path("/auth/**")
                        .uri(authServiceUrl))

                // Orders — protected
                .route("order-service", r -> r
                        .path("/orders/**")
                        .filters(f -> f.filter(jwtFilter.apply(new JwtAuthenticationFilter.Config())))
                        .uri(orderServiceUrl))

                // Products — protected
                .route("product-service", r -> r
                        .path("/products/**")
                        .filters(f -> f.filter(jwtFilter.apply(new JwtAuthenticationFilter.Config())))
                        .uri(productServiceUrl))

                // Messages — public (contact form, no auth needed)
                .route("message-service", r -> r
                        .path("/messages/**")
                        .uri(messageServiceUrl))

                .build();
    }

    /**
     * Global CORS filter — handles preflight and actual requests for all routes.
     */
    @Bean
    public CorsWebFilter corsWebFilter() {
        CorsConfiguration corsConfig = new CorsConfiguration();
        corsConfig.setAllowedOrigins(Arrays.asList(allowedOriginsRaw.split(",")));
        corsConfig.setAllowedMethods(Arrays.asList(allowedMethodsRaw.split(",")));
        corsConfig.setAllowedHeaders(List.of("*"));
        corsConfig.setAllowCredentials(true);
        corsConfig.setMaxAge(corsMaxAge);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", corsConfig);

        return new CorsWebFilter(source);
    }
}
