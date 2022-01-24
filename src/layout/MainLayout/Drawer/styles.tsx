import styled from "styled-components";
import tw from "twin.macro";

export const DrawerContainer = styled.div<{
  isCollapseDrawer: boolean;
  isExtendDrawer: boolean;
}>`
  ${tw`fixed laptop:relative w-30 bg-primary text-white h-screen px-1 duration-300 z-50`}
  ${({ isCollapseDrawer }) => (isCollapseDrawer ? tw`w-7.5` : tw`w-30`)}
  ${({ isExtendDrawer }) =>
    isExtendDrawer ? tw`left-0` : tw`-left-full laptop:left-0`}
`;

export const InfoWrapper = styled.div<{ isCollapseDrawer: boolean }>`
  ${tw`duration-300`}
  ${({ isCollapseDrawer }) =>
    isCollapseDrawer ? tw`invisible opacity-0` : tw`visible opacity-100`}
`;

export const AvatarWrapper = styled.div`
  ${tw`py-1.5`}
`;

export const Image = styled.img`
  ${tw`w-12 h-12 rounded-full border-8 border-solid border-gray-dark mx-auto`}
`;

export const Name = styled.p`
  ${tw`text-24 font-semibold text-center whitespace-nowrap`}
`;

export const Social = styled.div`
  ${tw`flex items-center justify-center gap-1 mt-1.5`}
`;

export const Link = styled.a`
  ${tw`flex items-center justify-center w-3.6 h-3.6 rounded-full bg-gray-dark duration-300 hover:bg-secondary-light`}
`;

export const Menu = {
  List: styled.ul`
    ${tw`pt-3 flex flex-col gap-1`}
    .active .menu-icon {
      ${tw`text-secondary-light`}
    }
    .active .menu-text {
      ${tw`text-white`}
    }
  `,
  Item: styled.li`
    ${tw`overflow-hidden w-max`}
  `,
  Link: styled.a`
    ${tw`flex items-center gap-1 px-1.5 py-1.2 w-max text-gray hover:text-secondary-light duration-200 cursor-pointer`}
  `,
  Text: styled.p<{ isCollapseDrawer: boolean }>`
    ${tw`text-14 phone:text-16 font-medium group-hover:text-white duration-200 capitalize`}
    ${({ isCollapseDrawer }) =>
      isCollapseDrawer ? tw`invisible opacity-0` : tw`visible opacity-100`}
  `,
};

export const IconWrapper = styled.div`
  ${tw`absolute w-4 h-4 left-[calc(100% + 10px)] top-1 z-50 hidden laptop:flex items-center justify-center flex-shrink-0 hover:bg-gray-light hover:bg-opacity-40 duration-300 rounded-full cursor-pointer`}
`;

export const Overlay = styled.div<{ isExtendDrawer: boolean }>`
  ${tw`absolute z-40 inset-0 bg-primary bg-opacity-30 duration-300`}
  ${({ isExtendDrawer }) =>
    isExtendDrawer ? tw`visible opacity-100` : tw`invisible opacity-0`}
`;
