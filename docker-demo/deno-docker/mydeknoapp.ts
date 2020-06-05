import {serve} from 'https://deno.land/std/http/server.ts'

const s = serve({port:8080})

console.log('access to http://localhost:8080')

for await (const req of s) {
  req.respond({body: 'Deno vs Docker'})
}


