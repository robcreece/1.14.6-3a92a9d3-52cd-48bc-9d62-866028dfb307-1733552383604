import {
  PricingTier,
  PricingTierFrequency,
} from '@/data/config/pricingDataInterface';

export const pricingTiers: PricingTier[] = [
  {
    name: 'Free',
    id: 'tier-1',
    href: '/subscribe',
    discountPrice: { '1': '', '2': '' },
    price: { '1': '$0', '2': '$0' },
    description: 'Get all goodies for free, no credit card required.',
    features: [
      'Multi-platform compatibility',
      'Real-time notification system',
      'Advanced user permissions',
    ],
    featured: false,
    highlighted: false,
    cta: 'Sign up',
  },
];

export const pricingFrequencies: PricingTierFrequency[] = [
  {
    id: '021b3915-91fb-48f2-98d7-c1cee7ec0ecd',
    value: '1',
    label: 'Monthly',
    priceSuffix: '/month',
  },
  {
    id: 'c6a5f7d9-032a-4fac-987b-b6a947f73f39',
    value: '2',
    label: 'Annually',
    priceSuffix: '/year',
  },
];
