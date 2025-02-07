package com.azuretasks.frontdoor.repository;

import com.azuretasks.frontdoor.config.AzureProperties;
import com.microsoft.aad.msal4j.ClientCredentialFactory;
import com.microsoft.aad.msal4j.ClientCredentialParameters;
import com.microsoft.aad.msal4j.ConfidentialClientApplication;
import com.microsoft.aad.msal4j.IAuthenticationResult;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.net.MalformedURLException;
import java.util.Collections;
import java.util.Set;

@Repository
@RequiredArgsConstructor
public class AzureAuthRepositoryImpl implements AzureAuthRepository {
  private final AzureProperties azureProperties;
  private final WebClient webClient;

  @Override
  public Mono<String> getAccessToken() {

    ConfidentialClientApplication app = null;
    try {
      app = ConfidentialClientApplication
        .builder(azureProperties.getClientId(),
          ClientCredentialFactory.createFromSecret(azureProperties.getClientSecret()))
        .authority(String.format("https://login.microsoftonline.com/%s", azureProperties.getTenantId()))
        .build();
    } catch (MalformedURLException e) {
      throw new RuntimeException(e);
    }

    Set<String> scopes = Collections.singleton(azureProperties.getScope());

    return Mono.fromFuture(app.acquireToken(ClientCredentialParameters.builder(scopes).build()))
      .map(IAuthenticationResult::accessToken);
  }
}
