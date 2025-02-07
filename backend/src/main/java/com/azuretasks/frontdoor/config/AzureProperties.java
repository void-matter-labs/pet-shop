package com.azuretasks.frontdoor.config;

import lombok.Getter;
import lombok.Setter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Getter
@Setter
@Configuration
@ConfigurationProperties(prefix = "azure")
public class AzureProperties {
  @Value("${AZURE_CLIENT_ID}")
  private String clientId;

  @Value("${AZURE_CLIENT_SECRET}")
  private String clientSecret;

  @Value("${AZURE_TENANT_ID}")
  private String tenantId;

  @Value("${AZURE_SCOPE}")
  private String scope;

  @Value("${AZURE_FRONT_DOOR_ENDPOINT}")
  private String frontDoorEndpoint;

  @Value("${AZURE_SUBSCRIPTION_ID}")
  private String subscriptionId;

  @Value("${AZURE_RESOURCE_GROUP_NAME}")
  private String resourceGroupName;

  @Value("${AZURE_FRONT_DOOR_NAME}")
  private String frontDoorName;
}
