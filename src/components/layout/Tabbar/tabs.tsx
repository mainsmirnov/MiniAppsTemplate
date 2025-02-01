import { ViewIds } from 'enums/router';

import { ReactComponent as IconMain } from './icons/main.svg';
import { ReactComponent as IconShop } from './icons/shop.svg';

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
