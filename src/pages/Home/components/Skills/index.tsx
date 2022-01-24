import { SkillsContainer, Title, Wrapper } from "./styles";
import SectionTitle from "common/styles/SectionTitle";
import Tooltip from "component/Tooltip";

import * as icons from "designs/icons/skills";

const Skills = () => {
  return (
    <SkillsContainer id="skills" className="wrapper vertical-center">
      <SectionTitle>SKILLS</SectionTitle>
      <Title>PROGRAMMING LANGUAGES & TOOLS</Title>
      <Wrapper>
        <Tooltip text="HTML5">
          <icons.HtmlIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="CSS3">
          <icons.CssIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Sass">
          <icons.SassIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Tailwindcss">
          <icons.TailwindIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Javascript">
          <icons.JavascriptIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Typescript">
          <icons.TypescriptIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Reactjs">
          <icons.ReactjsIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Nextjs">
          <icons.NextjsIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Figma">
          <icons.FigmaIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Git">
          <icons.GitIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Graphql">
          <icons.GraphqlIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Slack">
          <icons.SlackIcon width={48} height={48} />
        </Tooltip>
      </Wrapper>
      <Title>LEARNING</Title>
      <Wrapper>
        <Tooltip text="Typescript">
          <icons.TypescriptIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Reactjs">
          <icons.ReactjsIcon width={48} height={48} />
        </Tooltip>
        <Tooltip text="Nextjs">
          <icons.NextjsIcon width={48} height={48} />
        </Tooltip>
      </Wrapper>
    </SkillsContainer>
  );
};

export default Skills;
