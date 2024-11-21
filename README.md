# Gin Albums API

Learning Gin by building RESTful API

## API Endpoints

- `/albums`

  `GET` – Get a list of all albums, returned as JSON. <br />
  `POST` – Add a new album from request data sent as JSON.

- `/albums/:id`

  `GET` – Get an album by its ID, returning the album data as JSON.

## Demo Commands

- GET /albums

	```txt
	curl -X GET http://localhost:8080/albums
	```

- POST /albums
	
	```txt
	curl http://localhost:8080/albums --include \
	--header "Content-Type: application/json" \
	-X POST \
	--data '{"id": "4", "title": "Highwayman", "artist": "The Highwaymen", "price": 15.71}'
	```

- GET /albums/:id

	```txt
	curl -X GET http://localhost:8080/albums/2 \
	--header "Accepts: application/json"
	```

## Source

https://go.dev/doc/tutorial/web-service-gin
