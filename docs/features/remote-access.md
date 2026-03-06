# Remote Access

Control your Mac remotely via Telegram bot or a web dashboard.

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

### Example commands via Telegram:
- `open Safari`
- `set volume to 50`
- `screenshot WhatsApp and tell me unread messages`
- `/status` — check system status
- `/jobs` — list scheduled automations
- `/help` — show available commands

## Web Dashboard

Access the WebUI at `http://your-mac-ip:7777/chat`. Authenticate with your PIN.

## Cloudflare Tunnel

For access outside your local network, MyOctopus can create a Cloudflare tunnel automatically:

1. Install [cloudflared](https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/)
2. MyOctopus auto-starts a tunnel on launch
3. Access via the generated `*.trycloudflare.com` URL

## Security

- All remote sessions require PIN authentication
- Sessions expire after inactivity
- Telegram bot only responds to authenticated users
- Cloudflare tunnel encrypts traffic end-to-end
