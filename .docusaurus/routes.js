import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '856'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'fc4'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2b2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '1f6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '911'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'b44'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'baf'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '39c'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '46f'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', 'a0e'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'c49'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'f6d'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '96c'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', '657'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '698'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'ea7'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '5e6'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '39e'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', '6e3'),
    exact: true
  },
  {
    path: '/privacy-policy',
    component: ComponentCreator('/privacy-policy', 'd80'),
    exact: true
  },
  {
    path: '/submit',
    component: ComponentCreator('/submit', 'fa1'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e65'),
    routes: [
      {
        path: '/docs/basics/ai',
        component: ComponentCreator('/docs/basics/ai', '5a8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basics/branding',
        component: ComponentCreator('/docs/basics/branding', 'c45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basics/domains',
        component: ComponentCreator('/docs/basics/domains', '5ec'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basics/no-code',
        component: ComponentCreator('/docs/basics/no-code', '300'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/basics/web-tools',
        component: ComponentCreator('/docs/basics/web-tools', 'd8c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/basics',
        component: ComponentCreator('/docs/category/basics', 'dd3'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/category/education',
        component: ComponentCreator('/docs/category/education', 'b62'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/education/books',
        component: ComponentCreator('/docs/education/books', 'aa5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/education/courses',
        component: ComponentCreator('/docs/education/courses', '05c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/education/resources',
        component: ComponentCreator('/docs/education/resources', 'faa'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/list',
        component: ComponentCreator('/docs/list', 'b71'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '07e'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
