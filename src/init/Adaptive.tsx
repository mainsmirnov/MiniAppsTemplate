import { AdaptivityProvider, AppRoot, SplitCol, SplitLayout } from '@vkontakte/vkui';

import { App } from '../App';
import { RootModal } from '../modals/RootModal';

export const Adaptive = () => (
  <AdaptivityProvider>
    <AppRoot>
      <SplitLayout modal={<RootModal />}>
        <SplitCol>
          <App />
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  </AdaptivityProvider>
);
