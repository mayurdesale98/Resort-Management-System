package com.resort.ResortManagementProject.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int payment_id;
    
//    private double total_price;
    
    @ManyToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;
    
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    public Payment() {
		// TODO Auto-generated constructor stub
	}

	public Payment(int payment_id, Booking booking, User user) {
		super();
		this.payment_id = payment_id;
		this.booking = booking;
		this.user = user;
	}

	public int getPayment_id() {
		return payment_id;
	}

	public void setPayment_id(int payment_id) {
		this.payment_id = payment_id;
	}

	public Booking getBooking() {
		return booking;
	}

	public void setBooking(Booking booking) {
		this.booking = booking;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Override
	public String toString() {
		return "Payment [payment_id=" + payment_id + ", booking=" + booking + ", user=" + user + "]";
	}
    
    
}

