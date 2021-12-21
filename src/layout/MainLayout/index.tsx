import { MainLayoutContainer, Wrapper } from "./styles";

import Drawer from "./Drawer";
import { useCallback, useEffect } from "react";

interface IMainLayoutProps {}

const MainLayout: React.FC<IMainLayoutProps> = props => {
  const { children } = props;
  const handleActiveMenu = useCallback(() => {
    let position: number;
    const wrapper = document.querySelector("#wrapper");
    if (wrapper) {
      position = wrapper.scrollTop + 200;
    }
    const listElements = document.querySelectorAll("#navbar .scroll-to");
    if (listElements) {
      listElements.forEach(item => {
        const section: HTMLElement | null = document.querySelector(
          `#content #${item.id}`,
        );
        if (section) {
          if (
            position >= section.offsetTop &&
            position <= section.offsetTop + section.offsetHeight
          ) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        }
      });
    }
  }, []);

  useEffect(() => {
    handleActiveMenu();
  }, []);

  return (
    <MainLayoutContainer>
      <Drawer />
      <Wrapper id="wrapper" onScroll={handleActiveMenu}>
        {children}
      </Wrapper>
    </MainLayoutContainer>
  );
};

export default MainLayout;
