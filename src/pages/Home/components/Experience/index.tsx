import { ExperienceContainer } from "./styles";
import SectionTitle from "common/styles/SectionTitle";

import Description from "component/Description";

const Experience = () => {
  return (
    <ExperienceContainer id="experience" className="wrapper">
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
  `Participate in develop an admin and manager website for <strong>"Manage ktv room"</strong> and <strong>"Booking information of customers"</strong> using Reactjs, Material Ui, Tailwindcss, SASS...etc (Private internal)`,
  `Participate in develop an admin website for <strong>"Booking, orgnizing tournaments and manage"</strong> sport team using Reactjs, Material Ui, Tailwindcss, SASS...etc (Private internal)`,
  `Participate in develop an website for <strong>"Recruiment"</strong> and <strong>"Finding job"</strong> using Nextjs, Headless UI, Tailwindcss, Styled Component, Formik and validate with yup...etc (Private internal)`,
  `Participate in develop an website for <strong>sell, rent, real estate posting...etc</strong> using Reactjs for admin website and Nextjs for user website`,
  `Mentor for internship.`,
];
