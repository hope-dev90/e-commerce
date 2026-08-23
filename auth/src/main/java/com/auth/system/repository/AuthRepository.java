package com.auth.system.repository;

import com.auth.system.models.AuthModel;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface AuthRepository extends JpaRepository<AuthModel, Long> {

    Optional<AuthModel> findByEmail(String email);

    boolean existsByEmail(String email);

}