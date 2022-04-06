package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.JsonResult;
import com.example.demo.repository.EmaillistRepository;
import com.example.demo.vo.EmaillistVo;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@CrossOrigin
//@CrossOrigin(origins={"http://localhost:9090"}, allowedHeaders="*", allowCredentials="false", methods= {RequestMethod.GET, RequestMethod.POST, RequestMethod.PUT, RequestMethod.DELETE, RequestMethod.HEAD, RequestMethod.OPTIONS})
@RestController
@RequestMapping("/api")
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		log.info("Request [GET /api]");
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll(keyword)));
	}
	
	@PostMapping
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
		emaillistRepository.insert(vo);
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
}