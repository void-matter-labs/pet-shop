package com.azuretasks.frontdoor.model;

import lombok.Data;

@Data
public class AuthenticationResponse {
  private String accessToken;
  private String tokenType;
  private long expiresIn;
}
