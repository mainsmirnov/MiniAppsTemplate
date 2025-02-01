import { useCallback, useEffect } from 'react';

import bridge, { AnyReceiveMethodName, VKBridgeEvent } from '@vkontakte/vk-bridge';
import { ConfigProvider as VKUIConfigProvider } from '@vkontakte/vkui';

import { useRouter } from '../hooks/useRouter';
import { Adaptive } from './Adaptive';

export const ConfigProvider = () => {
  // set up appearance logic for different platforms here

  const { closeFromBrowserHistory } = useRouter();

  // setup app status bar
  const setDarkStatusBarColor = () => {
    if (bridge.supports('VKWebAppSetViewSettings')) {
      void bridge.send('VKWebAppSetViewSettings', {
        status_bar_style: 'dark',
      });
    }
  };

  const bridgeListener = useCallback(
    ({ detail: { type } }: VKBridgeEvent<AnyReceiveMethodName>) => {
      switch (type) {
        case 'VKWebAppUpdateConfig':
          setDarkStatusBarColor();
          return;

        case 'VKWebAppViewRestore':
          // user request when restore app
          // requestGetUser().then(
          //   (data) => {
          //     queryClient.setQueryData(['user'], data);
          //   },
          //   (error) => {
          //     dispatch(setSnackbarMessage(error.message));
          //   },
          // );
          return;
      }
    },
    []
  );

  useEffect(() => {
    window.addEventListener('popstate', closeFromBrowserHistory);
    bridge.subscribe(bridgeListener);

    void bridge.send('VKWebAppInit');

    return () => {
      bridge.unsubscribe(bridgeListener);
      window.removeEventListener('popstate', closeFromBrowserHistory);
    };
  }, [closeFromBrowserHistory]);

  return (
    <VKUIConfigProvider>
      <Adaptive />
    </VKUIConfigProvider>
  );
};
