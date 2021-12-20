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
