import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    title: 'Met-Engine',
  },
  links: [
    {
      text: 'Documentation',
      url: '/',
      active: 'nested-url',
    },
    {
      text: 'FAQs',
      url: '/faqs',
      active: 'nested-url',
    },
    {
      text: 'Bot-Commands',
      url: '/commands',
      active: 'nested-url',
    },
  ],
};
