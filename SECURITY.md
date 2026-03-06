# Security Policy

## Reporting a Vulnerability

If you discover a security vulnerability in MyOctopus, please report it responsibly.

**Do NOT open a public GitHub issue for security vulnerabilities.**

Instead, please email: **security@myoctopus.app**

We will acknowledge your report within 48 hours and provide a detailed response within 5 business days.

## Supported Versions

| Version | Supported |
|---------|-----------|
| 1.x.x   | Yes       |

## Scope

The following are in scope for security reports:

- MyOctopus desktop application
- MCP server
- Remote access server (WebUI and Telegram bot)
- Authentication and PIN system
- Gmail credential storage

## Credential Storage

MyOctopus stores credentials locally at `~/.myoctopus/config.json`. Gmail App Passwords are stored in plaintext on the local filesystem. We recommend using macOS FileVault disk encryption.
