'use strict';

const { LogLevel } = require("@opentelemetry/core");
const { NodeTracerProvider } = require("@opentelemetry/node");
const { SimpleSpanProcessor, ConsoleSpanExporter } = require("@opentelemetry/tracing");

const provider = new NodeTracerProvider({
  logLevel: LogLevel.ERROR
});

provider.register();

provider.addSpanProcessor(new SimpleSpanProcessor(new ConsoleSpanExporter()));

const tracer = require('signalfx-tracing').init({
  service: 'my-traced-service',
  url: 'http://localhost:9080/v1/trace',
  accessToken: 'YOUR_ACCESS_TOKEN',
  tags: {environment: 'YOUR_ENV_TAG'}
});

console.log("tracing initialized");
