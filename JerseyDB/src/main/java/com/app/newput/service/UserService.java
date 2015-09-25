package com.app.newput.service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

import com.app.newput.bean.UserBean;
import com.app.newput.connection.DBConnection;

public class UserService {

	DBConnection dbConnection = new DBConnection();
			
	public UserBean registerUser(UserBean bean){
		String sql = "insert into test(name, address, mobile) values (?, ?, ?)";
		String sql1 = "select max(id) from test";
		Connection con = dbConnection.getConnection();
		PreparedStatement ps = null;
		try{
			ps = con.prepareStatement(sql);
			ps.setString(1, bean.getName());
			ps.setString(2, bean.getAddress());
			ps.setInt(3, bean.getMobile());
			ps.executeUpdate();
			
			ps = con.prepareStatement(sql1);
			ResultSet rs = ps.executeQuery(sql1);
			if(rs.next()){
				bean.setMaxId(rs.getInt(1));
			}			
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			dbConnection.closeConnection();
		}		
		return bean;
	}
}
