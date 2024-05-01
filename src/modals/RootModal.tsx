import { useSelector } from 'react-redux';

import { ModalIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { selectActiveModal } from 'store/routerSlice';

import { ModalRoot } from '@vkontakte/vkui';

import { TestModal } from './TestModal/TestModal';

export const RootModal = () => {
  const { closeModal } = useRouter();
  const activeModal = useSelector(selectActiveModal);

  return (
    <ModalRoot activeModal={activeModal}>
      <TestModal id={ModalIds.TestModal} onClose={closeModal} />
    </ModalRoot>
  );
};
