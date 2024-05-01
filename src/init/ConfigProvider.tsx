import { useEffect } from 'react';

import bridge from '@vkontakte/vk-bridge';
import { ConfigProvider as VKUIConfigProvider } from '@vkontakte/vkui';

import { useRouter } from '../hooks/useRouter';
import { Adaptive } from './Adaptive';

export const ConfigProvider = () => {
  // set up appearance logic for different platforms here

  const { closeFromBrowserHistory } = useRouter();

  useEffect(() => {
    window.addEventListener('popstate', closeFromBrowserHistory);

    void bridge.send('VKWebAppInit');
    return () => window.removeEventListener('popstate', closeFromBrowserHistory);
  }, [closeFromBrowserHistory]);

  return (
    <VKUIConfigProvider>
      <Adaptive />
    </VKUIConfigProvider>
  );
};
