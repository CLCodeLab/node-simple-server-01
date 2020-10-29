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
