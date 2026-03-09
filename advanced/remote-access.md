# Remote Access

Control your Mac remotely via Telegram bot or a web dashboard.

<!-- TODO: Screenshot needed — Remote Access settings -->

## Setup

1. Go to **Settings > Remote** in MyOctopus
2. Enable remote access
3. Set a PIN for authentication

## Telegram Bot

1. Create a bot via [@BotFather](https://t.me/botfather) on Telegram
2. Copy the bot token
3. Paste it in **Settings > Remote > Telegram**
4. Send a message to your bot — it will ask for your PIN
5. Once authenticated, send commands in natural language

### Commands via Telegram

| Command | Description |
|---------|------------|
| Any text message | Interpreted as a natural language command |
| `/status` | Check system status |
| `/jobs` | List scheduled automations and triggers |
| `/help` | Show available commands |

### Examples
- `open Safari`
- `set volume to 50`
- `screenshot WhatsApp and tell me unread messages`
- `what's on my calendar today?`

## Web Dashboard

Access the web UI from any browser on your local network. Authenticate with your PIN to start sending commands.

## Cloudflare Tunnel

For access outside your local network, MyOctopus can create a Cloudflare tunnel:

1. Enable tunnel in **Settings > Remote**
2. MyOctopus downloads and starts the tunnel automatically
3. Access via the generated URL from anywhere

## Security

- All remote sessions require PIN authentication
- Sessions expire after inactivity
- Failed PIN attempts trigger a temporary lockout
- Telegram bot only responds to authenticated users
- Cloudflare tunnel encrypts traffic end-to-end
