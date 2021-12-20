import {
  DrawerContainer,
  AvatarWrapper,
  Image,
  Name,
  Social,
  Link,
} from "./styles";

import { ReactComponent as GithubIcon } from "assets/svg/social/github.svg";
import { ReactComponent as LinkedinIcon } from "assets/svg/social/linkedin.svg";

import Avatar from "assets/images/avatar.jpg";

interface IDrawerProps {}

const Drawer: React.FC<IDrawerProps> = props => {
  const {} = props;
  return (
    <DrawerContainer>
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
      </Social>
    </DrawerContainer>
  );
};

export default Drawer;
