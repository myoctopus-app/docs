# FAQ

## General

### What Claude plan do I need?
Claude Free works for basic use. Claude Pro or Max is recommended for heavy use, as free accounts have lower rate limits. You can also use an API key.

### Is my data sent to the cloud?
No. MyOctopus runs entirely on your Mac. Your automations, credentials, and data stay on your machine. The only external calls are to Claude (for AI features) and Gmail (if connected).

### How do I update MyOctopus?
Check **Settings > About** for your current version. Download the latest release from the [Releases page](https://github.com/myoctopus-app/docs/releases/latest).

### What macOS version do I need?
macOS 13 (Ventura) or later.

## Permissions

### How do I fix permission issues?
Go to **System Settings > Privacy & Security** and grant MyOctopus access to:
- **Accessibility** — required for controlling apps and typing text
- **Automation** — required for sending commands to apps
- **Notifications** — required for notification actions

You may need to remove and re-add MyOctopus if permissions aren't working.

## Gmail

### Can I use MyOctopus without Gmail?
Yes. Gmail is completely optional. All non-email features work without it.

### Why do I need an App Password?
Google requires App Passwords for third-party apps when 2-Step Verification is enabled. Your regular Google password won't work. Generate one at [Google App Passwords](https://myaccount.google.com/apppasswords).

### Are my Gmail credentials safe?
Yes. Credentials are stored locally on your Mac and encrypted. They never leave your machine.

## Triggers

### Why isn't my trigger firing?
Check these common causes:
- **Email triggers**: Make sure Gmail is connected (check Settings > Integrations)
- **WiFi triggers**: Verify the WiFi network name matches exactly
- **Calendar triggers**: Ensure Calendar access is granted in System Settings
- **All triggers**: Check the Dashboard for trigger status (connected/disconnected)

### How often do triggers check for events?
- Email triggers: every 30 seconds
- WiFi triggers: every 15 seconds
- Calendar triggers: every 60 seconds

## Remote Access

### How do I reset my remote PIN?
Go to **Settings > Remote** and set a new PIN.

### Can I access my Mac from outside my network?
Yes, using Cloudflare Tunnel. Enable it in **Settings > Remote**. See [Remote Access](/advanced/remote-access) for setup instructions.

## Automations

### Can I run multiple automations at once?
Yes. MyOctopus supports concurrent execution of multiple automations.

### What happens if an action fails?
By default, the automation stops on failure. You can enable "Continue on Error" when building an automation to skip failed actions and continue with the rest.

### Can I use variables between actions?
Yes. Use template variables (like <code v-pre>{{actions.stepId.output}}</code>) to pass data between steps. See [Automations](/features/automations) for the full list of available variables.

## MCP Server

### What is the MCP Server?
It lets you use MyOctopus tools directly from Claude Desktop or Claude Code, so you can say "open Safari" in Claude and it happens on your Mac. See [MCP Server](/advanced/mcp-server) for setup.

## Still need help?

[Report an issue on GitHub](https://github.com/myoctopus-app/docs/issues)
