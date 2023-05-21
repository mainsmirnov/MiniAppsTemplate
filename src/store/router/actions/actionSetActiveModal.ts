import { RouterStore } from '../routerStore';
import { setActiveModal } from '../sets/setActiveModal';

export const actionSetActiveModal = (
  state: RouterStore,
  activeModal: ReturnType<typeof setActiveModal>['data'],
): RouterStore => ({
  ...state,
  activeModal,
});

