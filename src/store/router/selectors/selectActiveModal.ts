import { ModalIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectActiveModal = (state: Store): ModalIds|null => state.router.activeModal;
