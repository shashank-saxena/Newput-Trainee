package com.app.newput.connection;

import java.sql.Connection;
import java.sql.DriverManager;

public class DBConnection {

	Connection con = null;
	
	public Connection getConnection() {		
		try{
			Class.forName("com.mysql.jdbc.Driver");
			con = DriverManager.getConnection("jdbc:mysql://localhost:3306/rahul_test", "root", "root");
		}catch(Exception e){
			e.printStackTrace();
		}		
		return con;
	}
	
	public void closeConnection(){
		try{
			con.close();
		}catch(Exception e){
			e.printStackTrace();
		}		
	}
}
