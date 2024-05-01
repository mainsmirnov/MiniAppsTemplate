import { useDispatch } from 'react-redux';

import { ModalIds, PanelIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { setSnackbarMessage } from 'store/uiSlice';

import { Button, ButtonGroup, Div, Panel, PanelHeader } from '@vkontakte/vkui';

import { PanelProps } from '../PanelProps';

export const TestPanel = ({ id }: PanelProps) => {
  const { openModal, openPanel, closePanel } = useRouter();
  const dispatch = useDispatch();

  return (
    <Panel id={id}>
      <PanelHeader>{id}</PanelHeader>
      <Div>
        <ButtonGroup mode="vertical" stretched>
          {id === PanelIds.Main && (
            <Button
              onClick={() => openPanel(PanelIds.Panel2)}
              size="m"
              stretched
            >
              Open second panel
            </Button>
          )}
          {id === PanelIds.Panel2 && (
            <Button onClick={closePanel} size="m" stretched>
              Close panel
            </Button>
          )}
          {id === PanelIds.Shop && (
            <Button onClick={()=>dispatch(setSnackbarMessage('Message'))} size="m" stretched>
              Show snackbar
            </Button>
          )}
          <Button
            onClick={() => openModal(ModalIds.TestModal)}
            size="m"
            stretched
          >
            Open Test Modal
          </Button>
        </ButtonGroup>
      </Div>
    </Panel>
  );
};
