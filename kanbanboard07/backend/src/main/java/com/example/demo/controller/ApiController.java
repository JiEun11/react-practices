package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.CardRepository;
import com.example.demo.repository.TaskRepository;
import com.example.demo.vo.TaskVo;

@RestController
@RequestMapping("/api")
public class ApiController {

	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private TaskRepository taskRepository;

	@GetMapping("/card")
	public ResponseEntity<JsonResult> readForCard() {
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(cardRepository.findAll()));
	}
	
	@GetMapping("/card/task")
	public ResponseEntity<JsonResult> readForTask(@RequestParam(value="cardNo", required=true, defaultValue="")Long cardNo){
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(taskRepository.findAllByNo(cardNo)));
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult> createForTask(@RequestBody TaskVo vo) {
		boolean result = taskRepository.insertTask(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
	
	@DeleteMapping("/card/task/{no}")
	public ResponseEntity<JsonResult> deleteForTask(@PathVariable("no")Long no) {
		boolean result = taskRepository.deleteTask(no);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(no));
	}
	
	@PutMapping("/card/task")
	public ResponseEntity<JsonResult> updateForTask(@RequestBody TaskVo vo){
		boolean result = taskRepository.updateTask(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}

}
