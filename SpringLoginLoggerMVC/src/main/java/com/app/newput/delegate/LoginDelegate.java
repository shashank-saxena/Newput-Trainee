package com.app.newput.delegate;

import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.sql.DataSource;

import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;

import com.app.newput.controller.LoginController;

public class LoginDelegate {

	@Autowired
	private DataSource dataSource;
	private Logger logger = Logger.getLogger(LoginDelegate.class.getClass());

	public DataSource getDataSource() {
		return dataSource;
	}

	public void setDataSource(DataSource dataSource) {
		this.dataSource = dataSource;
	}

	public boolean isValidUser(String username, String password) {

		try {
			String query = "Select count(1) from user where username = ? and password = ?";
			PreparedStatement pstmt = dataSource.getConnection().prepareStatement(query);
			pstmt.setString(1, username);
			pstmt.setString(2, password);
			ResultSet resultSet = pstmt.executeQuery();
			logger.info("Select count(1) from user where username = " + username + " and password = " + password + " ");
			if (resultSet.next()){
				//return (resultSet.getInt(1) > 0);
				if(resultSet.getInt(1) > 0){
					return true;
				}else{
					logger.error("Error occured during query execution 121212");
					return false;
				}
			}else{
				return false;
			}							
		} catch (Exception e) {
			logger.error("Error occured during query execution");
			e.printStackTrace();
			return false;
		}
	}
}
