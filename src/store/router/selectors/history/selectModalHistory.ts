import { Store } from 'store/Store';
import { ModalIds } from 'enums/router';

export const selectModalHistory = (state: Store): ModalIds[] => state.router.modalHistory;
