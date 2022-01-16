import { FC } from 'react';
import { ConfigProvider as VKUIConfigProvider } from '@vkontakte/vkui';
import { Adaptive } from './Adaptive';

export const ConfigProvider: FC = () => (
  <VKUIConfigProvider>
    <Adaptive />
  </VKUIConfigProvider>
);
