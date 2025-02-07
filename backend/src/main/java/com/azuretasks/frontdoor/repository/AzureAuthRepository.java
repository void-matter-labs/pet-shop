package com.azuretasks.frontdoor.repository;

import reactor.core.publisher.Mono;

public interface AzureAuthRepository {
  Mono<String> getAccessToken();
}
