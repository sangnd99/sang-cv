import { EducationContainer } from "./styles";
import SectionTitle from "common/styles/SectionTitle";
import Description from "component/Description";

const Education = () => {
  return (
    <EducationContainer id="education" className="wrapper vertical-center">
      <SectionTitle>EDUCATION</SectionTitle>
      <Description
        title="Ho Chi Minh city University of Education"
        link="https://hcmue.edu.vn/vi/"
        describe="Computer science"
        listContent={listContent}
        dateStart="September 2017"
        dateEnd="Present"
      />
    </EducationContainer>
  );
};

export default Education;

const listContent = ["4th year student"];
