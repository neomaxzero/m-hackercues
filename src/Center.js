import styled from "@emotion/styled";

const Center = styled("div")`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  justify-content: center;
  align-items: center;
  height: ${({ height }) => height};
`;

export default Center;
