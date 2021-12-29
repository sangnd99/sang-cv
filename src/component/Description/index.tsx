import {
  DescriptionContainer,
  InfoContainer,
  OthersContainer,
  Title,
  Time,
  Describe,
  Item,
  Text,
  SVG,
} from "./styles";

import { randomId } from "common/functions";

interface IDescriptionProps {
  title: string;
  describe: string;
  listContent: string[];
  dateStart: string;
  dateEnd: string;
  link: string;
}

const Description: React.FC<IDescriptionProps> = props => {
  const { title, link, describe, listContent, dateStart, dateEnd } = props;
  return (
    <DescriptionContainer>
      <InfoContainer>
        <Title href={link} target="_blank">
          {title}
        </Title>
        <Describe>{describe}</Describe>
        {listContent.map((item, index) => (
          <Item key={`description ${randomId(index)}`}>
            <SVG name="common/bookmark" width={10} height={10} />
            <Text dangerouslySetInnerHTML={{ __html: item }} />
          </Item>
        ))}
      </InfoContainer>
      <OthersContainer>
        <Time>{`${dateStart} - ${dateEnd}`}</Time>
      </OthersContainer>
    </DescriptionContainer>
  );
};

export default Description;
