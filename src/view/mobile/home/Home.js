import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import Radium from 'radium';
import Cover from './Cover';
import Hobby from './Hobby';
import Projects from './Projects';
import Contacts from './Contacts';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <div style={{ height: '100%', overflow: 'auto' }}>
        <View style={{ alignItems: 'center' }}>
          <Cover />

          {/* <Hobby /> */}
          <Projects />
          <div
            style={{
              alignSelf: 'center',
              padding: theme.spacing_2,
              marginTop: 100,
              marginBottom: 20,
            }}>
            <Contacts />
          </div>
        </View>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(mapStateToProps)(Radium(Home));
