import { memo } from 'react';

import { Icon24DoneOutline } from '@vkontakte/icons';
import {
  Div,
  ModalPage,
  ModalPageHeader,
  PanelHeaderButton,
} from '@vkontakte/vkui';

import { ModalProps } from '../ModalProps';

export const TestModal = memo(({ id, onClose }: ModalProps) => (
  <ModalPage id={id} onClose={onClose}>
    <ModalPageHeader
      after={
        <PanelHeaderButton aria-label="Закрыть">
          <Icon24DoneOutline onClick={onClose} />
        </PanelHeaderButton>
      }
    >
      Test VKUI Modal
    </ModalPageHeader>
    <Div>Some content</Div>
  </ModalPage>
));
