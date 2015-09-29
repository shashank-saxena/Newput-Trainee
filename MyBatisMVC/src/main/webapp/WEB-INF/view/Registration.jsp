<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Registration Page</title>
</head>
<body>	
	<h1 align="center">Registration New User</h1>
	<table border="1" align="center">
		<form action="addUser" method="post">
			<tr>
				<td>Enter User Name</td>
				<td><input type="text" name="userName" /></td>
			</tr>
			<tr>
				<td>Enter Address</td>
				<td><input type="text" name="address" width="200px"/></td>
			</tr>
			<tr>
				<td>Enter Email</td>
				<td><input type="text" name="email" width="200px"/></td>
			</tr>
			<tr>
				<td colspan="2" align="right"><input type="submit"
					value="Submit"></td>
			</tr>
		</form>
	</table>
</body>
</html>