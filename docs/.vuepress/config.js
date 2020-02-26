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
    docsRepo: 'fastCreator/vue-easy-admin-doc',
    docsDir: 'docs',
    editLinks: true,
    sidebarDepth: 3,
    sidebar: 'auto',
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
            text: 'DEMO',
            link: 'https://fastcreator.github.io/vue-easy-admin-demo/'
          },
          {
            text: 'GitHub',
            items: [
              {
                text: 'vue-easy-admin(框架)',
                link: 'https://github.com/fastCreator/vue-easy-admin'
              },
              {
                text: 'vue-easy-admin-components(组件)',
                link: 'https://github.com/fastCreator/vue-easy-admin-components'
              },
              {
                text: 'vue-easy-admin-demo(DEMO)',
                link: 'https://github.com/fastCreator/vue-easy-admin-demo'
              },
              {
                text: 'vue-easy-admin-doc(文档)',
                link: 'https://github.com/fastCreator/vue-easy-admin-doc'
              }
            ]
          },
          {
            text: '捐赠',
            link: '/zh/donate/'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础',
              collapsable: false,
              children: ['', 'introduction', 'service', 'project']
            },
            {
              title: '进阶',
              collapsable: false,
              children: ['microFrontEnd']
            }
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
