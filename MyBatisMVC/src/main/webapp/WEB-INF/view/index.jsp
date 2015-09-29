<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Index Page</title>
</head>
<body>
<a href="newUser">For New Registration</a><br>
<a href="updateUser">For Update User</a><br>
<form action="deleteUser" method="post">
	Delete User
	<input type="text" name="personeId"><br>
	<input type="submit" value="Delete">
</form>
<h1 align="center">User Details</h1>
	<table border="1" align="center">
		<tr>
			<td>User Id</td>
			<td>Name</td>
			<td>Address</td>		
			<td>Email</td>	
		</tr>
		<c:forEach var="registrationBean" items="${listUser }">
			<tr>
				<td width="50px">${registrationBean.id }</td>
				<td width="100px">${registrationBean.name }</td>
				<td width="200px">${registrationBean.address }</td>	
				<td width="200px">${registrationBean.email }</td>				
			</tr>
		</c:forEach>
	</table>
</body>
</html>