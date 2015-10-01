package com.newput.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.newput.bean.LoginBean;
import com.newput.dao.LogingDao;

@Controller
public class LoginController {

	@Autowired
	private LogingDao logindao;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	public ModelAndView firstView() {
		System.out.println("Loging Controller");
		return new ModelAndView("index");
	}

	@RequestMapping(value = "/UserLogin", method = RequestMethod.GET)
	public ModelAndView loginView() {
		System.out.println("UserLogin Controller");
		return new ModelAndView("UserLogin");
	}

	@RequestMapping(value = "/registeration", method = RequestMethod.GET)
	public ModelAndView registerView() {
		System.out.println("registeration Controller");
		return new ModelAndView("registeration");
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView logingControl(@ModelAttribute("bean") LoginBean bean) {
		// ModelAndView model = new ModelAndView("registeredUser");
		bean = logindao.getUserInfo(bean);
		System.out.println("bean value is : " + bean.getId());
		if (bean.getId() > 0) {
			System.out.println("Inside bean value :");
			// model.addObject("id", bean.getId());
			// model.addObject("name", bean.getName());
			// model.addObject("address", bean.getAddress());
			// model.addObject("email", bean.getEmail());
			// model.addObject("UserBean", bean);
			// model.addObject(bean);
			return new ModelAndView("registeredUser", "UserBean", bean);
		} else {
			System.out.println("Inside string value");
			// model.addObject("Result", "User is not register please get
			// register.");
			return new ModelAndView("registeredUser", "Result", "User is not register please get register.");
		}
		// return model;
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ModelAndView registerControl(@ModelAttribute("bean") LoginBean bean) {
		// ModelAndView model = new ModelAndView();
		bean = logindao.insertUser(bean);
		// return "redirect:/registeration";
		return new ModelAndView("registeredUser", "UserBean", bean);
	}
}
