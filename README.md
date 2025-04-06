# MCP Client TypeScript

A TypeScript client for Model Context Protocol (MCP) that integrates with Claude.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up your environment:
   - Copy `.env.example` to `.env`
   - Add your Anthropic API key to `.env`:
```
ANTHROPIC_API_KEY=your_api_key_here
```

3. Build the project:
```bash
npm run build
```

## Usage

Run the client by providing a path to your MCP server script:

```bash
node build/index.js <path_to_server_script>
```

For example:
```bash
node build/index.js ./server/mcp_server.js
```

The client will:
1. Connect to the specified MCP server
2. Start an interactive chat session
3. Process queries using Claude and available MCP tools
4. Type 'quit' to exit the session

## Environment Variables

- `ANTHROPIC_API_KEY`: Your Anthropic API key (required)

# Build TypeScript
npm run build

# Run the client
node build/index.js path/to/server.py # python server
node build/index.js path/to/build/index.js # node server