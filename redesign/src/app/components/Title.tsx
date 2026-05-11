import styled from "styled-components";
import { BannerProps } from "./BannerProps";

const StyledTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  color: white;
`;

const Title = ({ title }: Pick<BannerProps, "title">) => (
  <StyledTitle>{title}</StyledTitle>
);

export default Title;
