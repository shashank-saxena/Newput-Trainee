package com.newput.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import org.springframework.stereotype.Service;

import com.newput.bean.LoginBean;

@Service
public class LogingDao {

	public LoginBean insertUser(LoginBean bean) {
		Connections con = new Connections();
		// ResultSet rs = null;
		Connection conn = null;
		PreparedStatement ps = null;

		try {
			conn = con.getConnection();
			String sql = "insert into contactdb.employee(EmployeeName,Address,Email,password) values(?,?,?,?);";
			ps = conn.prepareStatement(sql);
			ps.setString(1, bean.getName());
			ps.setString(2, bean.getAddress());
			ps.setString(3, bean.getEmail());
			ps.setString(4, bean.getPassword());
			ps.execute();
			bean = getUserInfo(bean);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {

			try {
				// if (rs != null) {
				// rs.close();
				// }
				if (ps != null) {
					ps.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();

			}
		}
		return bean;
	}

	public LoginBean getUserInfo(LoginBean bean) {
		Connections con = new Connections();
		ResultSet rs = null;
		Connection conn = null;
		PreparedStatement ps = null;

		try {
			conn = con.getConnection();
			String sql = "select * from employee where EmployeeName=? and password=?";
			ps = conn.prepareStatement(sql);
			ps.setString(1, bean.getName());
			ps.setString(2, bean.getPassword());
			rs = ps.executeQuery();
			if (rs.next()) {
				bean.setName(rs.getString("EmployeeName"));
				bean.setAddress(rs.getString("Address"));
				bean.setEmail(rs.getString("Email"));
				bean.setId(rs.getInt("id"));
			}

		} catch (Exception e) {
			e.printStackTrace();
		} finally {

			try {
				if (rs != null) {
					rs.close();
				}
				if (ps != null) {
					ps.close();
				}
				if (conn != null) {
					conn.close();
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();

			}
		}

		return bean;
	}

}
