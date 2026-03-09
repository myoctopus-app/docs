export default {
  title: 'MyOctopus',
  description: 'AI-powered Mac automation',
  head: [['link', { rel: 'icon', href: '/images/logo.png' }]],
  srcExclude: ['README.md', 'CHANGELOG.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'SECURITY.md'],

  themeConfig: {
    logo: '/images/logo.png',

    nav: [
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
      { icon: 'github', link: 'https://github.com/myoctopus-app/docs' },
    ],

    footer: {
      message: 'AI-powered Mac automation',
      copyright: '© 2025 MyOctopus',
    },

    search: {
      provider: 'local',
    },
  },
}
