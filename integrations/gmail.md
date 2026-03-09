# Gmail Integration

Connect your Gmail account to read emails, send messages, and create email-triggered automations.

## Setup

1. Go to **Settings > Integrations > Gmail** in MyOctopus
2. Enter your Gmail address
3. Generate a [Google App Password](https://myaccount.google.com/apppasswords)
4. Enter the 16-character App Password
5. Click **Connect**

> **Note:** App Passwords require 2-Step Verification enabled on your Google account.

<!-- TODO: Screenshot needed — Gmail settings -->

## Features

### Read Inbox
View your latest emails directly in MyOctopus. Filter by sender or subject.

### Send Emails
Send emails via automation actions. Use template variables for dynamic content (e.g., AI-generated text).

### Email Triggers
Automatically run automations when specific emails arrive:
- Match by sender: `"boss@company.com"`
- Match by subject: `"meeting invite"`
- Or both

See [Triggers](/features/triggers) for more on email triggers.

## Example: Auto-Reply

Set up an automation that:
1. Detects an incoming email (email trigger)
2. Fetches the email content
3. AI drafts a professional reply
4. Sends the reply automatically

See the **Auto Reply** preset in [Preset Templates](/features/preset-templates).

## Example: Email Triage

Have AI categorize your inbox by urgency:
1. Fetch latest 30 emails
2. AI categorizes each as Urgent, Important, FYI, or Low priority
3. Get a notification with the summary

See the **Email Triage** preset in [Preset Templates](/features/preset-templates).

## Privacy

Gmail credentials are stored locally on your Mac and never leave your machine. All email processing happens on-device.
