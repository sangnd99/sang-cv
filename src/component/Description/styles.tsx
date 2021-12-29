import styled from "styled-components";
import tw from "twin.macro";
import _SVG from "designs/SVG";

export const DescriptionContainer = styled.div`
  ${tw`tablet:grid grid-cols-1fr-auto`}
`;

export const InfoContainer = styled.div`
  ${tw``}
`;

export const OthersContainer = styled.div`
  ${tw`flex tablet:justify-end w-25 mt-1 tablet:mt-0`}
`;

export const Title = styled.a`
  ${tw`inline-block text-24 tablet:text-30 font-bold text-secondary-light mb-1 hover:text-orange duration-150`}
`;

export const Time = styled.span`
  ${tw`text-secondary-light leading-none text-14 tablet:text-16`}
`;

export const Describe = styled.p`
  ${tw`text-18 tablet:text-20 font-semibold uppercase mb-2 leading-normal`}
`;

export const Item = styled.p`
  ${tw`flex items-start mb-1.5 leading-normal`}
`;

export const Text = styled.span`
  ${tw`ml-1 text-14 tablet:text-16`}
`;

export const SVG = styled(_SVG)`
  ${tw`mt-0.5`}
`;
