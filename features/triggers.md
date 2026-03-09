# Triggers

Triggers automatically run automations when specific events occur. Set them up via [AI Chat](/features/ai-chat) or the automation builder.

## Email Triggers

Run actions when specific emails arrive.

**Example:**
> "notify me when boss@company.com emails me"

**Match options:**
- **From** — sender email or name (partial match)
- **Subject** — subject keyword (partial match)

Requires [Gmail](/integrations/gmail) to be connected. Checks for new emails every 30 seconds.

## WiFi Triggers

Run actions when connecting to a specific WiFi network.

**Example:**
> "when I connect to office WiFi, email HR that I've arrived"

Checks every 15 seconds. Fires once per connection (not repeatedly while connected).

## Calendar Triggers

Run actions before upcoming calendar events.

**Example:**
> "5 minutes before any meeting, send a notification"

**Options:**
- **Minutes before** — how many minutes before the event to trigger (default: 10)
- **Title filter** — optional keyword to match specific events (partial match)

Requires [Calendar](/integrations/calendar) access. Checks every 60 seconds.

## Schedule Triggers

Run automations on a recurring schedule using natural language:

| You say | Schedule |
|---------|---------|
| "every day at 9 AM" | Daily at 9:00 |
| "weekdays at 5:30 PM" | Mon–Fri at 17:30 |
| "every 30 minutes" | Every half hour |
| "every hour" | On the hour |
| "10 PM on Mondays" | Weekly on Monday at 22:00 |

## Managing Triggers

- View all active triggers in the Dashboard
- Remove triggers via the Dashboard or Telegram (`/jobs`)
- Triggers persist across app restarts
- Each trigger shows its connection status (connected/disconnected)

<!-- TODO: Screenshot needed — Triggers in Dashboard -->
