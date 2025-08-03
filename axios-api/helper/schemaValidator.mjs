import generateSchema from 'generate-schema';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';


export function validateJsonResponse(exampleJson, actualJson, enhanceSchema = () => {}) {
  const schema = buildSchemaFromExample(exampleJson, enhanceSchema);
  const validator = compileSchemaValidator(schema);
  const isValid = validator(actualJson);

  return {
    valid: isValid,
    errors: validator.errors || [],
  };
}

function buildSchemaFromExample(exampleJson, enhanceSchema) {
  const schema = generateSchema.json('GeneratedSchema', exampleJson);
  delete schema["$schema"]; // Hindari konflik saat validasi
  enhanceSchema(schema);

  // Contoh tambahan validasi manual
  if (schema.properties?.id) {
    schema.properties.id.type = "integer";
  }

  return schema;
}

function compileSchemaValidator(schema) {
  const ajv = new Ajv({
    strict: true,
    coerceTypes: false,
    allErrors: true,
  });
  addFormats(ajv);
  return ajv.compile(schema);
}
