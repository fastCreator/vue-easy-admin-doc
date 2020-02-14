var nav = require('./nav.js')
var { EcosystemNav, ComponentNav } = nav

var utils = require('./utils.js')
var { genNav, getComponentSidebar, deepClone } = utils

module.exports = {
  title: 'vue-easy-admin',
  description: '快速开发中后台的VUE微前端架构',
  base: '/vue-easy-admin-doc/',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ]
  ],
  themeConfig: {
    repo: 'fastCreator/vue-easy-admin',
    docsRepo: 'fastCreator/vue-easy-admin-doc',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    algolia: {
      apiKey: '', //等待申请
      indexName: 'vue-easy-admin-doc'
    },
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在 GitHub 上编辑此页',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: '配置参考',
            items: genNav(deepClone(ComponentNav), 'ZH')
          },
          {
            text: '生态系统',
            items: genNav(deepClone(EcosystemNav), 'ZH')
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          },
          {
            text: '中文站点(gitee)',
            link: 'https://panjiachen.gitee.io/vue-easy-admin-doc/zh/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: genEssentialsSidebar('/zh')
            },
            {
              title: '服务',
              collapsable: false,
              children: genConfigSidebar('/zh')
            },
            {
              title: '其它',
              collapsable: false,
              children: [
                '/zh/guide/other/faq.md',
                '/zh/guide/other/release-notes.md'
              ]
            }
          ],
          '/zh/feature/component/': getComponentSidebar(
            deepClone(ComponentNav),
            'ZH'
          ),
          '/zh/feature/script/': [
            '/zh/feature/script/svgo.md',
            '/zh/feature/script/new.md'
          ]
        }
      }
    }
  },
  locales: {
    '/': {
      lang: 'zh-CN',
      description: '快速开发中后台的VUE微前端架构'
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@public': './public'
      }
    }
  },
  ga: ''
}

function genEssentialsSidebar(type = '') {
  const mapArr = [
    '/guide/',
    '/guide/essentials/start.md',
    '/guide/essentials/microFrontEnd.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}

function genConfigSidebar(type = '') {
  const mapArr = [
    '/guide/config/config.md',
    '/guide/config/container.md',
    '/guide/config/page.md'
  ]
  return mapArr.map(i => {
    return type + i
  })
}
