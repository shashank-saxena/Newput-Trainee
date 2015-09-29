package com.app.newput.controller;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.app.newput.controller.group.Testing;
import com.app.newput.service.TestingService;

@Controller
public class IndexController {

	@Autowired
	private TestingService testingService;
	
	@Autowired
    private JavaMailSender mailSender;
	
	/*@RequestMapping(value="/", method = RequestMethod.GET)
	public @ResponseBody String index(){
		try{
			testingService.inset();
			//return "";
		}catch(Exception e){
			e.printStackTrace();
		}
		return "new row insert succesfully";
	}*/
	
	@RequestMapping(value="/", method = RequestMethod.GET)
	public ModelAndView fetchUserList(){	
		ModelAndView model = new ModelAndView("index");		
		List<Testing> list = new ArrayList<Testing>();
		list = testingService.getUser();
		model.addObject("listUser", list);
		return model; 
	}
	
	@RequestMapping(value="newUser", method = RequestMethod.GET)
	public ModelAndView addNewUser(){
		ModelAndView model = new ModelAndView("Registration");		
		return model; 
	}
	
	@RequestMapping(value="addUser", method = RequestMethod.POST)
	public ModelAndView addUser(@RequestParam("userName") String name, @RequestParam("address") String address, 
			@RequestParam("email") String emailAddress) throws Exception{
		ModelAndView model = new ModelAndView("index");
		Testing bean = new Testing();
		Calendar cal1 = Calendar.getInstance();
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
		bean.setName(name); 
		bean.setAddress(address);
		bean.setEmail(emailAddress);
		testingService.insert(bean);		
		System.out.println("new row insert succefully : "+sdf.format(cal1.getTime()));
		SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(bean.getEmail());
        email.setSubject("Registration Notification From Rahul Kulmi Testing");
        email.setText("Welcome, You are successfully register by Rahul Kulmi");
        mailSender.send(email);
        Calendar cal2 = Calendar.getInstance();
        System.out.println("mail send succefully : "+sdf.format(cal2.getTime()));
		List<Testing> list = new ArrayList<Testing>();		
		list = testingService.getUser();
		model.addObject("listUser", list);
		return model; 
	}
	
	@RequestMapping(value="updateUser", method = RequestMethod.GET)
	public ModelAndView updateNewUser(){
		ModelAndView model = new ModelAndView("Update");		
		return model; 
	}
	
	@RequestMapping(value="updateOldUser", method = RequestMethod.POST)
	public ModelAndView updateUser(@RequestParam("personeId") int id, @RequestParam("userName") String name, 
			@RequestParam("address") String address, @RequestParam("email") String email) throws Exception{
		ModelAndView model = new ModelAndView("index");
		Testing bean = new Testing();
		bean.setId(id);
		bean.setName(name);
		bean.setAddress(address);
		bean.setEmail(email);
		testingService.update(bean);
		List<Testing> list = new ArrayList<Testing>();		
		list = testingService.getUser();
		model.addObject("listUser", list);
		return model; 
	}
	
	@RequestMapping(value="deleteUser", method = RequestMethod.POST)
	public ModelAndView deleteUser(@RequestParam("personeId") int id) throws Exception{
		ModelAndView model = new ModelAndView("index");
		Testing bean = new Testing();
		bean.setId(id);
		testingService.delete(bean);
		List<Testing> list = new ArrayList<Testing>();		
		list = testingService.getUser();
		model.addObject("listUser", list);
		return model; 
	}
}
