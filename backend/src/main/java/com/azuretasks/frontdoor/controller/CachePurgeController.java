package com.azuretasks.frontdoor.controller;

import com.azuretasks.frontdoor.model.PurgeRequest;
import com.azuretasks.frontdoor.service.CachePurgeService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/cache")
@RequiredArgsConstructor
public class CachePurgeController {
  private final CachePurgeService cachePurgeService;

  @PostMapping("/purge")
  public Mono<Void> purgeCache(@RequestBody PurgeRequest request) {
    return cachePurgeService.purgeCache(request.getContentPaths());
  }
}
