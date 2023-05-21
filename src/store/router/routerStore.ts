import { ModalIds, PanelIds, ViewIds } from 'enums/router';

export type RouterStore = {
  activePanel: PanelIds;
  panelHistory: PanelIds[];
  activeView: ViewIds;
  viewHistory: ViewIds[];
  activeModal: ModalIds | null;
  modalHistory: ModalIds[];
  routerParams: Record<string, string|number>;
};

export const routerStore: RouterStore = {
  activePanel: PanelIds.Panel1,
  panelHistory: [PanelIds.Panel1],
  activeView: ViewIds.Home,
  viewHistory: [ViewIds.Home],
  activeModal: null,
  modalHistory: [],
  routerParams: {},
};
