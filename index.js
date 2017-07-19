var base64url = require('base64-url');

console.log(`encodedValue=${base64url.encode(process.env.rawValue)}`);