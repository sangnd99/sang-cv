import { ExperienceContainer } from "./styles";
import SectionTitle from "common/styles/SectionTitle";

import Description from "component/Description";

const Experience = () => {
  return (
    <ExperienceContainer id="experience" className="wrapper">
      <SectionTitle>EXPERIENCE</SectionTitle>
      <Description />
    </ExperienceContainer>
  );
};

export default Experience;
