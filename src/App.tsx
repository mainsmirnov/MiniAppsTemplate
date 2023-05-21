import { useSelector } from 'react-redux';

import { PanelIds, ViewIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { selectActivePanel } from 'store/router/selectors/selectActivePanel';
import { selectActiveModal } from 'store/router/selectors/selectActiveModal';
import { selectPanelHistory } from 'store/router/selectors/history/selectPanelHistory';

import { View } from '@vkontakte/vkui';
import { ShowId } from './panels/ShowId/ShowId';

export const App = () => {
  const { closePanel } = useRouter();

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
    <View id={ViewIds.Home} onSwipeBack={onSwipeBack} history={panelsHistory} activePanel={activePanel}>
      <ShowId id={PanelIds.Panel1} />
      <ShowId id={PanelIds.Panel2} />
    </View>
  );
};

