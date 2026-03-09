# Browser Automation

Control a Chromium browser with MyOctopus. Navigate pages, fill forms, take screenshots, and read content. Login sessions persist across app restarts.

## How It Works

The Browser Action automation type executes a sequence of browser steps:

| Step | Description |
|------|------------|
| **Navigate** | Go to a URL |
| **Click** | Click an element on the page |
| **Fill** | Type text into an input field |
| **Read Text** | Get text content of a specific element |
| **Read Page** | Get all visible text on the page |
| **Screenshot** | Capture the page as an image |
| **Wait For** | Wait for an element to appear |
| **Wait** | Pause for N seconds |
| **Evaluate** | Run JavaScript on the page |
| **Close** | Close the browser |

## Persistent Sessions

The browser remembers your login sessions between uses. This means:
- WhatsApp Web stays logged in after QR scan
- Social media sessions persist
- No need to re-authenticate on every use

## Screenshot + AI Analysis

Combine screenshots with AI to let Claude **see** web pages:

> "screenshot WhatsApp and list unread messages"

This navigates to WhatsApp Web, takes a screenshot, and sends it to Claude for analysis.

## Examples

| Command | What happens |
|---------|-------------|
| "open google.com in the browser" | Launches Chromium, navigates to Google |
| "fill the search box and click search" | Types into input, clicks button |
| "read this webpage and summarize it" | Reads page text, sends to Claude |
| "take a screenshot of the page" | Captures visible viewport |

## First Use

On first use, MyOctopus installs Chromium automatically. The browser opens visibly (not headless) so you can see what's happening.

<!-- TODO: Screenshot needed — Browser automation in action -->
