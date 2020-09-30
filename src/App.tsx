import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const App: FC<{ title: string }> = ({ title }) => (
  <>
  <Button variant="contained" color="primary">
      Hello World
    </Button>
    <h1>{title}</h1>
    <Link to="/about">About</Link>
    <img src="/assets/img/icon.png" />
  </>
)
