'use strict';

const soap = require('soap');

const SERVICE_URL = process.env.SERVICE_URL || 'http://localhost:8000/calculator?wsdl';

async function callOperation(client, name, a, b) {
  const method = client[`${name}Async`];
  if (typeof method !== 'function') {
    throw new Error(`SOAP method ${name} not found`);
  }

  try {
    const [response] = await method({ a, b });
    console.log(`${name}(${a}, ${b}) = ${response.result}`);
  } catch (error) {
    const fault = error?.root?.Envelope?.Body?.Fault;
    if (fault) {
      console.error(`${name}(${a}, ${b}) fault: ${fault.faultstring || 'Unknown fault'}`);
    } else {
      console.error(`${name}(${a}, ${b}) unexpected error: ${error.message}`);
    }
  }
}

async function run() {
  try {
    const client = await soap.createClientAsync(SERVICE_URL);
    console.log(`Connected to SOAP service at ${SERVICE_URL}`);

    await callOperation(client, 'add', 12, 5);
    await callOperation(client, 'subtract', 42, 18);
    await callOperation(client, 'multiply', 7, 6);
    await callOperation(client, 'divide', 144, 12);
    await callOperation(client, 'divide', 5, 0);
  } catch (error) {
    console.error(`Unable to connect to SOAP service: ${error.message}`);
    process.exitCode = 1;
  }
}

run();
