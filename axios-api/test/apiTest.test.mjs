import { test, expect } from 'vitest';
import axios from 'axios';
import fs from 'fs';
import path from 'path';
import { validateJsonResponse } from '../helper/schemaValidator.mjs';

test('GET /posts/1 response should match expected schema, status, and time', async () => {
  const exampleJson = JSON.parse(
    fs.readFileSync(path.resolve('./axios-api/resources/expectedResponse.json'), 'utf-8')
  );

  // Start time
  const startTime = Date.now();

  // Hit API
  const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');

  const endTime = Date.now();
  const responseTime = endTime - startTime;

  const actualJson = response.data;

  // Validasi response body
  const { valid, errors } = validateJsonResponse(exampleJson, actualJson, (schema) => {
    if (schema.properties.title) {
      schema.properties.title.minLength = 1;
    }
  });

  if (!valid) {
    console.error('Schema validation failed:', errors);
  }

  // Assert
  expect(valid).toBe(true);
  expect(response.status).toBe(200);
  expect(responseTime).toBeLessThanOrEqual(1000); // maksimum 1 detik
});
