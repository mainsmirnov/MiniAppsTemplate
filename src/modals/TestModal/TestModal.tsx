import { memo } from 'react';

import { useRouter } from 'hooks/useRouter';

import { Icon24DoneOutline } from '@vkontakte/icons';
import {
  Box,
  ModalPage,
  ModalPageHeader,
  ModalPageProps,
  PanelHeaderButton,
} from '@vkontakte/vkui';

export const TestModal = memo(({ id, onClose }: ModalPageProps) => {
  const { closeModal } = useRouter();

  return (
    <ModalPage id={id} onClose={onClose}>
      <ModalPageHeader
        after={
          <PanelHeaderButton aria-label="Закрыть">
            <Icon24DoneOutline onClick={closeModal} />
          </PanelHeaderButton>
        }
      >
        Test VKUI Modal
      </ModalPageHeader>
      <Box paddingInline="2xl" paddingBlock="xl">
        Some content
      </Box>
    </ModalPage>
  );
});
