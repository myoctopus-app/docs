# Calendar Integration

MyOctopus integrates with the built-in macOS Calendar app to read events, create events, and trigger automations.

## Setup

No setup needed — MyOctopus connects to Calendar.app automatically. Just grant Calendar access when macOS prompts you.

## Features

### List Events
View upcoming events for any time range. Ask in chat:
> "what's on my calendar today?"

### Create Events
Create calendar events with title, start/end time, description, location, and attendees:
> "create a meeting called Team Standup tomorrow at 10 AM"

### Find Free Slots
Find available time slots in your calendar for scheduling:
> "when am I free tomorrow afternoon?"

### Calendar Triggers
Run automations before upcoming events:
- Trigger N minutes before any event
- Filter by event title (e.g., only "standup" meetings)

See [Triggers](/features/triggers) for more on calendar triggers.

## Example: Meeting Prep

> "5 minutes before standup, open Slack and send a notification"

This creates a calendar trigger that opens Slack and notifies you before your standup meeting.

See the **Meeting Prep** preset in [Preset Templates](/features/preset-templates).

## Example: Daily Briefing

> "every morning at 8 AM, summarize today's calendar and my latest emails"

This creates a scheduled automation that fetches your calendar and emails, then AI generates an executive briefing.

See the **Daily Briefing** preset in [Preset Templates](/features/preset-templates).
