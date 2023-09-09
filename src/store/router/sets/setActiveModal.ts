import { ModalIds } from 'enums/router';

import { Action } from 'store/Action';

export const ACTIVE_MODAL_SET = 'activeModal/set';

export const setActiveModal: Action<typeof ACTIVE_MODAL_SET, ModalIds|null> = (activeModal) => ({
  type: ACTIVE_MODAL_SET,
  data: activeModal,
});

