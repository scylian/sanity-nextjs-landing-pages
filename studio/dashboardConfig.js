export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5d726a84f88d6545369ae96b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9116dh8g',
                  apiId: '4989d273-7e06-411f-beaf-68bbb58bcc1b'
                },
                {
                  buildHookId: '5d726a840a49632322ef189b',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ym9rba8h',
                  apiId: 'ded53094-bb27-4f63-9f51-a93222a2e4bf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/scylian/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ym9rba8h.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
