import { useDispatch, useSelector } from 'react-redux';

import { ModalIds, PanelIds, ViewIds } from '../enums/router';
import {
  selectModalHistory,
  selectPanelHistory,
  selectViewHistory,
  setActiveModal,
  setActivePanel,
  setActiveView,
  setModalHistory,
  setPanelHistory,
  setViewHistory,
} from '../store/routerSlice';

export const useRouter = () => {
  const dispatch = useDispatch();

  const panelHistory = useSelector(selectPanelHistory);
  const modalHistory = useSelector(selectModalHistory);
  const viewHistory = useSelector(selectViewHistory);

  const openPanel = (panelId: PanelIds) => {
    const newPanelHistory = [...panelHistory];
    newPanelHistory.push(panelId);

    dispatch(setPanelHistory(newPanelHistory));
    dispatch(setActivePanel(panelId));
  };

  const openModal = (modalId: ModalIds) => {
    const newModalHistory = [...modalHistory];
    newModalHistory.push(modalId);

    dispatch(setModalHistory(newModalHistory));
    dispatch(setActiveModal(modalId));
  };

  const openView = (viewId: ViewIds) => {
    const newViewHistory = [...viewHistory];
    newViewHistory.push(viewId);

    dispatch(setViewHistory(newViewHistory));
    dispatch(setActiveView(viewId));
  };

  const closePanel = () => {
    const newPanelHistory = [...panelHistory];
    newPanelHistory.pop();

    dispatch(setPanelHistory(newPanelHistory));
    dispatch(setActivePanel(newPanelHistory[newPanelHistory.length - 1]));
  };

  const closeModal = () => {
    const newModalHistory = [...modalHistory];
    newModalHistory.pop();

    dispatch(setModalHistory(newModalHistory));
    dispatch(
      setActiveModal(newModalHistory[newModalHistory.length - 1] || null)
    );
  };

  const closeAllModals = () => {
    dispatch(setModalHistory([]));
    dispatch(setActiveModal(null));
  };

  const closeView = () => {
    const newViewHistory = [...viewHistory];
    newViewHistory.pop();
  };

  const closeFromBrowserHistory = () => {
    if (modalHistory.length > 0) {
      closeModal();
      return;
    }

    if (viewHistory.length > 1) {
      closeView();
      return;
    }

    closePanel();
  };

  return {
    openPanel,
    openModal,
    openView,
    closePanel,
    closeModal,
    closeAllModals,
    closeView,
    closeFromBrowserHistory,
  };
};
