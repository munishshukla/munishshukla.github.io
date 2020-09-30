import React, { FC } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

export const About: FC<{ title: string }> = ({ title }) => (
  <>
  <Button variant="contained" color="primary">
      About
    </Button>
    <h1>{title}</h1>
    <Link to="/home">HOme</Link>
    <img src="/assets/img/icon.png" />
  </>
)
