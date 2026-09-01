import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// ---------------------------------------------------------------------------
// Sidebar managed block. The statement between the two `sidebar:auto` markers
// below (`const sidebar = ...`) is OWNED by the local doc workbench (../admin):
// the workbench rewrites ONLY what is between the markers; everything outside
// them is hand-editable and preserved. Keep the marker lines intact.
// ---------------------------------------------------------------------------
// ---sidebar:auto-begin---
const sidebar = {
  "/": [
    {
      "text": "Guide",
      "items": [
        {
          "text": "Get started",
          "link": "/guide/quickstart"
        },
        {
          "text": "Writing guide",
          "link": "/guide/writing"
        },
        {
          "text": "Diagrams & math",
          "link": "/guide/diagrams"
        }
      ]
    },
    {
      "text": "Workbench",
      "items": [
        {
          "text": "Document workbench",
          "link": "/develop/workbench"
        },
        {
          "text": "Sidebar management",
          "link": "/develop/sidebar"
        }
      ]
    },
    {
      "text": "Reference",
      "collapsed": true,
      "items": [
        {
          "text": "Site configuration",
          "link": "/reference/site-config"
        },
        {
          "text": "Deployment",
          "link": "/reference/deploy"
        },
        {
          "text": "Doc conventions",
          "link": "/reference/conventions"
        }
      ]
    }
  ]
}
// ---sidebar:auto-end---

export default withMermaid({
  lang: 'en-US',
  title: 'DevDocs Portal',
  description: 'Developer documentation portal built with VitePress',
  cleanUrls: true,
  ignoreDeadLinks: false,
  themeConfig: {
    siteTitle: 'DevDocs Portal',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Search docs', buttonAriaLabel: 'Search docs' },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No results found',
            footer: { selectText: 'Select', navigateText: 'Navigate', closeText: 'Close' }
          }
        }
      }
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/jackxuexue/docs-portal' }],
    editLink: {
      pattern: 'https://github.com/jackxuexue/docs-portal/edit/main/docs-site/docs/:path',
      text: 'Edit this page on GitHub'
    },
    outline: { label: 'On this page', level: 'deep' },
    docFooter: { prev: 'Previous', next: 'Next' },
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light theme',
    darkModeSwitchTitle: 'Switch to dark theme',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Return to top',
    sidebar
  },
  mermaid: {
    theme: 'default'
  },
  vite: {
    optimizeDeps: {
      // fastdom (a mermaid dependency) ships as a browser-global UMD file;
      // without pre-bundling, vite dev serves it raw and the browser fails
      // with "does not provide an export named 'default'".
      include: ['mermaid', 'fastdom']
    }
  }
})
