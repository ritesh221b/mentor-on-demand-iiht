/*

Author  : Ritesh Phogat
Email   : riteshphogat11@gmail.com
Project : Mentor on Demand 
 
*/
package com.example.common;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
	
	@Autowired
	private UserRepository repository;

	@Override
	public User create(User user) {
		
		return repository.save(user);
	}

	@Override
	public User delete(int id) {
		User user = findById(id);
		if(user != null) {
			repository.delete(user);
		}
		
		return user;
	}

	@Override
	public List<User> findAll() {
		
		return repository.findAll();
	}

	@Override
	public User findById(int id) {
		
		return repository.findOne(id);
	}

	@Override
	public User update(User user) {
		
		return repository.save(user);
	}

	@Override
	public User findUser(String userName, String password) {
		// TODO Auto-generated method stub
		return repository.findUser(userName, password);
	}
	
	

}
