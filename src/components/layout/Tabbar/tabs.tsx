import { ViewIds } from 'enums/router';

import IconMain from './icons/main.svg?react';
import IconShop from './icons/shop.svg?react';

export const tabs = [
  {
    id: ViewIds.Main,
    text: 'Main',
    icon: <IconMain />,
  },
  {
    id: ViewIds.Shop,
    text: 'Shop',
    icon: <IconShop />,
  },
];
