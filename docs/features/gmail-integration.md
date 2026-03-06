# Gmail Integration

Connect your Gmail account to read emails, send messages, and create email-triggered automations.

## Setup

1. Go to **Settings > Gmail** in MyOctopus
2. Enter your Gmail address
3. Generate a [Google App Password](https://myaccount.google.com/apppasswords)
4. Enter the 16-character App Password
5. Click **Connect**

> App Passwords require 2-Step Verification enabled on your Google account.

## Features

### Read Inbox
View your latest emails directly in MyOctopus. Filter by sender or subject.

### Send Emails
Send emails via automation actions. Supports template variables for dynamic content.

### Email Triggers
Automatically run automations when specific emails arrive:
- Match by sender: `"from": "boss@company.com"`
- Match by subject: `"subject": "meeting invite"`
- Or both

## Example: Auto-Reply

```
When rajesh emails → fetch his email → AI drafts a reply → send it
```

This uses: `emailTrigger` → `gmail_fetch` → `ai_generate` → `gmail_send`

## Credentials

Gmail credentials are stored locally at `~/.myoctopus/config.json`. They never leave your machine.
