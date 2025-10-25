'use strict';

const path = require('path');
const fs = require('fs');
const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const soap = require('soap');

const PORT = process.env.PORT ? Number(process.env.PORT) : 8000;
const SERVICE_PATH = '/calculator';
const WSDL_PATH = path.join(__dirname, 'calculator.wsdl');

const wsdlXml = fs.readFileSync(WSDL_PATH, 'utf8');

function toNumber(value) {
  const parsed = Number(value);
  if (Number.isNaN(parsed) || !Number.isFinite(parsed)) {
    throw buildFault('soap:Client', 'Both parameters must be valid numbers');
  }
  return parsed;
}

function buildFault(code, message) {
  return {
    Fault: {
      faultcode: code,
      faultstring: message
    }
  };
}

function createCalculatorService() {
  return {
    CalculatorService: {
      CalculatorServiceSoapBinding: {
        add(args) {
          const a = toNumber(args.a);
          const b = toNumber(args.b);
          const result = a + b;
          console.log(`[SOAP] add(${a}, ${b}) = ${result}`);
          return { result };
        },
        subtract(args) {
          const a = toNumber(args.a);
          const b = toNumber(args.b);
          const result = a - b;
          console.log(`[SOAP] subtract(${a}, ${b}) = ${result}`);
          return { result };
        },
        multiply(args) {
          const a = toNumber(args.a);
          const b = toNumber(args.b);
          const result = a * b;
          console.log(`[SOAP] multiply(${a}, ${b}) = ${result}`);
          return { result };
        },
        divide(args) {
          const a = toNumber(args.a);
          const b = toNumber(args.b);

          if (b === 0) {
            throw buildFault('soap:Server', 'Division by zero is not allowed');
          }

          const result = a / b;
          console.log(`[SOAP] divide(${a}, ${b}) = ${result}`);
          return { result };
        }
      }
    }
  };
}

const app = express();
app.use(bodyParser.json({ limit: '1mb' }));

app.get('/', (_req, res) => {
  res.type('text/plain').send('SOAP Calculator Service running. Access the WSDL at /calculator?wsdl');
});

const server = http.createServer(app);
const service = createCalculatorService();
soap.listen(server, SERVICE_PATH, service, wsdlXml);

server.listen(PORT, () => {
  console.log(`SOAP Calculator Service running on http://localhost:${PORT}`);
  console.log(`WSDL available at http://localhost:${PORT}${SERVICE_PATH}?wsdl`);
});
