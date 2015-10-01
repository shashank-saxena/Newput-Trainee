package com.newput.testing;

import static org.junit.Assert.*;

import org.junit.Test;
import org.springframework.web.servlet.ModelAndView;

import com.newput.bean.LoginBean;
import com.newput.controller.LoginController;
import com.newput.dao.LogingDao;

public class LogingTestCases {

	// @Test
	// public void controllerTest() {
	// LoginController controller = new LoginController();
	// LoginBean bean = new LoginBean();
	// bean.setName("deepti");
	// bean.setPassword("password");
	// ModelAndView model = controller.logingControl(bean);
	// assertEquals("registeredUser", model.getViewName());
	// }

	@Test
	public void loginTest() {
		boolean i = false;
		LogingDao dao = new LogingDao();
		LoginBean bean = new LoginBean();
		bean.setName("deepti");
		bean.setPassword("abcd");
		bean = dao.getUserInfo(bean);
		
		if(bean.getId() > 0){
			i=true;
		}
		assertEquals(true,i);
	}
}
