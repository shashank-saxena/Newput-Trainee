package com.newput.dao;

//import java.sql.Connection;
//import java.sql.PreparedStatement;
//import java.sql.ResultSet;
//import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newput.bean.Employee;
import com.newput.bean.EmployeeExample;
//import com.newput.bean.UserBean;

@Service
public class UserDao {

	@Autowired
	private EmployeeMapper mapperInterface;

	public List<Employee> userList() {
		// public void userList() {
		// List<UserBean> list = new ArrayList<UserBean>();
		// UserBean bean = null;
		// PreparedStatement ps = null;
		// ResultSet rs = null;
		// Connections con = new Connections();
		//
		// try {
		// Connection conn = con.getConnection();
		// String sql = "select * from employee";
		// ps = conn.prepareStatement(sql);
		// rs = ps.executeQuery();
		//
		// while (rs.next()) {
		// bean = new UserBean();
		// bean.setId(rs.getInt("id"));
		// bean.setName(rs.getString("EmployeeName"));
		// bean.setAddress(rs.getString("Address"));
		// bean.setEmail(rs.getString("Email"));
		// list.add(bean);
		// }

		// } catch (Exception ex) {
		// ex.printStackTrace();
		// }
		EmployeeExample example = new EmployeeExample();
		System.out.println("mapperInterface::" + mapperInterface);
		return mapperInterface.selectByExample(example);

	}

}
