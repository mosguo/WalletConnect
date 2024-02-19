<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page trimDirectiveWhitespaces="true"%>
<%@ page language="java" import="org.json.JSONObject" %>
<%@ page language="java" import="java.io.*" %>
<%@ page language="java" import="java.lang.*" %>
<%

  StringBuilder sb = new StringBuilder();
  try(BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(request.getInputStream()))) {
      char[] charBuffer = new char[24];
      int bytesRead;
      while ((bytesRead = bufferedReader.read(charBuffer)) > 0) {
      //System.out.println("charBuffer:" + new String(charBuffer));
          sb.append(charBuffer, 0, bytesRead);
      }
  }
  
	JSONObject obj = new JSONObject(sb.toString());
	String idMember = obj.getString("idMember");
	String addressETH = obj.getString("addressETH");
	String keyPrivate = obj.getString("keyPrivate");
	
	if (idMember==null) idMember="";
	if (addressETH==null) idMember="";
	if (keyPrivate==null) idMember=""; 
 
	
%>
{

    "server": "<%=request.getLocalAddr()%>",
    "idMember": "<%=idMember%>",
    "addressETH": "<%=addressETH%>",
    "keyPrivate": "<%=keyPrivate%>"
}