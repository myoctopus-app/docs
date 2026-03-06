# Automations

Automations are sequences of actions that MyOctopus executes in order. Each action has a type and configuration.

## Available Actions

| Action | Description | Example |
|--------|------------|---------|
| `open_app` | Open/activate a macOS app | Open Safari |
| `close_app` | Quit a macOS app | Close Slack |
| `notification` | Send a macOS notification | Alert with sound |
| `open_url` | Open a URL in default browser | Open google.com |
| `shell_command` | Run a command via execFile | Say "hello" |
| `set_volume` | Set system volume (0-100) | Mute (0) |
| `toggle_dark_mode` | Toggle system dark mode | Switch theme |
| `arrange_windows` | Split windows left/right | Split layout |
| `type_text` | Type text via keystroke | Type a message |
| `applescript` | Run custom AppleScript | Complex automation |
| `gmail_fetch` | Fetch emails from inbox | Search emails |
| `gmail_send` | Send an email | Reply to sender |
| `ai_generate` | Generate text with Claude | Summarize emails |
| `calendar_list` | List calendar events | Today's events |
| `calendar_create` | Create a calendar event | Add meeting |
| `calendar_find_slots` | Find free time slots | Available times |
| `browser_action` | Automate Chromium browser | Fill a web form |
| `wait` | Pause between actions | Wait 5 seconds |

## Template Variables

Actions can reference results from previous steps using `{{path.to.value}}` syntax:

```
{{actions.0.emails}}     — emails from first action
{{actions.1.text}}       — AI-generated text from second action
{{actions.0.pageText}}   — browser page text
{{trigger.email.subject}} — email trigger subject
{{now}}                  — current ISO timestamp
{{localDate}}            — human-readable date
```

## Creating Automations

### Via Chat
Type a natural language command:
> "open Safari, go to news.ycombinator.com, and read the page"

MyOctopus generates the automation JSON automatically.

### Via Automation Builder
Use the visual builder to add actions, configure each step, and save.

## Composable Patterns

Chain actions to build powerful workflows:

- **Email summary**: `gmail_fetch` → `ai_generate("Summarize: {{actions.0.emails}}")` → `notification`
- **Web scraping**: `browser_action(navigate + read_page)` → `ai_generate("Extract: {{actions.0.pageText}}")`
- **Smart reply**: `gmail_fetch` → `ai_generate("Draft reply")` → `gmail_send`
