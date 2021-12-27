import styled from "styled-components";
import tw from "twin.macro";
import {
  LocationIcon as _LocationIcon,
  MailIcon as _MailIcon,
  PhoneIcon as _PhoneIcon,
  ReactjsIcon as _ReactjsIcon,
} from "designs/icons/common";

export const AboutContainer = styled.section`
  ${tw`w-full h-screen flex flex-col justify-center`}
`;

export const InfoWrapper = styled.div`
  ${tw`mb-4`}
`;

export const Name = styled.h1`
  ${tw`text-[calc(10px + 5.7vw)] laptop:text-60 font-black text-primary`}
`;

export const Highlight = styled.span`
  ${tw`text-secondary-light`}
`;

export const InfoContent = styled.p`
  ${tw`flex items-start phone:items-center text-18 phone:text-20 font-medium text-primary my-1.5 leading-normal`}
`;

export const IconWrapper = styled.div`
  ${tw`flex items-start flex-shrink-0 w-2.5 phone:w-3 h-2.5 phone:h-3 mr-1`}
`;

export const LocationIcon = styled(_LocationIcon)`
  ${tw``}
`;

export const MailIcon = styled(_MailIcon)`
  ${tw``}
`;

export const PhoneIcon = styled(_PhoneIcon)`
  ${tw``}
`;

export const Contact = styled.p`
  ${tw``}
`;

export const Link = styled.a`
  ${tw`text-secondary`}
`;

export const Resume = styled.p`
  ${tw`text-black text-16 phone:text-18 leading-normal`}
`;

export const Framework = styled.p`
  ${tw`mt-4 text-16 phone:text-18 leading-normal`}
`;

export const ReactjsIcon = styled(_ReactjsIcon)`
  ${tw`w-2 phone:w-2.5 h-2 phone:h-2.5 mr-0.5 text-secondary inline-block my-auto`}
`;

export const Strong = styled.span`
  ${tw`text-secondary font-bold`}
`;