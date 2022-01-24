import {
  AboutContainer,
  InfoWrapper,
  Name,
  Highlight,
  InfoContent,
  IconWrapper,
  LocationIcon,
  MailIcon,
  PhoneIcon,
  Link,
  Resume,
  Framework,
  ReactjsIcon,
  Strong,
} from "./styles";

const About = () => {
  return (
    <AboutContainer id="about" className="wrapper vertical-center">
      <InfoWrapper>
        <Name>
          NGUYỄN ĐÌNH <Highlight>SANG</Highlight>
        </Name>
        <InfoContent>
          <IconWrapper>
            <LocationIcon height={25} width={25} />
          </IconWrapper>
          311 Le Hong Phong Street, Ward 2, District 10, Ho Chi Minh city
        </InfoContent>
        <InfoContent>
          <IconWrapper>
            <MailIcon height={25} width={25} />
          </IconWrapper>
          <Link href="mailto:sangnd12.99@gmail.com">sangnd12.99@gmail.com</Link>
        </InfoContent>
        <InfoContent>
          <IconWrapper>
            <PhoneIcon height={25} width={25} />
          </IconWrapper>
          <Link href="tel:0987541132">0987541132</Link>
        </InfoContent>
      </InfoWrapper>
      <Resume>
        Hello everyone! Welcome to my CV online.
        <br /> I am a fresher Front-End Developer with nearly one year of
        experience.
      </Resume>
      <Framework>
        <ReactjsIcon width={25} height={25} />
        <Strong>Front-End:&nbsp;</Strong>I am experienced in&nbsp;
        <Strong>Reactjs</Strong>&nbsp;using&nbsp;
        <Strong>Redux</Strong>,&nbsp;<Strong>Graphql Apollo</Strong>&nbsp;and
        been working with&nbsp;
        <Strong>Nextjs</Strong>&nbsp;for a while.
      </Framework>
    </AboutContainer>
  );
};

export default About;
