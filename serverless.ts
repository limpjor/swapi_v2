import type { AWS } from '@serverless/typescript';


const serverlessConfiguration: AWS = {
  service: 'swapi',
  frameworkVersion: '3',
  plugins: ['serverless-esbuild','serverless-offline'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      API_URL: 'https://swapi.py4e.com/api/',
    },
  },
  // import the function via paths
  functions: {
    handler: {
      handler: 'src/handler.handler',
      events: [
        { httpApi: { path: '/vehicle/{id}', method: 'GET' } },
        { httpApi: { path: '/vehicle', method: 'GET' } },
        { httpApi: { path: '/RDS/vehicle', method: 'GET' } },
        { httpApi: { path: '/RDS/vehicle', method: 'POST' } }
      ],
    },
  },
  package: { individually: true },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ['aws-sdk'],
      target: 'node14',
      define: { 'require.resolve': undefined },
      platform: 'node',
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
