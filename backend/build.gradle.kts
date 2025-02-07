plugins {
	java
	id("org.springframework.boot") version "3.4.2"
	id("io.spring.dependency-management") version "1.1.7"
}

group = "com.azuretasks"
version = "0.0.1-SNAPSHOT"

java {
	toolchain {
		languageVersion = JavaLanguageVersion.of(21)
	}
}

repositories {
	mavenCentral()
}

dependencies {
	implementation("org.springframework.boot:spring-boot-starter-webflux")
	testImplementation("org.springframework.boot:spring-boot-starter-test")
	testImplementation("io.projectreactor:reactor-test")
	testRuntimeOnly("org.junit.platform:junit-platform-launcher")
  compileOnly("org.projectlombok:lombok:1.18.30")
  annotationProcessor("org.projectlombok:lombok:1.18.30")
  implementation("io.github.cdimascio:dotenv-java:3.1.0")
  implementation("com.microsoft.azure:msal4j:1.18.0")
}

tasks.withType<Test> {
	useJUnitPlatform()
}
