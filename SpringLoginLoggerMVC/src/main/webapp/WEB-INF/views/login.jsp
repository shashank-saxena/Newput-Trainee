<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://www.springframework.org/tags/form" prefix="form"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Login</title>
</head>
<body>
	${message }
	<form:form action="login" method="post" modelAttribute="loginBean">
		<form:label path="username">Enter your user-name</form:label>
        <form:input id="username" name="username" path="username" /><br><br>
        <form:label path="username">Please enter your password</form:label>
        <form:password id="password" name="password" path="password" /><br>
		<input type="submit" value="Login">
	</form:form>
</body>
</html>