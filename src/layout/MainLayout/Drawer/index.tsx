import { useCallback } from "react";
import {
  DrawerContainer,
  InfoWrapper,
  AvatarWrapper,
  Image,
  Name,
  Social,
  Link,
  Menu,
  IconWrapper,
  Overlay,
} from "./styles";

import { GithubIcon, LinkedinIcon, FacebookIcon } from "designs/icons/social";
import {
  AboutIcon,
  SkillsIcon,
  EducationIcon,
  InterestsIcon,
  ExperienceIcon,
} from "designs/icons/drawer";

import SVG from "designs/SVG";
import Avatar from "assets/images/avatar.jpg";

import { useStore } from "hooks";
import { IGlobalStates } from "store/reducer";
import { actions } from "store";

const Drawer = () => {
  const handleClick = useCallback((name: string) => {
    const element: HTMLElement | null = document.querySelector(
      `#content #${name}`,
    );
    const wrapper = document.querySelector("#wrapper");
    if (element && wrapper) {
      wrapper.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  }, []);

  const [state, dispatch] = useStore();
  const { isCollapseDrawer, isExtendDrawer } = (state as IGlobalStates) || {};

  const handleCollapseDrawer = () => {
    dispatch(actions.isCollapseDrawer(!isCollapseDrawer));
  };

  const handleExtendDrawer = () => {
    dispatch(actions.isExtendDrawer(!isExtendDrawer));
  };

  return (
    <>
      <Overlay isExtendDrawer={isExtendDrawer} onClick={handleExtendDrawer} />
      <DrawerContainer
        isCollapseDrawer={isCollapseDrawer}
        isExtendDrawer={isExtendDrawer}
      >
        <IconWrapper onClick={handleCollapseDrawer}>
          <SVG name="common/hamburger" width={25} height={25} />
        </IconWrapper>
        <InfoWrapper isCollapseDrawer={isCollapseDrawer}>
          <AvatarWrapper>
            <Image alt="Avatar" src={Avatar} width={100} height={100} />
          </AvatarWrapper>
          <Name>Nguyễn Đình Sang</Name>
          <Social>
            <Link target="_blank" href="https://github.com/sangnd99">
              <GithubIcon width={18} height={18} />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/sang-nguy%E1%BB%85n-%C4%91%C3%ACnh-56929220a/"
            >
              <LinkedinIcon width={18} height={18} />
            </Link>
            <Link target="_blank" href="https://www.facebook.com/sang.demons/">
              <FacebookIcon width={18} height={18} />
            </Link>
          </Social>
        </InfoWrapper>
        <Menu.List id="navbar">
          {listMenu.map((item, index) => {
            const { name, Icon } = item;
            return (
              <Menu.Item
                id={name}
                key={`drawer-item-${index}`}
                className="group scroll-to"
                onClick={() => handleClick(name)}
              >
                <Menu.Link href={`#${name}`}>
                  <Icon className="menu-icon" width={25} height={25} />
                  <Menu.Text
                    className="menu-text"
                    isCollapseDrawer={isCollapseDrawer}
                  >
                    {name}
                  </Menu.Text>
                </Menu.Link>
              </Menu.Item>
            );
          })}
        </Menu.List>
      </DrawerContainer>
    </>
  );
};

export default Drawer;

const listMenu = [
  { name: "about", Icon: AboutIcon },
  { name: "experience", Icon: ExperienceIcon },
  { name: "education", Icon: EducationIcon },
  { name: "skills", Icon: SkillsIcon },
  // { name: "interests", Icon: InterestsIcon },
];
