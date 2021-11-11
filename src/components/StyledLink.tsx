import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export const StyledLink = (props: any) => {
  return <Link {...props} className='styledLink'></Link>;
};
