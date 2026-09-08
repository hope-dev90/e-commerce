package com.hope.product.repository;

import com.hope.product.model.ProductModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<ProductModel, Long> {

    List<ProductModel> findByNameContainingIgnoreCase(String name);

    List<ProductModel> findByStockGreaterThan(Integer stock);
}
