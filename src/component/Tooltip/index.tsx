import { TooltipContainer, Content } from "./styles";

interface ITooltipProps {
  text: string;
}

const Tooltip: React.FC<ITooltipProps> = ({ children, text }) => {
  return (
    <TooltipContainer className="group">
      {children}
      <Content id="tooltip-content">{text}</Content>
    </TooltipContainer>
  );
};

export default Tooltip;
