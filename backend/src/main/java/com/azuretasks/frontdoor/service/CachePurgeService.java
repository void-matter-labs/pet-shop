package com.azuretasks.frontdoor.service;

import com.azuretasks.frontdoor.repository.FrontDoorRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import reactor.core.publisher.Mono;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CachePurgeService {
  private final FrontDoorRepository frontDoorRepository;

  public Mono<Void> purgeCache(List<String> contentPaths) {
    return frontDoorRepository.purgeCache(contentPaths);
  }
}
