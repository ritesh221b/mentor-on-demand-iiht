/*

Author  : Ritesh Phogat
Email   : riteshphogat11@gmail.com
Project : Mentor on Demand 
 
*/
package com.example.common;

import java.util.List;

public interface TechnologyService {
	
Technology create(Technology technology);
	
	Technology delete(int id);
	
	List<Technology> findAll();
	
	Technology findById(int id);
	
	Technology update(Technology technology);
	
}
