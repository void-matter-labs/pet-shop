package com.azuretasks.frontdoor.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
public class TextController {
  @GetMapping("/text")
  public Mono<String> getText() {
    return Mono.just("Hello, World!");
  }
}
