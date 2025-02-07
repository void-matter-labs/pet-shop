package com.azuretasks.frontdoor;

import com.azuretasks.frontdoor.config.AzureProperties;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@SpringBootApplication
@EnableConfigurationProperties(AzureProperties.class)
public class FrontdoorApplication {

	public static void main(String[] args) {

		SpringApplication.run(FrontdoorApplication.class, args);
	}

}
