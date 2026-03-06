# Calendar Integration

MyOctopus integrates with macOS Calendar.app to read events, create events, and trigger automations.

## Setup

No setup needed — MyOctopus connects to Calendar.app automatically. Grant Calendar access when prompted.

## Features

### List Events
View upcoming events for any time range.

### Create Events
Create calendar events with title, start/end time, description, location, and attendees.

### Find Free Slots
Find available time slots in your calendar for scheduling meetings.

### Calendar Triggers
Run automations before upcoming events:
- Trigger N minutes before any event
- Filter by event title (e.g., "standup")

## Example: Meeting Prep

```
"5 minutes before standup, open Slack and send a notification"
```

Uses: `calendarTrigger(minutesBefore: 5, match: "standup")` → `open_app(Slack)` → `notification`
