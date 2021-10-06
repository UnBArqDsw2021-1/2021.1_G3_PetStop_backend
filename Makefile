up-sonar:
	docker-compose -f docker-compose.sonar.yml up -d
down-sonar:
	docker-compose -f docker-compose.sonar.yml down
run:
	docker-compose up
run-build:
	docker-compose up --build
build:
	docker-compose build
down:
	docker-compose down