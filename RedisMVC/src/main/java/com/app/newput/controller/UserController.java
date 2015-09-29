package com.app.newput.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {

	@Autowired
	private RedisTemplate<String, Object> redisTemplate;

	ModelAndView model;

	@RequestMapping(value = "getUserInfo", method = RequestMethod.GET)
	public ModelAndView getValue(@RequestParam("userKey") String key) {
		model = new ModelAndView("success");
		//System.out.println("Inside Get Value");
		//System.out.println("value for key : " + redisTemplate.opsForValue().get(key));
		model.addObject("userValue", "Value is : " + redisTemplate.opsForValue().get(key));
		return model;
	}

	@RequestMapping(value = "/addUser", method = RequestMethod.POST)
	public ModelAndView setValue(@RequestParam("userKey") String key, @RequestParam("userValue") String value) {
		model = new ModelAndView("success");
		//System.out.println("Inside Set Key and Value");
		redisTemplate.opsForValue().set(key, value);
		model.addObject("userStatus", "Succefully Added");
		return model;
	}
}
