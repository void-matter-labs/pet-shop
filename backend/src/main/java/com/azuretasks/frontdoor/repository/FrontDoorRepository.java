package com.azuretasks.frontdoor.repository;

import reactor.core.publisher.Mono;

import java.util.List;

public interface FrontDoorRepository {
  Mono<Void> purgeCache(List<String> contentPaths);
}
