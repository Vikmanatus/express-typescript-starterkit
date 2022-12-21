include .env

sonar-scanner:
	@sonar-scanner -Dsonar.host.url=${SONAR_URL} -Dsonar.login=${SONAR_TOKEN} 