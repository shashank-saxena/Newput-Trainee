package com.app.newput.delegate;

import java.util.Properties;

import javax.mail.Authenticator;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;

import org.apache.log4j.net.SMTPAppender;

public class SecureSMTPAppender extends SMTPAppender{

//	private boolean useStartTLS;
//
//	public boolean isUseStartTLS() {
//		return useStartTLS;
//	}
//	public void setUseStartTLS(boolean useStartTLS) {
//		this.useStartTLS = useStartTLS;
//	}
	
	protected Session createSession(){
		Properties props = new Properties();
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.auth", "true");
      
	    if (getSMTPHost() != null) {
            props.put("mail.smtp.host", getSMTPHost());
        }
	    if (getSMTPPort() != -1){
	    	props.put("mail.smtp.port", getSMTPPort());
	    }    
	    
//        if (useStartTLS) {
//            props.put("mail.smtp.starttls.enable", "true");
//        }
	    
	    Authenticator auth = null;
	    if (getSMTPPassword() != null && getSMTPUsername() != null) {
            auth = new Authenticator() {
                protected PasswordAuthentication getPasswordAuthentication() {
                    return new PasswordAuthentication(getSMTPUsername(), getSMTPPassword());
                }
            };
        }
	    Session session = Session.getInstance(props, auth);
	    return session;
	}
}
