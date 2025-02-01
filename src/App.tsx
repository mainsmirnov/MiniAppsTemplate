import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PanelIds, ViewIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { useQuery } from '@tanstack/react-query';
import { getData } from 'backend/api';

import {
  selectActiveModal,
  selectActivePanel,
  selectActiveView,
  selectPanelHistory,
} from 'store/selectors';
import { setSnackbarMessage } from 'store/uiSlice';

import { Epic, Spinner, View } from '@vkontakte/vkui';

import { InfoSnackbar } from 'components/layout/InfoSnackbar/InfoSnackbar';
import { Tabbar } from 'components/layout/Tabbar/Tabbar';
import { TestPanel } from './panels/TestPanel/TestPanel';

export const App = () => {
  const { closePanel } = useRouter();
  const dispatch = useDispatch();

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

  // query example
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['mainQuery'],
    queryFn: getData,
    retry: 1,
  });

  useEffect(() => {
    if (!data) {
      console.log('Требуется авторизация');
    }

    if (isError) {
      dispatch(setSnackbarMessage(error.message));
    }

    if (data) {
      console.log(data);
    }
  }, [dispatch, data, isError, error]);

  return (
    <>
      <InfoSnackbar />
      {isPending && <Spinner size="medium" />}
      <Epic
        activeStory={activeView}
        tabbar={<Tabbar activeView={activeView} activePanel={activePanel} />}
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
        <View id={ViewIds.Shop} activePanel={PanelIds.Shop}>
          <TestPanel id={PanelIds.Shop} />
        </View>
      </Epic>
    </>
  );
};
