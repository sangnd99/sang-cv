import { DetailedHTMLProps, ImgHTMLAttributes } from "react";

interface ISVGProps
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  name: string;
}

const SVG: React.FC<ISVGProps> = props => {
  const { name, ...restProps } = props;
  return (
    <img {...(restProps as any)} src={require(`assets/svg/${name}.svg`)} />
  );
};

export default SVG;
