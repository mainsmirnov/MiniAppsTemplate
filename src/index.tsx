import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import '@vkontakte/vkui/dist/vkui.css';

import { ConfigProvider } from 'init/ConfigProvider';

import store from 'store/store';

const rootContainer = document.getElementById('root');
if (!rootContainer) {
  throw Error('Can\'t find root container');
}

const root = createRoot(rootContainer);
root.render(
  <StrictMode>
    <Provider store={store}>
      <ConfigProvider />
    </Provider>
  </StrictMode>
);
