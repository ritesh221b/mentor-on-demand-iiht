package com.example.common;

import java.util.List;

/*

Author  : Ritesh Phogat
Email   : riteshphogat11@gmail.com
Project : Mentor on Demand 
 
*/

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface MentorRepository extends Repository<Mentor, Integer>{
	
	void delete(Mentor mentor);
	
	List<Mentor> findAll();
	
	Mentor findOne(int id);
	
	Mentor save(Mentor mentor);
	
	@Query("select mentor from Mentor mentor where mentor.userName=? and mentor.password=?")
	Mentor findMentor(String userName, String password);

}
