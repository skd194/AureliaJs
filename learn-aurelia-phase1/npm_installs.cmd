@echo off
:: Suppress the display of commands as they are executed

:: Install global npm packages
:: This installs the specified version of JSPM globally for use in various projects
npm install -g jspm@0.16.55 

:: This installs http-server and rimraf globally, which are also useful tools
npm install -g http-server rimraf

:: Initialize a new npm project
:: This creates a package.json file with default settings, allowing you to manage project dependencies
npm init -y

:: Install JSPM locally for this project
:: Although JSPM is installed globally, it's also installed locally as a project dependency for better version control
:: Here JSPM is installed as a global command-line tool to mainly use it as a Package manager(here we may use npm also).
:: In addition to that, we can use it for other functionalities such as 'Module loader', 'Transpiler / polyfills'.
:: To use these, it's better to install JSPM locally.
npm install jspm@0.16.55 --save

:: Delete the node_modules folder if it exists
:: rimraf is used here to clean up the node_modules folder efficiently. This step is optional and depends on whether you need to reset your dependencies
:: Command to delete the node_modules folder efficiently if not required
rimraf .\node_modules\ 

:: Install packages listed in package.json
:: This installs all dependencies specified in the package.json file
npm install 

:: Configure the JSPM registry to use GitHub
:: This sets up JSPM to fetch packages from GitHub, which might be needed depending on your package sources
jspm registry config github

:: Initialize JSPM
:: This sets up JSPM configuration files for the project, which may involve creating jspm.config.js and other related files
jspm init

:: Install the aurelia-framework package using JSPM
:: This command installs the aurelia-framework library via JSPM, making it available for use in your project
jspm install aurelia-framework

:: Install packages using JSPM
:: This command installs the packages specified in the jspm.config.js file or other JSPM configuration files.
:: It fetches and installs the necessary dependencies for your project as defined in JSPM's configuration.
jspm install