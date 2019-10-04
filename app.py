import http.server
import socketserver
import os

PORT = int(os.environ.get('PORT', 5000))

web_dir = os.path.join(os.path.dirname(__file__), 'Website')
os.chdir(web_dir)

Handler = http.server.SimpleHTTPRequestHandler
httpd = socketserver.TCPServer(("", PORT), Handler)
print("serving at port", PORT)
httpd.serve_forever()
