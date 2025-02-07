package com.azuretasks.frontdoor.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
public class PurgeRequest {
  private List<String> contentPaths;
}
