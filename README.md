## Introduction to Node JS

- Introduction to Node JS

- Running JS Outside Browser
  - Node REPL
    (run node on terminal)
  - Node CLI
    (run node filename.js on terminal)

- Common JS Modules

  - Default Exports
    - module.exports 
      EX:- module.exports.variable
    Can only export one item
    
  - Named Exports
    - exports 
      EX:- exports.variable1=variable 
           exports.function1=functionName
    Can export multiple items

  - Importing Modules
    - requires() 
    - EX:- const importedItem = require("filePATH") )
    - EX:- const {variable1,function1} = require("filePATH")


- Common JS6 Modules ( File extension must be .mjs )

  - Default Exports
    - export default
      EX:- export default item
    Can export only one item
    
  - Named Exports
    - export
      EX:- export {item1,item2}
    Can export multiple items
    
  - Importing Modules
    - import item from "filePATH"
      EX:- import {item1,item2} from "filepath"
    Can import multiple items
