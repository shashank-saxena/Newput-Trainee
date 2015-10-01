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
	${Result}
	<h3 align="CENTER">User List</h3>
	<table border="1" align="CENTER">
		<%-- 	<c:forEach var="diplaylist" items="${UserBean}"> --%>
		<%-- <tr>
			<td width="50px">${id}</td>
				<td width="100px">${name}</td>
				<td width="200px">${address }</td>
				<td width="200px">${email}</td>
			<td width="50px">${bean.getId()}</td>
			<td width="100px">${bean.getName()}</td>
			<td width="200px">${address }</td>
			<td width="200px">${email}</td>
		</tr> --%>
		<%-- </c:forEach> --%>
		<tr>
			<td>User Id</td>
			<td width="100px"><c:out value="${UserBean.id }" /></td>
		</tr>
		<tr>
			<td>Name</td>
			<td width="100px"><c:out value="${UserBean.name}" /></td>
		</tr>
		<tr>
			<td>Address</td>
			<td width="100px"><c:out value="${UserBean.address}" /></td>
		</tr>
		<tr>
			<td>Email</td>
			<td width="100px"><c:out value="${UserBean.email}" /></td>
		</tr>

		<%-- <c:forEach var="user" items="${UserBean}"> --%>
		<%-- <tr>
			<td><c:out value="${UserBean.id }" /></td>
			<td><c:out value="${UserBean.name}" /></td>
			<td><c:out value="${UserBean.address}" /></td>
			<td><c:out value="${UserBean.email}" /></td>
		</tr> --%>
		<%-- </c:forEach> --%>
	</table>
</body>
</html>