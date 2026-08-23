package com.hope.order.service;

import com.hope.order.dto.OrderItemDTO;
import com.hope.order.dto.OrderRequestDTO;
import com.hope.order.dto.OrderResponseDTO;
import com.hope.order.model.OrderItem;
import com.hope.order.model.OrderModel;
import com.hope.order.model.OrderStatus;
import com.hope.order.repository.OrderRepository;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class OrderService {

    private final OrderRepository orderRepository;

    public OrderService(OrderRepository orderRepository) {
        this.orderRepository = orderRepository;
    }
    public OrderResponseDTO createOrder(OrderRequestDTO request) {

        OrderModel order = new OrderModel();
        order.setUserId(request.getUserId());
        order.setStatus(OrderStatus.PENDING);

        final BigDecimal[] total = {BigDecimal.ZERO};

        List<OrderItem> items = request.getItems().stream().map(itemDTO -> {
            OrderItem item = new OrderItem();
            item.setProductId(itemDTO.getProductId());
            item.setQuantity(itemDTO.getQuantity());
            item.setPrice(itemDTO.getPrice());

            BigDecimal itemTotal =
                    item.getPrice().multiply(BigDecimal.valueOf(item.getQuantity()));
            total[0] = total[0].add(itemTotal);

            item.setOrder(order);

            return item;
        }).collect(Collectors.toList());

        order.setItems(items);
        order.setTotalAmount(total[0]);

        OrderModel savedOrder = orderRepository.save(order);

        return mapToResponseDTO(savedOrder);
    }

 
    public List<OrderResponseDTO> getAllOrders() {
        return orderRepository.findAll()
                .stream()
                .map(this::mapToResponseDTO)
                .collect(Collectors.toList());
    }

 public List<OrderResponseDTO> getOrdersByUser(Long userId) {
    return orderRepository.findByUserId(userId)
            .stream()
         .map(order -> mapToResponseDTO(order))
            .collect(Collectors.toList());
}

  
    public OrderResponseDTO getOrderById(Long id) {
        OrderModel order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        return mapToResponseDTO(order);
    }

    public OrderResponseDTO updateOrderStatus(Long id, OrderStatus status) {
        OrderModel order = orderRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Order not found"));

        order.setStatus(status);
        return mapToResponseDTO(orderRepository.save(order));
    }

   
    public void deleteOrder(Long id) {
        orderRepository.deleteById(id);
    }

   
    private OrderResponseDTO mapToResponseDTO(OrderModel order) {
        OrderResponseDTO dto = new OrderResponseDTO();

        dto.setId(order.getId());
        dto.setUserId(order.getUserId());
        dto.setStatus(order.getStatus());
        dto.setTotalAmount(order.getTotalAmount());
        dto.setCreatedAt(order.getCreatedAt());

        List<OrderItemDTO> items = order.getItems().stream().map(item -> {
            OrderItemDTO itemDTO = new OrderItemDTO();
            itemDTO.setProductId(item.getProductId());
            itemDTO.setQuantity(item.getQuantity());
            itemDTO.setPrice(item.getPrice());
            return itemDTO;
        }).collect(Collectors.toList());

        dto.setItems(items);

        return dto;
    }
}