package com.azuretasks.frontdoor.config;


import io.github.cdimascio.dotenv.Dotenv;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;

@Configuration
@Order(Ordered.HIGHEST_PRECEDENCE)
public class DotenvConfig {

  static {
    try {
      String rootPath = System.getProperty("user.dir");
      Dotenv dotenv = Dotenv.configure()
        .directory(rootPath)
        .filename(".env")
        .load();

      dotenv.entries().forEach(entry -> {
        System.setProperty(entry.getKey(), entry.getValue());
      });
    } catch (Exception e) {
      System.err.println("Error loading .env file: " + e.getMessage());
    }
  }
}
