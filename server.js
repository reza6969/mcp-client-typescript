import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';

const server = new Server({
    name: 'test-server',
    version: '1.0.0',
    tools: [{
        name: 'hello',
        description: 'A simple hello world tool',
        handler: async (params) => {
            return { content: 'Hello from the server!' };
        }
    }]
});

const transport = new StdioServerTransport();
await server.connect(transport);

// console.log('Server started', server);