package com.resort.ResortManagementProject.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.resort.ResortManagementProject.service.PaymentService;

@RestController
@CrossOrigin(origins= "*")
@RequestMapping("/payments")
public class PaymentController {
		
	 @Autowired
	    private PaymentService paymentService;
	 
	 
}
