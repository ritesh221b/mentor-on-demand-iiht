/*

Author  : Ritesh Phogat
Email   : riteshphogat11@gmail.com
Project : Mentor on Demand 
 
*/
package com.example.common;

import java.util.List;

import org.springframework.data.repository.Repository;

public interface PaymentRepository extends Repository<Payment, Integer>{
	
	void delete(Payment payment);
	
	List<Payment> findAll();
	
	Payment findOne(int id);
	
	Payment save(Payment payment);

}
