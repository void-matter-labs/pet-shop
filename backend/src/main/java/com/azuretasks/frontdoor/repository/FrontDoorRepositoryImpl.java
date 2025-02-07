package com.azuretasks.frontdoor.repository;

import com.azuretasks.frontdoor.config.AzureProperties;
import com.azuretasks.frontdoor.model.PurgeRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.List;

@Repository
@RequiredArgsConstructor
@Slf4j
public class FrontDoorRepositoryImpl implements FrontDoorRepository {
  private final WebClient webClient;
  private final AzureProperties azureProperties;
  private final AzureAuthRepository azureAuthRepository;

  @Override
  public Mono<Void> purgeCache(List<String> contentPaths) {
    String endpoint = String.format(
      "https://management.azure.com/subscriptions/%s/resourceGroups/%s/providers/Microsoft.Cdn/profiles/%s/afdEndpoints/%s/purge?api-version=2024-02-01",
      azureProperties.getSubscriptionId(),
      azureProperties.getResourceGroupName(),
      azureProperties.getFrontDoorName(),
      azureProperties.getFrontDoorEndpoint()
    );

    return azureAuthRepository.getAccessToken()
      .flatMap(token -> {
        System.out.println("contentPaths: " + contentPaths);
        return webClient.post()
          .uri(endpoint)
          .header("Authorization", "Bearer " + token)
          .header("Content-Type", "application/json")
          .bodyValue(new PurgeRequest(contentPaths))
          .retrieve()
          .bodyToMono(Void.class);
      });
  }
}
