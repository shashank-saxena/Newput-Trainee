package com.app.newput.general;

import java.sql.Connection;

import com.app.newput.bean.UserBean;
import com.app.newput.connection.DBConnection;
import com.app.newput.service.UserService;

public class MyRunnableThread implements Runnable {

	public static int myCount = 0;
	UserService service = new UserService();
	UserBean bean = new UserBean();

	public MyRunnableThread() {
		bean.setName("abc");
		bean.setAddress("xyz");
		bean.setMobile(12345);
	}

	//DBConnection dbConnection = new DBConnection();
	//Connection con = dbConnection.getConnection();
	
	public void run() {
		
		while (MyRunnableThread.myCount <= 10) {
			try {
				System.out.println("Thread: " + (++MyRunnableThread.myCount));
				service.registerUser_3(bean);
//				Thread.sleep(100);
			} catch (Exception iex) {
				System.out.println("Exception in thread: " + iex.getMessage());
			}
		}
		//dbConnection.closeConnection();
	}	
}