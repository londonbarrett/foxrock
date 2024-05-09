import styled from '@emotion/styled';
import { FC, ReactNode, memo } from 'react';

const Container = styled.section`
  background: white;
  background-image: radial-gradient(#aaa 1px, transparent 0);
  background-size: 40px 40px;
  background-position: -19px -19px;
  display: flex;
  height: 100vh;
  position: relative;
  width: 100vw;
`;

export type DashboardProps = {
  children: ReactNode;
};

export const Dashboard: FC<DashboardProps> = memo(({ children }) => (
  <Container>{children}</Container>
));
