<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h3 align="CENTER">User List </h3></br>
	<table border="1" align="CENTER">
	<c:forEach var="diplaylist" items="${userlist}">
		<tr>
			<td width="50px">${diplaylist.id }</td>
			<td width="100px">${diplaylist.employeename }</td>
			<td width="200px">${diplaylist.address }</td>
			<td width="200px">${diplaylist.email }</td>
		</tr>
	</c:forEach>
	</table>
</body>
</html>