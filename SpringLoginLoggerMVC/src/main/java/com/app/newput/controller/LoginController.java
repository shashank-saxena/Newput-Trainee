package com.app.newput.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.app.newput.delegate.LoginDelegate;
import com.app.newput.viewBean.LoginBean;

@Controller
public class LoginController {

	@Autowired
	private LoginDelegate loginDelegate;
	Logger logger = Logger.getLogger(LoginController.class.getClass());

//	static{
//		System.setProperty("mail.smtp.starttls.enable", "true");
//	}

	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public ModelAndView displayLogin(HttpServletRequest request, HttpServletResponse response) {
		long startTime = System.nanoTime();
		logger.info("Welcome to the login module.");
		long endTime   = System.nanoTime();
		long totalTime = endTime - startTime;
		System.out.println("Time taken to add in logger :: "+totalTime);		
        //logger.error("Sorry, We get any error during proccessing the request.");
		ModelAndView model = new ModelAndView("login");
		LoginBean loginBean = new LoginBean();
		model.addObject("loginBean", loginBean);
		return model;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public ModelAndView executeLogin(HttpServletRequest request, HttpServletResponse response,
			@ModelAttribute("loginBean") LoginBean loginBean) {
		ModelAndView model = null;
		logger.info("We will be forworded to your respective page withing a time.");
        //logger.error("Sorry, We get any error during fetching user credencials you applied.");
		try {
			boolean isValidUser = loginDelegate.isValidUser(loginBean.getUsername(), loginBean.getPassword());
			if (isValidUser) {
				System.out.println("User Login Successful");
				request.setAttribute("loggedInUser", loginBean.getUsername());
				model = new ModelAndView("welcome");
			} else {
				System.out.println("User Login Fail");
				model = new ModelAndView("login");
				model.addObject("loginBean", loginBean);
				request.setAttribute("message", "Invalid credentials!!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return model;
	}

}
