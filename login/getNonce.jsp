<%@ page language="java" contentType="application/json; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ page import="java.io.*"%>
<%@ page import="java.util.*"%>
<%@ page import="java.lang.*"%>
<%@ page import="java.text.*"%>
<%
//String address = request.getServletPath();
String member = "wc" + request.getParameter("member");
String address = request.getParameter("address");
StringBuffer sb = new StringBuffer();
//sb.append("" + Math.abs(address.hashCode()));
//sb.append("" + Math.abs(new java.util.Random().nextInt(100)));
//sb.append("" + Math.abs(member.hashCode()));
//sb.append("" + Math.abs(new java.util.Random().nextInt(100000)));
//sb.append("" + Math.abs(new java.util.Random().nextInt(100000)));
//sb.append("" + Math.abs(new java.util.Random().nextInt(100000)));
//sb.append("" + Math.abs(new java.util.Random().nextInt(100000)));
//String nonce = String.format("%x", new BigInteger(1, arg.getBytes("UTF-8")));

sb.append(Int2HexString(Math.abs(address.hashCode())));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100))));
sb.append(Int2HexString(Math.abs(member.hashCode())));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100000))));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100000))));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100000))));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100000))));
sb.append(Int2HexString(Math.abs(new java.util.Random().nextInt(100000))));

String nonce = sb.substring(0,32);
 
%>
<%!
 String Int2HexString(int data) {
	//java.lang.Integer i = new java.lang.Integer(data);
	//return i.toHexString();
	return String.format("%x", data);
}
%>
{
    "code": 0,
    "message": null,
    "payload": "Hello, welcome to frank.hk. \nPlease sign this message to verify your address. \nIt will not cost you any gas. \n\nAddress:\n<%=address%>\n\nNonce:\n<%=nonce%>"
}
