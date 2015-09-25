package com.app.newput.controller;

import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.app.newput.bean.UserBean;
import com.app.newput.service.UserService;

@Path("user")
public class User {
	
	UserService service = new UserService();

	@POST
	@Path("/register")
	@Produces(MediaType.APPLICATION_XML)
	public UserBean addUser(@FormParam("userName") String userName, @FormParam("address") String address, 
			@FormParam("mobileNo") int mobile){
		UserBean bean = new UserBean();
		bean.setName(userName);
		bean.setAddress(address);
		bean.setMobile(mobile);
		bean = service.registerUser(bean);
		return bean;
		//System.out.println("New User Add Successfully : "+bean.getMaxId());
	}
}
