const base64url = require('base64-url');
const fs = require('fs');

fs.writeFileSync('/encodedValue', base64url.encode(process.env.rawValue));