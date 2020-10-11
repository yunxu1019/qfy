call npm install qrcode-generator
call node -e "var fs=require('fs'),p='node_modules/qrcode-generator/qrcode.js',d=fs.readFileSync(p).toString().replace(/\(function\s*\(factory\)\s*\{[\s\S]*$/,'');fs.writeFileSync(p,d);"
call efront build node_modules/qrcode-generator/qrcode.js
if exist page\js\qrcode.js del page\js\qrcode.js
move public\qrcode page\js\qrcode.js
call npm uninstall qrcode-generator
if not exist node_modules del package-lock.json
rd /s /q public