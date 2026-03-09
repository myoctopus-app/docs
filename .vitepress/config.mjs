export default {
  title: 'MyOctopus',
  description: 'AI-powered Mac automation',
  head: [
    ['link', { rel: 'icon', href: '/images/logo.png' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap', rel: 'stylesheet' }],
  ],
  srcExclude: ['README.md', 'CHANGELOG.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'SECURITY.md'],

  themeConfig: {
    logo: '/images/logo.png',

    nav: [
      { text: 'Website', link: 'https://myoctopus.app' },
      { text: 'Guide', link: '/getting-started' },
      { text: 'Download', link: 'https://myoctopus.app/download' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation & Setup', link: '/getting-started' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Automations', link: '/features/automations' },
          { text: 'AI Chat', link: '/features/ai-chat' },
          { text: 'Triggers', link: '/features/triggers' },
          { text: 'Preset Templates', link: '/features/preset-templates' },
        ],
      },
      {
        text: 'Integrations',
        items: [
          { text: 'Gmail', link: '/integrations/gmail' },
          { text: 'Calendar', link: '/integrations/calendar' },
          { text: 'Browser Automation', link: '/integrations/browser-automation' },
        ],
      },
      {
        text: 'Advanced',
        items: [
          { text: 'Remote Access', link: '/advanced/remote-access' },
          { text: 'MCP Server', link: '/advanced/mcp-server' },
        ],
      },
      {
        text: 'Help',
        items: [
          { text: 'FAQ', link: '/faq' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.gg/AWvXN7BUfC' },
      { icon: 'github', link: 'https://github.com/myoctopus-app/docs' },
    ],

    footer: {
      message: '<a href="https://myoctopus.app">Website</a> · <a href="https://myoctopus.app/download">Download</a> · <a href="https://myoctopus.app/pricing">Pricing</a> · <a href="https://discord.gg/AWvXN7BUfC">Discord</a>',
      copyright: '© 2025 MyOctopus App',
    },

    search: {
      provider: 'local',
    },
  },
}
