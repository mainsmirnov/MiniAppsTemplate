import { useSelector } from 'react-redux';

import { PanelIds, ViewIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import {
  selectActiveModal,
  selectActivePanel,
  selectActiveView,
  selectPanelHistory,
} from 'store/routerSlice';

import { Epic, View } from '@vkontakte/vkui';

import { Navbar } from 'components/layout/Navbar/Navbar';
import { TestPanel } from './panels/TestPanel/TestPanel';

export const App = () => {
  const { closePanel } = useRouter();

  const activeView = useSelector(selectActiveView);
  const activePanel = useSelector(selectActivePanel);
  const activeModal = useSelector(selectActiveModal);
  const panelsHistory = useSelector(selectPanelHistory);

  const onSwipeBack = () => {
    if (activeModal) {
      return;
    }

    closePanel();
  };

  return (
    <Epic
      activeStory={activeView}
      tabbar={<Navbar activeView={activeView} activePanel={activePanel} />}
    >
      <View
        id={ViewIds.Main}
        onSwipeBack={onSwipeBack}
        history={panelsHistory}
        activePanel={activePanel}
      >
        <TestPanel id={PanelIds.Main} />
        <TestPanel id={PanelIds.Panel2} />
      </View>
      <View
        id={ViewIds.Shop}
        activePanel={PanelIds.Shop}
      >
        <TestPanel id={PanelIds.Shop} />
      </View>
    </Epic>

  );
};
