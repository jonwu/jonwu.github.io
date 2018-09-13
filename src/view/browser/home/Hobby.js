import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import Radium from 'radium';

class Hobby extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View style={{height: 1024/3, backgroundColor: 'gray'}}>
        <div style={[gstyles.h1, { color: theme.text() }]}>Hobby</div>
      </View>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(
  mapStateToProps,
)(Radium(Hobby));
