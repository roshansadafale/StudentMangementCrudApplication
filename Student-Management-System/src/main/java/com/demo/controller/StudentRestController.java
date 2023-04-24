package com.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.demo.model.Student;
import com.demo.repo.StudentRepo;

@RestController
@CrossOrigin(origins ="http://localhost:4200")
public class StudentRestController {

	
	@Autowired
	private StudentRepo studentrepo;
	
	@PostMapping("/student")
	public Student addStudent(@RequestBody Student student) {
		System.out.println(student.toString());
		return studentrepo.save(student);
	}
	
	@GetMapping("/student")
	public List<Student> getAllStudent(){
		
		return studentrepo.findAll();
	}
	
	@GetMapping("student/{sId}")
	public Student getStudentById(@PathVariable("sId") int sId) {
		
		return studentrepo.findById(sId).get();
	}
	@PostMapping("/student{sId}")
    public void deleteStudent(@RequestBody Student sId)
    {
    	 studentrepo.delete(sId);
    }
	
    
	
}
