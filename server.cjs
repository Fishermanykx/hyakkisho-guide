const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const types = {'index.html':'text/html; charset=utf-8','about.html':'text/html; charset=utf-8','characters.html':'text/html; charset=utf-8','editions.html':'text/html; charset=utf-8','gifts.html':'text/html; charset=utf-8','start.html':'text/html; charset=utf-8','sources.html':'text/html; charset=utf-8','style.css':'text/css; charset=utf-8','app.js':'text/javascript; charset=utf-8'};
http.createServer((req,res)=>{
 const file=req.url.split('?')[0] === '/' ? 'index.html' : req.url.split('?')[0].slice(1);
 if(!Object.hasOwn(types,file)){res.writeHead(404);res.end('Not found');return;}
 fs.readFile(path.join(__dirname,file),(err,data)=>{if(err){res.writeHead(500);res.end('Read error');return;}res.writeHead(200,{'Content-Type':types[file],'X-Content-Type-Options':'nosniff'});res.end(data);});
}).listen(4173,'127.0.0.1',()=>console.log('Preview: http://localhost:4173'));
