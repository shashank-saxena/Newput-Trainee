package com.app.newput.general;

public class TestMySql {

	

	public static void main(String[] args) {
		for (int i=0; i<2; i++){
			MyRunnableThread mrt = new MyRunnableThread();
			Thread t = new Thread(mrt);
			t.start();
		}		
	}
}
