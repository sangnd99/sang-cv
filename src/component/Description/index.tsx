import { DescriptionContainer, Title, Describe } from "./styles";

interface IDescriptionProps {}

const Description: React.FC<IDescriptionProps> = props => {
  return (
    <DescriptionContainer>
      <Title>USUM Software Co., Ltd</Title>
      <Describe>front-end web developer</Describe>
    </DescriptionContainer>
  );
};

export default Description;
