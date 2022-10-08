package com.emotion.emotionlogger.controller;

import lombok.extern.log4j.Log4j2;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Log4j2
@RestController
public class AuthorizationController {

    @GetMapping("/api/auth")
    @CrossOrigin
    public ResponseEntity<Void> auth() {
        log.info("Login success!");
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
