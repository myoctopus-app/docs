# Browser Automation

Control a Chromium browser with Playwright. Navigate pages, fill forms, take screenshots, and read content. Login sessions persist across app restarts.

## How It Works

The `browser_action` automation type executes a sequence of browser steps:

| Step | Description |
|------|------------|
| `navigate` | Go to a URL |
| `click` | Click an element by CSS selector |
| `fill` | Type text into an input field |
| `read_text` | Get text content of an element |
| `read_page` | Get all visible text on the page |
| `screenshot` | Capture the page as an image |
| `wait_for` | Wait for an element to appear |
| `wait` | Pause for N seconds |
| `evaluate` | Run JavaScript on the page |
| `close` | Close the browser |

## Persistent Sessions

The browser uses a persistent profile at `~/.myoctopus/browser-data/`. This means:
- WhatsApp Web stays logged in after QR scan
- Social media sessions persist
- No need to re-authenticate on every use

## Screenshot + AI Analysis

The killer feature: combine `screenshot` with `ai_generate` to let Claude **see** web pages:

```
"screenshot WhatsApp and list unread messages"
→ browser_action(navigate whatsapp, wait_for chat-list, screenshot)
→ ai_generate("Analyze this screenshot: {{actions.0.screenshot}}")
```

## Examples

| Command | What happens |
|---------|-------------|
| "open google.com in the browser" | Launches Chromium, navigates to Google |
| "fill the search box and click search" | Types into input, clicks button |
| "read this webpage and summarize it" | Reads page text, sends to Claude |
| "take a screenshot of the page" | Captures visible viewport |

## First Use

On first use, MyOctopus installs Chromium automatically via Playwright. The browser opens visibly (not headless) so you can see what's happening.
