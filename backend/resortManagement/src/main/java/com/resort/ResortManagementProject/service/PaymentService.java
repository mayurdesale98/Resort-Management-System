package com.resort.ResortManagementProject.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.resort.ResortManagementProject.repository.PaymentRepository;

@Service
public class PaymentService {
	
    @Autowired
    private PaymentRepository paymentRepository;
    
    
}

