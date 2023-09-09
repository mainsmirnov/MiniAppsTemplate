import { ModalIds } from 'enums/router';

import { Store } from 'store/Store';

export const selectModalHistory = (state: Store): ModalIds[] => state.router.modalHistory;
