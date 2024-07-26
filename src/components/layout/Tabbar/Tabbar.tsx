import { PanelIds, ViewIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { Tabbar as VKUITabbar, TabbarItem } from '@vkontakte/vkui';

import { tabs } from './tabs';

interface TabbarProps {
  activeView: ViewIds;
  activePanel: PanelIds;
}

export const Tabbar = ({ activeView, activePanel }: TabbarProps) => {
  const { openView, closePanel } = useRouter();

  const onTabClick = (id: ViewIds) => {
    const isSameView = activeView === id;
    if (isSameView && activeView.toString() !== activePanel.toString()) {
      closePanel();
      return;
    }

    if (isSameView && activeView === id) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      return;
    }

    openView(id);
  };

  if (activePanel === PanelIds.Panel2) {
    return null;
  }

  return (
    <VKUITabbar shadow={false}>
      {tabs.map(({ id, text, icon }) => (
        <TabbarItem
          key={id}
          text={text}
          selected={activeView === id}
          onClick={() => onTabClick(id)}
        >
          {icon}
        </TabbarItem>
      ))}
    </VKUITabbar>
  );
};
