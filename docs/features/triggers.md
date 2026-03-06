# Triggers

Triggers automatically run automations when specific events occur.

## Email Triggers

Run actions when specific emails arrive.

```
"notify me when boss@company.com emails me"
→ emailTrigger(from: "boss@company.com") → notification
```

**Match options:**
- `from` — sender email or name (partial match)
- `subject` — subject keyword (partial match)

Requires Gmail to be connected. Polls every 30 seconds.

## WiFi Triggers

Run actions when connecting to a specific WiFi network.

```
"when I connect to office WiFi, email HR that I've arrived"
→ wifiTrigger(ssid: "OfficeWiFi") → gmail_send
```

Polls every 15 seconds. Fires once per connection (not repeatedly while connected).

## Calendar Triggers

Run actions before upcoming calendar events.

```
"5 minutes before any meeting, send a notification"
→ calendarTrigger(minutesBefore: 5) → notification
```

**Options:**
- `minutesBefore` — how many minutes before the event (default: 10)
- `match.title` — optional title filter (partial match)

Polls every 60 seconds.

## Schedule Triggers

Run automations on a recurring schedule using natural language:

| You say | Schedule |
|---------|---------|
| "every day at 9 AM" | `0 9 * * *` |
| "weekdays at 5:30 PM" | `30 17 * * 1-5` |
| "every 30 minutes" | `*/30 * * * *` |
| "every hour" | `0 * * * *` |
| "10 PM on mondays" | `0 22 * * 1` |

## Managing Triggers

- View all triggers in the Dashboard
- Remove triggers via the UI or Telegram (`/jobs`)
- Triggers persist across app restarts
