package com.app.newput.bean;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class UserBean {

	private String name;
	private String address;
	private int mobile;
	private int maxId;
	
	public int getMaxId() {
		return maxId;
	}
	public void setMaxId(int maxId) {
		this.maxId = maxId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getMobile() {
		return mobile;
	}
	public void setMobile(int mobile) {
		this.mobile = mobile;
	}
}
