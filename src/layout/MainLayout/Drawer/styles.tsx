import styled from "styled-components";
import tw from "twin.macro";

export const DrawerContainer = styled.div`
  ${tw`w-30 bg-primary text-white h-screen px-1`}
`;

export const AvatarWrapper = styled.div`
  ${tw`py-1.5`}
`;

export const Image = styled.img`
  ${tw`w-12 h-12 rounded-full border-8 border-solid border-gray-dark mx-auto`}
`;

export const Name = styled.p`
  ${tw`text-24 font-bold text-center`}
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
    ${tw`flex items-center gap-1 px-1.5 py-1.2 w-max text-gray hover:text-secondary-light duration-200 cursor-pointer`}
  `,
  Text: styled.p`
    ${tw`text-16 font-medium group-hover:text-white duration-200 capitalize`}
  `,
};
