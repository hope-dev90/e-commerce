package com.hope.order.repository;

import com.hope.order.model.OrderModel;
import com.hope.order.model.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface OrderRepository extends JpaRepository<OrderModel, Long> {


    List<OrderModel> findByUserId(Long userId);

    List<OrderModel> findByStatus(OrderStatus status);

    List<OrderModel> findByUserIdAndStatus(Long userId, OrderStatus status);
}