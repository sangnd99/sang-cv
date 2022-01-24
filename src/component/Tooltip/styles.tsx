import styled from "styled-components";
import tw from "twin.macro";

export const TooltipContainer = styled.div`
  ${tw`relative cursor-pointer`}
`;

export const Content = styled.p`
  ${tw`group-hover:visible group-hover:opacity-100 opacity-0 invisible absolute top-[calc(100% + 10px)] right-1/2 bg-primary text-14 text-white font-medium p-0.5 rounded-md duration-200 z-50`}
  transform: translateX(50%)
`;
