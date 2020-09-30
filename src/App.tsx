import React, { FC } from 'react';
import Button from '@material-ui/core/Button';

export const App: FC<{ title: string }> = ({ title }) => (
  <>
  <Button variant="contained" color="primary">
      Hello World
    </Button>
    <h1>{title}</h1>
    <img src="/assets/img/icon.png" />
  </>
)
