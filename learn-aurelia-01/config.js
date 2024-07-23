System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators",
      "es7.classProperties"
    ]
  },
  paths: {
    "*": "src/*.js",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "aurelia-bootstrapper": "npm:aurelia-bootstrapper@2.4.1",
    "aurelia-framework": "npm:aurelia-framework@1.4.1",
    "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.0",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "bootstrap": "github:twbs/bootstrap@5.3.3",
    "core-js": "npm:core-js@1.2.7",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.5.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.7.1"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.4"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:twbs/bootstrap@5.3.3": {
      "@popperjs/core": "npm:@popperjs/core@2.11.8"
    },
    "npm:assert@1.5.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "object.assign": "npm:object.assign@4.1.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.4"
    },
    "npm:aurelia-binding@2.5.4": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3"
    },
    "npm:aurelia-bootstrapper@2.4.1": {
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-framework": "npm:aurelia-framework@1.4.1",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-history-browser": "npm:aurelia-history-browser@1.4.0",
      "aurelia-loader-default": "npm:aurelia-loader-default@1.2.1",
      "aurelia-logging-console": "npm:aurelia-logging-console@1.1.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-pal-browser": "npm:aurelia-pal-browser@1.2.0",
      "aurelia-polyfills": "npm:aurelia-polyfills@1.3.4",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.11.1",
      "aurelia-templating-binding": "npm:aurelia-templating-binding@1.6.0",
      "aurelia-templating-resources": "npm:aurelia-templating-resources@1.15.1",
      "aurelia-templating-router": "npm:aurelia-templating-router@1.5.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-dependency-injection@1.5.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-event-aggregator@1.0.3": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-framework@1.4.1": {
      "aurelia-binding": "npm:aurelia-binding@2.5.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.7",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.11.1"
    },
    "npm:aurelia-history-browser@1.4.0": {
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-loader-default@1.2.1": {
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-loader@1.0.2": {
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-path": "npm:aurelia-path@1.1.7"
    },
    "npm:aurelia-logging-console@1.1.1": {
      "aurelia-logging": "npm:aurelia-logging@1.5.2"
    },
    "npm:aurelia-metadata@1.0.8": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-pal-browser@1.2.0": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-polyfills@1.3.4": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-route-recognizer@1.3.2": {
      "aurelia-path": "npm:aurelia-path@1.1.7"
    },
    "npm:aurelia-router@1.7.1": {
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-event-aggregator": "npm:aurelia-event-aggregator@1.0.3",
      "aurelia-history": "npm:aurelia-history@1.2.1",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-path": "npm:aurelia-path@1.1.7",
      "aurelia-route-recognizer": "npm:aurelia-route-recognizer@1.3.2"
    },
    "npm:aurelia-task-queue@1.3.3": {
      "aurelia-pal": "npm:aurelia-pal@1.8.2"
    },
    "npm:aurelia-templating-binding@1.6.0": {
      "aurelia-binding": "npm:aurelia-binding@2.5.4",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-templating": "npm:aurelia-templating@1.11.1"
    },
    "npm:aurelia-templating-resources@1.15.1": {
      "aurelia-binding": "npm:aurelia-binding@2.5.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.7",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "aurelia-templating": "npm:aurelia-templating@1.11.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-templating-router@1.5.0": {
      "aurelia-binding": "npm:aurelia-binding@2.5.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.7",
      "aurelia-router": "npm:aurelia-router@1.7.1",
      "aurelia-templating": "npm:aurelia-templating@1.11.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aurelia-templating@1.11.1": {
      "aurelia-binding": "npm:aurelia-binding@2.5.4",
      "aurelia-dependency-injection": "npm:aurelia-dependency-injection@1.5.2",
      "aurelia-loader": "npm:aurelia-loader@1.0.2",
      "aurelia-logging": "npm:aurelia-logging@1.5.2",
      "aurelia-metadata": "npm:aurelia-metadata@1.0.8",
      "aurelia-pal": "npm:aurelia-pal@1.8.2",
      "aurelia-path": "npm:aurelia-path@1.1.7",
      "aurelia-task-queue": "npm:aurelia-task-queue@1.3.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.7.1": {
      "base64-js": "npm:base64-js@1.5.1",
      "ieee754": "npm:ieee754@1.2.1"
    },
    "npm:call-bind@1.0.7": {
      "es-define-property": "npm:es-define-property@1.0.0",
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2",
      "get-intrinsic": "npm:get-intrinsic@1.2.4",
      "set-function-length": "npm:set-function-length@1.2.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:define-data-property@1.1.4": {
      "es-define-property": "npm:es-define-property@1.0.0",
      "es-errors": "npm:es-errors@1.3.0",
      "gopd": "npm:gopd@1.0.1"
    },
    "npm:define-properties@1.2.1": {
      "define-data-property": "npm:define-data-property@1.1.4",
      "has-property-descriptors": "npm:has-property-descriptors@1.0.2",
      "object-keys": "npm:object-keys@1.1.1"
    },
    "npm:es-define-property@1.0.0": {
      "get-intrinsic": "npm:get-intrinsic@1.2.4"
    },
    "npm:get-intrinsic@1.2.4": {
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2",
      "has-proto": "npm:has-proto@1.0.3",
      "has-symbols": "npm:has-symbols@1.0.3",
      "hasown": "npm:hasown@2.0.2"
    },
    "npm:gopd@1.0.1": {
      "get-intrinsic": "npm:get-intrinsic@1.2.4"
    },
    "npm:has-property-descriptors@1.0.2": {
      "es-define-property": "npm:es-define-property@1.0.0"
    },
    "npm:hasown@2.0.2": {
      "function-bind": "npm:function-bind@1.1.2"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:object.assign@4.1.5": {
      "call-bind": "npm:call-bind@1.0.7",
      "define-properties": "npm:define-properties@1.2.1",
      "has-symbols": "npm:has-symbols@1.0.3",
      "object-keys": "npm:object-keys@1.1.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:set-function-length@1.2.2": {
      "define-data-property": "npm:define-data-property@1.1.4",
      "es-errors": "npm:es-errors@1.3.0",
      "function-bind": "npm:function-bind@1.1.2",
      "get-intrinsic": "npm:get-intrinsic@1.2.4",
      "gopd": "npm:gopd@1.0.1",
      "has-property-descriptors": "npm:has-property-descriptors@1.0.2"
    },
    "npm:util@0.10.4": {
      "inherits": "npm:inherits@2.0.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
