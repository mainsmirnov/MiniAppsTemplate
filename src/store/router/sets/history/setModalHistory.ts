import { Action } from 'store/Action';
import { ModalIds } from 'enums/router';

export const MODAL_HISTORY_SET = 'modalHistory/set';

export const setModalHistory: Action<typeof MODAL_HISTORY_SET, ModalIds[]> = (modalHistory) => ({
  type: MODAL_HISTORY_SET,
  data: modalHistory,
});

