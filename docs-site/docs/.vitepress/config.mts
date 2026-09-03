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
      "text": "OpenAPI — Overview",
      "collapsed": true,
      "items": [
        {
          "text": "OpenAPI Overview",
          "link": "/reference/api/overview/"
        },
        {
          "text": "Glossary",
          "link": "/reference/api/overview/glossary"
        },
        {
          "text": "Common Response",
          "link": "/reference/api/overview/common-response"
        },
        {
          "text": "HTTP Error Codes",
          "link": "/reference/api/overview/http-error-codes"
        },
        {
          "text": "Rate Limiting",
          "link": "/reference/api/overview/rate-limiting"
        },
        {
          "text": "Command Callback",
          "link": "/reference/api/overview/command-callback"
        },
        {
          "text": "Server",
          "link": "/reference/api/overview/server"
        },
        {
          "text": "Release Notes",
          "link": "/reference/api/release-notes"
        }
      ]
    },
    {
      "text": "OpenAPI — Account",
      "collapsed": true,
      "items": [
        {
          "text": "Account API",
          "link": "/reference/api/account/"
        },
        {
          "text": "Oauth2 Authorize",
          "link": "/reference/api/account/oauth2-authorize"
        },
        {
          "text": "Oauth2 Exchange Token",
          "link": "/reference/api/account/oauth2-exchange-token"
        },
        {
          "text": "Token (for developer)",
          "link": "/reference/api/account/token-for-developer"
        },
        {
          "text": "Interface",
          "link": "/reference/api/account/interface"
        },
        {
          "text": "User Info",
          "link": "/reference/api/account/user-info"
        }
      ]
    },
    {
      "text": "OpenAPI — Device",
      "collapsed": true,
      "items": [
        {
          "text": "Device API",
          "link": "/reference/api/device/"
        },
        {
          "text": "Device List",
          "link": "/reference/api/device/device-list"
        },
        {
          "text": "Device Real Time Data",
          "link": "/reference/api/device/device-real-time-data"
        },
        {
          "text": "Device History Data",
          "link": "/reference/api/device/device-history-data"
        },
        {
          "text": "Device Statistics Data",
          "link": "/reference/api/device/device-statistics-data"
        },
        {
          "text": "Device Alarm",
          "link": "/reference/api/device/device-alarm"
        },
        {
          "text": "Work Mode Setting V1",
          "link": "/reference/api/device/hybrid-inverter-work-mode-setting-v1"
        },
        {
          "text": "Work Mode Setting V2",
          "link": "/reference/api/device/hybrid-inverter-work-mode-setting-v2"
        },
        {
          "text": "Work Mode Read",
          "link": "/reference/api/device/hybrid-inverter-work-mode-read"
        },
        {
          "text": "Work Mode Read Result",
          "link": "/reference/api/device/hybrid-inverter-work-mode-read-result"
        },
        {
          "text": "Power On Off",
          "link": "/reference/api/device/power-on-off"
        },
        {
          "text": "Power Control",
          "link": "/reference/api/device/power-control"
        },
        {
          "text": "Device Communication",
          "link": "/reference/api/device/device-communication"
        },
        {
          "text": "Feed-in Limit",
          "link": "/reference/api/device/feed-in-limit"
        }
      ]
    },
    {
      "text": "OpenAPI — Station",
      "collapsed": true,
      "items": [
        {
          "text": "Station API",
          "link": "/reference/api/station/"
        },
        {
          "text": "Station List",
          "link": "/reference/api/station/station-list"
        },
        {
          "text": "Station Device List",
          "link": "/reference/api/station/station-device-list"
        },
        {
          "text": "Station Real Time Data",
          "link": "/reference/api/station/station-real-time-data"
        },
        {
          "text": "Station History",
          "link": "/reference/api/station/station-history"
        },
        {
          "text": "Create Station",
          "link": "/reference/api/station/create-station"
        },
        {
          "text": "Modify Station",
          "link": "/reference/api/station/modify-station"
        }
      ]
    },
    {
      "text": "OpenAPI — Enumerations",
      "collapsed": true,
      "items": [
        {
          "text": "Enumerations Overview",
          "link": "/reference/api/enumerations/"
        },
        {
          "text": "Inverter",
          "link": "/reference/api/enumerations/inverter"
        },
        {
          "text": "Logger",
          "link": "/reference/api/enumerations/logger"
        },
        {
          "text": "Alarm Code",
          "link": "/reference/api/enumerations/alarm-code"
        },
        {
          "text": "Device Type",
          "link": "/reference/api/enumerations/device-type"
        },
        {
          "text": "Timezone",
          "link": "/reference/api/enumerations/timezone"
        }
      ]
    }
  ]
}
// ---sidebar:auto-end---

export default withMermaid({
  lang: 'en-US',
  title: 'Sofar Cloud',
  description: 'SOFARCloud OPEN API 2.0 developer documentation',
  cleanUrls: true,
  ignoreDeadLinks: false,
  themeConfig: {
    siteTitle: 'Sofar Cloud',
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
