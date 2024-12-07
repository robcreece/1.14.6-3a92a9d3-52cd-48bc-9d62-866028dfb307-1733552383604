export const searchLinks: Array<{
  id: string;
  name: string;
  keywords: string;
  shortcut?: string[];
  section: string;
  href: string;
}> = [
  {
    id: '',
    name: 'Home',
    keywords: '',
    section: 'Navigation',
    href: '/',
  },
  {
    id: 'live-deals',
    name: 'Pricing',
    keywords: '',
    section: 'Navigation',
    href: '/live-deals',
  },
  {
    id: 'about',
    name: 'About',
    keywords: '',
    section: 'Navigation',
    href: '/about',
  },
  {
    id: 'all-articles',
    name: 'Articles',
    keywords: '',
    section: 'Navigation',
    href: '/all-articles',
  },
];
