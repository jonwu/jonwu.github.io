import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import Radium from 'radium';

const Contact = props => {
  const { gstyles, theme, styles, label, backgroundColor, href, download } = props;
  return (
    <a href={href} target="_blank">
      <View
        style={[
          {
            cursor: 'pointer',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: backgroundColor || theme.text(0.1),
            paddingTop: theme.spacing_5,
            paddingBottom: theme.spacing_5,
            paddingLeft: theme.spacing_4,
            paddingRight: theme.spacing_4,
            borderRadius: theme.borderRadius,
          },
          gstyles.right_3,
        ]}>
        <div style={[gstyles.footnote_bold, { color: theme.text() }]}>{label}</div>
      </View>
    </a>
  );
};

class Contacts extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View row>
        <Contact {...this.props} backgroundColor={theme.blue()} label={'Email'} href="mailto:jonwu92@gmail.com"/>
        <Contact {...this.props} backgroundColor={theme.green()} label={'Github'} href="https://github.com/jonwu" />
        <Contact {...this.props} backgroundColor={theme.orange()} label={'LinkedIn'} href="https://www.linkedin.com/in/captainjonathanwu/" />
        <Contact {...this.props} backgroundColor={theme.red()} label={'Resume'} href={require('view/global/assets/resume.pdf')} download/>
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

export default connect(mapStateToProps)(Radium(Contacts));
