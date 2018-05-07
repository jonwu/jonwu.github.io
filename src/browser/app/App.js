import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Radium from 'radium';
import { View } from './components';
import { generateStylesSelector } from './utils/selectors';

function generateStyles(theme) {
  return {}
}
class Root extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View>
        hi
      </View>
    );
  }
}

Root.propTypes = {
  gstyles: PropTypes.object,
  theme: PropTypes.object,
};

const stylesSelector = generateStylesSelector(generateStyles);
function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
    styles: stylesSelector(state.settings.theme),
  };
}

export default connect(
  mapStateToProps,
)(Radium(Root));
