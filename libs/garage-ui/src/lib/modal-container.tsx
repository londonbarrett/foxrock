import { FC, ReactNode, memo } from 'react';

export type ModalContainerProps = {
  children: ReactNode;
};

export const ModalContainer: FC<ModalContainerProps> = memo(({ children }) => (
  <div>{children}</div>
));
