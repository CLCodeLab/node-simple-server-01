# node-simple-server-01

Simple server created in Node.js to display the basics and minimum requirements to build a server in Node.js

## Explanation

The following are basic instructions required to create a simple server on your local computer.

## Details and Requirements

- A `http` _module_ is _imported_ or _required_ from Node.js.
- The `http.createServer()` method creates a server on your computer, that is, it turns your computer into an HTTP server.
- A good practice is to pass the `http.createServer()` to variable:

```javascript
let server = http.createServer()
```

- The `createServer()` method takes a **requestListener** function with 2 arguments **request** and a **response**.
- The **requestListener** function gets **executed** each time the **server** gets a **request**.
- From within this function, we can control the **requests** to the **routes** in our website, and **respond** back with the specific appropriate responses.

### Request Methods

- The request **object** represents the request to the server.
- `request.url('/about')` returns the request URL string.

### Response Methods

- `response.writeHead()` sends **status** and **response** **headers** to the client.

```javascript
response.writeHead(200, { 'Content-Type': 'text/plain' })
```

- `response.write()` sends **text**, or a **text stream**, to the client.

```javascript
response.write('Hello world')
```

- `response.end()` signals that the **server** should consider that the **response** is **complete**.

> **NOTE**: the `response.end('Hello world')` can also be used by itself without `.write()`, if that's the only response. Also, `.writeHead()` and `.write()` are not necessary for a basic server since the `.end()` can handle a successful response, however, it's good practice to include them.

### Listen to Requests

- To **listen** to the server from a specific **PORT** number:

```javascript
server.listen(PORT)
```

## The Code

In the **server.js** file:

```javascript
let http = require('http')

let server = http.createServer(function (request, response) {
	switch (request.url) {
		case '/':
			response.end('This is the ROOT route.')
			break
		case '/about':
			response.end('This is the ABOUT route.')
			break
		default:
			response.end("Route doesn't exist")
			break
	}
})

server.listen(3000)
```

## Starting/Shutting Down the Server

From a **command-line**, in the folder where the server file (_server.js_ in our case) resides:

### Starting the Server

```bash
node server
```

### Shutting Down the Server

**ctrl** + **C**

## Testing

- Open a browser and type in **localhost:PORT**, where in our case the **PORT** is **3000**.
- the **root** route: **localhost:3000**
- the **about** route: **localhost:3000/about**
- any other route not specified in the **request** options will take you to the **fallback** route.
