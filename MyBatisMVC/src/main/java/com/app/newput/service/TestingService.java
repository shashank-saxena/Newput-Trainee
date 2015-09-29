package com.app.newput.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.app.newput.controller.group.Testing;
import com.app.newput.controller.group.TestingExample;
import com.app.newput.mapper.group.TestingMapper;

@Service
//@Transactional(propagation = Propagation.REQUIRED, rollbackFor = Exception.class)
public class TestingService {

	@Autowired
	private TestingMapper testingMapper;
	
	/*public void inset() throws Exception{
		testingMapper.insert(new TestingBean("Rahul_" + new Random().nextInt(), "Kulmi_" + new Random().nextInt()));
	}*/
	
	/*public void inset(TestingBean bean) throws Exception{
		testingMapper.insert(new TestingBean(bean.getName(), bean.getAddress()));		
	}*/
	
	public void insert(Testing bean) throws Exception{
		testingMapper.insert(bean);	
	}
	public void update(Testing bean) throws Exception{
		testingMapper.updateByPrimaryKeySelective(bean);
	}
	public List<Testing> getUser(){
		TestingExample example = new TestingExample();
		return testingMapper.selectByExample(example);
	}	
	public void delete(Testing bean) throws Exception{
		testingMapper.deleteByPrimaryKey(bean.getId());
	}
	
	/*public void update(TestingBean bean) throws Exception{
		testingMapper.updateUser(new TestingBean(bean.getId(), bean.getName(), bean.getAddress()));		
	}*/
	
	/*public List getAllUser(){
		return testingMapper.getAllUser();
	}*/
	
	
}
