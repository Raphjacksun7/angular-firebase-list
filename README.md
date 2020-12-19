# STUDMIA

Front-end: Angular |
Back-end: Firebase

## Login Credentials

  email: hello@example.com
  passord: 12356

## Dependencies

Ensure these are installed before going further:

- docker@\^18.05.0-ce
- docker-compose@\^1.21.2

### 0. setup

    Navigate to the root folder where you have docker-compose.yml and Dockerfile files

### 1.1 Dockerfile

#### 1.1.1 Build and tag the Docker image:

    $ docker build -t app_studmia:dev .

#### 1.1.2 Then, spin up the container once the build is done:

    $ docker run -v ${PWD}:/app -v /app/node_modules -p 4201:4200 --rm app_studmia:dev

#### 1.1.3 Run the unit and e2e tests:

    $ docker exec -it foo ng test --watch=false
    $ docker exec -it foo ng e2e --port 4202

#### 1.1.4 Stop the container once done:

    $ docker stop foo

### 1.2 You can also use Docker Compose

#### 1.2.1 Build the image and fire up the container:

    $ docker-compose up -d --build

### 1.2.2 The unit and e2e tests:

    $ docker-compose exec app_studmia ng test --watch=false
    $ docker-compose exec app_studmia ng e2e --port 4202

#### 1.2.3 Stop the container before moving on:

    $ docker-compose stop

You can begin editing code on your host machine, changes will be detected and all relevant processes restarted or live-reloaded inside their containers.

## 3. inspect

    docker-compose ps (print status)
    docker-compose logs api front (attaches to logs of one or more services)
