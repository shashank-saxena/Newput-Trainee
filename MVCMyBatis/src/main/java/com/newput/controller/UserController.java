package com.newput.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.newput.bean.Employee;
//import com.newput.bean.UserBean;
import com.newput.dao.UserDao;

@Controller
public class UserController {
	
	@Autowired
	private UserDao user;

	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView getViewControl() {
		ModelAndView model = new ModelAndView("user");
		System.out.println("user::"+user);
//		UserDao userdao = new UserDao();
		// userdao.userList();
		List<Employee> list = user.userList();
		model.addObject("userlist", list);
		return model;
	}

}
