@echo off
:: Install global npm packages
npm install -g jspm@0.16.55 
npm install -g http-server rimraf

:: Initialize a new npm project
npm init -y

:: Here JSPM is installed as a global command-line tool to mainly use it as a Package manager(here we may use npm also).
:: In addition to that, we can use it for other functionalities such as 'Module loader', 'Transpiler / polyfills'.
:: To use these, it's better to install JSPM locally.
npm install jspm@0.16.55 --save

:: Command to delete the node_modules folder efficiently if not required
rimraf .\node_modules\ 

:: install packages
npm install 

:: Configure the JSPM registry with GitHub
jspm registry config github