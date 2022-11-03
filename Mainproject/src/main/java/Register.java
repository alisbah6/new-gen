

import java.io.IOException;


import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class Register
 */
@WebServlet("/Register")
public class Register extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public Register() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		response.setContentType("text/html");
		PrintWriter out=response.getWriter();
		
		String pagevalue=request.getParameter("PageValue");
        if (pagevalue.equalsIgnoreCase("Register")) 
        {
        	String username=request.getParameter("username");
        	String password=request.getParameter("password1");
        	String dob=request.getParameter("dob");
        	String gender=request.getParameter("gender");
        	String mobile=request.getParameter("mobile");
        	String email=request.getParameter("email");
        	try {
        		Class.forName("com.mysql.jdbc.Driver");
        		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping","root","aloo11");
        		PreparedStatement pst=con.prepareStatement("insert into register values(?,?,?,?,?,?)");
        		pst.setString(1, username);
        		pst.setString(2, password);
        		pst.setString(3, dob);
        		pst.setString(4, gender);
        		pst.setString(5, mobile);
        		pst.setString(6, email);
        		int i =pst.executeUpdate();
        		if(i>0) 
        		{
        			response.sendRedirect("http://localhost:8080/Mainproject/Login.html");
        			}
        		}
        	catch(Exception e) {
        		System.out.println(e);
        		}
		}
        if (pagevalue.equalsIgnoreCase("Login")) 
        {
        	
        	String users=request.getParameter("username");
        	String password=request.getParameter("password1");
        	try {
        		Class.forName("com.mysql.jdbc.Driver");
        		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping","root","aloo11");
        		PreparedStatement pst1=con.prepareStatement("insert into login values(?,?)"); 
        		pst1.setString(1, users);
        		pst1.setString(2, password);
        		pst1.executeUpdate(); 
        			String queryString="select username,password from register,login where username=users and password=passw ";
        			try {
        				Statement stmt = con.createStatement();{
        			ResultSet results = stmt.executeQuery(queryString);
        			while(results.next()){
        				users= results.getString("username");
            	        		if(users.equals(users)) {
            	        		response.sendRedirect("http://localhost:8080/Mainproject/main.html");
        				}
        				else
        				{
        					response.sendRedirect("http://localhost:8080/Mainproject/register.html");
        				}
        			}    		
        			}
        		}
        			catch(Exception e) {
        				System.out.println(e);
        			}
        		}
        	catch(Exception e)
        	{
        		System.out.println(e);
        	}
        	
        }
		
	if (pagevalue.equalsIgnoreCase("Address")) {	
		response.sendRedirect("http://localhost:8080/Mainproject/contact.html");
	}
	if(pagevalue.equalsIgnoreCase("Confirm")) {
		String houseno=request.getParameter("houseno");
		String floor=request.getParameter("floor");
    	String locality=request.getParameter("locality");
    	String landmark=request.getParameter("landmark");
    	String mobile=request.getParameter("mobile");
    	String email=request.getParameter("email");
    	String address=request.getParameter("add");
    	String pay=request.getParameter("pay");
    	try {
    		Class.forName("com.mysql.jdbc.Driver");
    		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping","root","aloo11");
    		PreparedStatement pst2=con.prepareStatement("insert into useraddress values(?,?,?,?,?,?,?,?)");
    		pst2.setString(1, houseno);
    		pst2.setString(2, floor);
    		pst2.setString(3, locality);
    		pst2.setString(4, landmark);
    		pst2.setString(5, mobile);
    		pst2.setString(6, email);
    		pst2.setString(7, address);
    		pst2.setString(8, pay);
    		int a=pst2.executeUpdate();
    		if(a>0) 
    		{
    			response.sendRedirect("http://localhost:8080/Mainproject/thanks.html");
    			}
    		
	}
    	catch(Exception e){
    		System.out.println(e);
    		}
    	}
if (pagevalue.equalsIgnoreCase("Submit"))
{
	String name=request.getParameter("name");
	String gender=request.getParameter("gender");
	String mobile=request.getParameter("mobile");
	String email=request.getParameter("email");
	String youdo=request.getParameter("youdo");
	String experience=request.getParameter("experience");
	String like=request.getParameter("like");
	String suggest=request.getParameter("suggest");
	try {
		Class.forName("com.mysql.jdbc.Driver");
		Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/shopping","root","aloo11");
		PreparedStatement pst3=con.prepareStatement("insert into feedbacks values(?,?,?,?,?,?,?,?)");
		pst3.setString(1, name);
		pst3.setString(2, gender);
		pst3.setString(3, mobile);
		pst3.setString(4, email);
		pst3.setString(5, youdo);
		pst3.setString(6, experience);
		pst3.setString(7, like);
		pst3.setString(8, suggest);
		int a=pst3.executeUpdate();
		if(a>0) {
		response.sendRedirect("http://localhost:8080/Mainproject/last.html");
		}
	}
	catch(Exception e) {
		System.out.println(e);
	}
}
}
}


