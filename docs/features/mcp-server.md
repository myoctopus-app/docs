# MCP Server

MyOctopus includes a Model Context Protocol (MCP) server that lets you use automation tools directly from Claude Desktop or Claude Code.

## Setup for Claude Desktop

Add to your `~/Library/Application Support/Claude/claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "myoctopus": {
      "command": "node",
      "args": ["/path/to/myoctopus/apps/mcp-server/src/index.js"]
    }
  }
}
```

## Setup for Claude Code

Add to your project's `.mcp.json` or global MCP config:

```json
{
  "mcpServers": {
    "myoctopus": {
      "command": "node",
      "args": ["/path/to/myoctopus/apps/mcp-server/src/index.js"]
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|------------|
| `open_app` | Open a macOS application |
| `close_app` | Quit a macOS application |
| `send_notification` | Send a macOS notification |
| `open_url` | Open a URL in the default browser |
| `set_volume` | Set system volume (0-100) |
| `toggle_dark_mode` | Toggle macOS dark mode |
| `arrange_windows_split` | Split windows left/right |
| `run_applescript` | Run custom AppleScript |
| `list_running_apps` | List running applications |
| `get_frontmost_app` | Get the active application |
| `run_shell_command` | Run a shell command safely |
| `say_text` | Text-to-speech |
| `run_automation` | Run a multi-step automation |
| `browser_action` | Automate a Chromium browser |
| `gmail_configure` | Configure Gmail credentials |
| `gmail_read_inbox` | Read Gmail inbox |
| `gmail_read_email` | Read a specific email |

## Usage

Once configured, just ask Claude:

> "Open Safari and set the volume to 50"

Claude will use the MCP tools automatically.
