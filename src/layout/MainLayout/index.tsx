import { MainLayoutContainer, Content } from "./styles";

interface IMainLayoutProps {}

const MainLayout: React.FC<IMainLayoutProps> = props => {
  const { children } = props;
  return (
    <MainLayoutContainer className="">
      drawer
      <Content id="section">{children}</Content>
    </MainLayoutContainer>
  );
};

export default MainLayout;
