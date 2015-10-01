package com.newput.dao;

import java.sql.*;

public class Connections {

	public Connection getConnection() {
		// String JDBC_DRIVER = "com.mysql.jdbc.Driver";
		String DB_URL = "jdbc:mysql://localhost:3306/contactdb";

		// Database credentials
		String USER = "root";
		String PASS = "root";

		Connection conn = null;
		// Statement stmt = null;
		try {
			Class.forName("com.mysql.jdbc.Driver");

			conn = DriverManager.getConnection(DB_URL, USER, PASS);

			// stmt = conn.createStatement();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return conn;
	}
}
