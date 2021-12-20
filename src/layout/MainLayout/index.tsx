import { MainLayoutContainer, Content } from "./styles";

import Drawer from "./Drawer";

interface IMainLayoutProps {}

const MainLayout: React.FC<IMainLayoutProps> = props => {
  const { children } = props;
  return (
    <MainLayoutContainer>
      <Drawer />
      <Content id="section" className="container">
        {children}
      </Content>
    </MainLayoutContainer>
  );
};

export default MainLayout;
