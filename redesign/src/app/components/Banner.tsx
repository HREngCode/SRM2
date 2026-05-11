// import styled from "styled-components";
// import Title from "./Title";
// import Tags from "./Tags";
// import Description from "./Description";

// interface BannerProps {
//   image: string;
//   children: React.ReactNode;
// }

// const myAnimation = {
//   opacity: [0, 1],
// };

// const StyledContainer = styled.div<BannerProps>`
//   height: 400px;
//   width: 100%;
//   display: flex;
//   background-image: linear-gradient(90deg, rgba(0, 0, 0, 1) 60%, transparent),
//     url(${(props) => props.image});
//   background-size: contain;
//   background-repeat: no-repeat;
//   background-position: right;

//   & > div {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: flex-start;
//     padding-left: 10px;
//   }
// `;

// const Banner = (props: BannerProps) => {
//   return (
//     <StyledContainer image={props.image}>
//       <div>
//         <Title title="" />
//         <Tags tags={[]} />
//         <Description description="" />
//       </div>
//     </StyledContainer>
//   );
// };

// export default Banner;
