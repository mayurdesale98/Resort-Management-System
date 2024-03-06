package com.resort.ResortManagementProject.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.resort.ResortManagementProject.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
