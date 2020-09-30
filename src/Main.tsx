import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function Main(props: Props) {
  const { children } = props;
  return <>{children}</>;
}
