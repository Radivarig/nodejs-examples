##node.js
 Platform for building packages
 
* installation (on archlinux)
```sh
$ node pacman -S nodejs
```

now you have command `npm` available in terminal

* change directory to new folder
```sh
$ mkdir testModule; cd testModule
```

###module (package)
* any folder that has file `package.json` containing item `"main": "name-of-file-to-load-on-require.js"`
* anyfile.js

modules can be required in code,
```
var MyModule1 = require('some-module')
var MyModule2 = require('./some-file.js')
```

to access variables they have to be exported, the rest is private
```
module.exports = {
    exportVarName: inCodeVarName,
    exportFuncName: inCodeFuncName,
}
```
now we can access them
```
MyModule2.exportFuncName(exportVarName)
```

###package.json
* file that contains items related to module, let's generate one
```
$ npm init
```
* example with explanations [package.json]

###npm
node package manager

* installing modules/packages, `--save` will modify package.json and add package-name with version number to dependencies item
```
$ npm install package-name [--save |--save-dev |--save-optional]
```
* add a script to package.json
```
"scripts": {"test": "./local/path/to/script.js --some --arguments",}
```
then run it with
```
npm run test --additional --arguments
```

[package.json]: http://browsenpm.org/package.json