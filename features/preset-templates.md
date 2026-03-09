# Preset Templates

MyOctopus comes with 13 built-in automation templates you can use instantly. Access them from the Automations view or ask in chat: `"show me presets"`.

## Productivity

### Focus Mode
Close distracting apps (Slack, Discord, WhatsApp, Messages), mute volume, and enable dark mode for deep focus.

**Actions:** Close 4 apps → Mute volume → Toggle dark mode → Notification

### Morning Setup
Open your daily work apps and set a comfortable volume to start the day.

**Actions:** Open Safari, Mail, Calendar → Set volume to 30 → Notification

## Email

### Quick Email Check
Fetch your latest 10 emails and get a summary notification.

**Actions:** Fetch emails → Notification with summary

> Requires [Gmail](/integrations/gmail) to be connected.

## Entertainment

### Music Time
Open Spotify and set volume to a comfortable listening level.

**Actions:** Open Spotify → Set volume to 40

## Executive

### Daily Briefing
Get today's calendar events and recent emails summarized by AI into a concise executive briefing.

**Actions:** List today's events → Fetch 20 emails → AI generates briefing → Notification

### Meeting Prep
Get notified before meetings with event details. Pair with a [calendar trigger](/features/triggers) for automatic alerts.

**Actions:** Notification with meeting details → Open Notes app

### End of Day Report
Summarize today's completed events and generate an end-of-day update with follow-ups and tomorrow's priorities.

**Actions:** List today's events → AI generates EOD report → Notification

### Email Triage
Fetch and AI-categorize your emails by urgency: Urgent, Important, FYI, and Low priority.

**Actions:** Fetch 30 emails with body → AI categorizes by urgency → Notification

## Power User

### Email to Calendar
Automatically create calendar events from emails containing meeting details. Best paired with an [email trigger](/features/triggers).

**Actions:** Fetch triggered email → AI extracts date/time → Create calendar event

### Auto Reply
Auto-reply to emails with an AI-generated professional response. Pair with an [email trigger](/features/triggers) to automate responses.

**Actions:** Fetch triggered email → AI drafts reply → Send email

## Development

### Dev Environment
Open Terminal, VS Code, and Chrome side by side for a ready-to-code workspace.

**Actions:** Open Terminal, VS Code, Chrome → Wait 2s → Split windows → Set volume to 20 → Notification

### Git Status Check
Run `git status` and show the result as a notification.

**Actions:** Run git status → Notification with output

### Deploy Alert
Get notified (with sound and voice) when deployment emails arrive. Pair with an [email trigger](/features/triggers) matching deployment notification emails.

**Actions:** Notification with deploy info → Voice announcement

## Using Presets

1. Go to **Automations** view
2. Browse or search preset templates
3. Click a preset to preview its actions
4. Click **Use** to add it to your automations
5. Optionally customize actions before saving

You can also ask in chat:
> "use the Focus Mode preset"
> "run Morning Setup"
