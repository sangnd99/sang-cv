import styled from "styled-components";
import tw from "twin.macro";
import _SVG from "designs/SVG";
import { HamburgerIcon as _HamburgerIcon } from "designs/icons/common";

export const MainLayoutContainer = styled.div`
  ${tw`relative grid grid-cols-auto-1fr`}
`;

export const Wrapper = styled.div`
  ${tw`overflow-y-auto max-h-screen`}
`;

export const SVG = styled(_SVG)`
  ${tw``}
`;

export const IconWrapper = styled.div`
  ${tw`flex laptop:hidden absolute z-50 right-1 items-center justify-center top-1 w-4 h-4 rounded-full bg-primary cursor-pointer`}
`;

export const HamburgerIcon = styled(_HamburgerIcon)`
  ${tw`text-white`}
`;
