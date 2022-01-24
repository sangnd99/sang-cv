import { ExperienceContainer } from "./styles";
import SectionTitle from "common/styles/SectionTitle";

import Description from "component/Description";

const Experience = () => {
  return (
    <ExperienceContainer id="experience" className="wrapper vertical-center">
      <SectionTitle>EXPERIENCE</SectionTitle>
      <Description
        title="USUM Software Co., Ltd"
        link="https://usumsoftware.com"
        describe="front-end web developer (intern & official staff)"
        listContent={listContent}
        dateStart="May 2021"
        dateEnd="January 2022"
      />
    </ExperienceContainer>
  );
};

export default Experience;

const listContent = [
  `Participate in develop an admin and manager website for <strong>"Manage ktv room"</strong> and <strong>"Booking information of customers"</strong> (Private internal)`,
  `Participate in develop an admin website for <strong>"Booking, orgnizing tournaments and manage"</strong> sport team (Private internal)`,
  `Participate in develop a website for <strong>"Recruiment"</strong> and <strong>"Finding job"</strong> (Private internal)`,
  `Participate in develop a website for <strong>sell, rent, real estate posting...etc</strong>`,
  `Participate in develop an e-commerce website for the <strong>Sell</strong> and <strong>Design</strong> of products (Private internal)`,
  `Mentor for internship.`,
];
