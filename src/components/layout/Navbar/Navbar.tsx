import { PanelIds, ViewIds } from 'enums/router';
import { useRouter } from 'hooks/useRouter';

import { Tabbar, TabbarItem } from '@vkontakte/vkui';

const tabs = [
  {
    id: ViewIds.Main,
    text: 'Main',
  },
  {
    id: ViewIds.Shop,
    text: 'Shop',
  },
];

interface TabbarProps {
  activeView: ViewIds;
  activePanel: PanelIds;

}

export const Navbar = ({ activeView, activePanel }: TabbarProps) => {
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

  return (
    <Tabbar shadow={false}>
      {tabs.map(({ id, text }) => (
        <TabbarItem
          key={id}
          text={text}
          selected={activeView === id}
          onClick={() => onTabClick(id)}
        >
          {/* <Icon /> */}
        </TabbarItem>
      ))}
    </Tabbar>
  );
};
