import React from 'react';
import FilterLink from '../containers/FilterLink'

const Footer = () => (
  <p>
    <FilterLink filter='all' >All</FilterLink> &nbsp;
    <FilterLink filter='active' >Active</FilterLink> &nbsp;
    <FilterLink filter='completed' >Completed</FilterLink> &nbsp;
  </p>
)

export default Footer;