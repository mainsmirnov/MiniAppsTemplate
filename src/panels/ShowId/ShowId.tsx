import { ModalIds, PanelIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { Button, ButtonGroup, Div, Panel, PanelHeader } from '@vkontakte/vkui';

import { PanelProps } from '../PanelProps';

export const ShowId = ({ id }: PanelProps) => {
  const { openModal, openPanel, closePanel } = useRouter();

  return (
    <Panel id={id}>
      <PanelHeader>{id}</PanelHeader>
      <Div>
        <ButtonGroup mode="vertical" stretched>
          {id === PanelIds.Panel1 && (
            <Button
              onClick={() => openPanel(PanelIds.Panel2)}
              size="m"
              stretched
            >
              Open second panel
            </Button>
          )}
          {id === PanelIds.Panel2 && (
            <Button
              onClick={closePanel}
              size="m"
              stretched
            >
              Close panel
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
