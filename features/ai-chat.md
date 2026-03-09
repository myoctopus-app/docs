# AI Chat

MyOctopus uses Claude to convert natural language into automation actions. Just type what you want to do, and it happens.

<!-- TODO: Screenshot needed — AI Chat panel -->

## How It Works

1. Type a command in the chat panel
2. Claude interprets your request and generates an automation
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
| "close all distracting apps" | Closes Slack, Discord, WhatsApp, Messages |
| "what's on my calendar today?" | Lists today's calendar events |
| "summarize my last 10 emails" | Fetches emails and generates a summary |

## AI Generate Action

The AI Generate action lets you use Claude within automations to process data. This is how MyOctopus chains intelligence with automation — fetch data, analyze it with AI, then act on the result.

**Example workflow:** Fetch 10 emails → AI summarizes them → Show notification with summary

See [Automations](/features/automations) for all available action types and template variables.

## Conversations

Chat maintains conversation history so you can refine and iterate:

- "open Safari" → runs
- "also set volume to 30" → adds to previous context
- "now save that as an automation" → saves the workflow

## Requirements

- Claude account (Free, Pro, or Max)
- Logged in via Claude Desktop or Claude Code
- MyOctopus auto-detects the session
