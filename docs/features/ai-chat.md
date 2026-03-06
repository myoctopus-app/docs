# AI Chat

MyOctopus uses Claude (via the Agent SDK) to convert natural language into automation actions.

## How It Works

1. Type a command in the chat panel
2. Claude interprets your request and generates a JSON automation
3. Review the proposed actions
4. Click **Run** to execute

## Examples

| You say | MyOctopus does |
|---------|---------------|
| "open Safari" | Opens Safari |
| "set volume to 50 and toggle dark mode" | Two actions in sequence |
| "every weekday at 9 AM, open Slack" | Creates a scheduled automation |
| "when boss emails me, send a notification" | Creates an email trigger |
| "screenshot WhatsApp and tell me unread messages" | Browser automation + AI analysis |

## AI Generate Action

The `ai_generate` action lets you use Claude within automations to process data:

```
ai_generate("Summarize these emails: {{actions.0.emails}}")
```

This is how MyOctopus chains intelligence with automation — fetch data, analyze it with AI, then act on the result.

## Requirements

- Claude account (Max, Pro, or API key)
- Logged in via Claude Desktop or Claude Code
- MyOctopus auto-detects the session from `~/.claude/`
