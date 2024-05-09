import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface GarageUiProps {}

const StyledGarageUi = styled.div`
  color: pink;
`;

export function GarageUi(props: GarageUiProps) {
  return (
    <StyledGarageUi>
      <h1>Welcome to GarageUi!</h1>
    </StyledGarageUi>
  );
}

export default GarageUi;
