import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '@vkontakte/vkui/dist/vkui.css';
import './styles/vkui-rewrites.css';

import { ConfigProvider } from 'init/ConfigProvider';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import store from 'store/store';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw Error('Root container not found');
}

const queryClient = new QueryClient();

const root = createRoot(rootContainer);
root.render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ConfigProvider />
      </QueryClientProvider>
    </Provider>
  </StrictMode>
);
