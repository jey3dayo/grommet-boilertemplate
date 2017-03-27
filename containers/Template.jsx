import React from 'react';
import Helmet from 'react-helmet';

const Template = props => (
  <div>
    <Helmet defaultTitle="grommet boilertemplate" />
    {props.children}
  </div>
);

Template.propTypes = {
  children: React.PropTypes.shape.isRequired,
};

export default Template;
