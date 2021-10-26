package com.colin.manage.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String sayHello(){
        return "hello world !";
    }

    @GetMapping("/hello2")
    public String sayHello2(){
        return "hello world !";
    }
}
