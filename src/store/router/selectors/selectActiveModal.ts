import { Store } from 'store/Store';
import { ModalIds } from 'enums/router';

export const selectActiveModal = (state: Store): ModalIds|null => state.router.activeModal;
