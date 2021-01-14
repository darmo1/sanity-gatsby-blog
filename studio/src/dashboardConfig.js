export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fffd4208de95c58848edcce',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sxuuvdu7',
                  apiId: '70214a4c-adc0-4f3d-8639-76f0a097bac6'
                },
                {
                  buildHookId: '5fffd420b949b645c5a52147',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-veqi9b9n',
                  apiId: 'c9c0a25f-1312-4fcf-a1ab-9f926aefc554'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/darmo1/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-veqi9b9n.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
