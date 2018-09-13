import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import Radium from 'radium';
import Contacts from './Contacts';

class Cover extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <View
        style={{
          width: '100%',
          backgroundColor: theme.text(),
          position: 'relative',
          height: 876,
          // alignItems: 'center',
          // justifyContent: 'center',
        }}>
        <img
          src={require(`view/global/assets/meFaded.jpg`)}
          style={{ height: '100%',position: 'absolute', alignSelf: 'flex-end' }}
        />

        <View
          style={{ zIndex: 1, flex: 1, width: 500, justifyContent: 'center', marginTop: -100, paddingLeft: 100 }}>
          <div style={[gstyles.h1, { color: theme.light(), marginBottom: 100 }]}>Hi!</div>
          <div style={[gstyles.h1, { color: theme.light() }, gstyles.bottom_1]}>
            I'm <span style={[gstyles.h1_bold, { color: theme.light() }]}>Jonathan Wu</span>. I build Apps For Businesses & For Fun
          </div>

          {/* <div style={[gstyles.h4, { lineHeight: 2, color: theme.light(0.75) }]}><span style={[{ fontSize: 30, color: theme.light() }]}>🙈</span> Managed apps with over 100,000 weekly actives</div> */}
          {/* <div style={[gstyles.h4, { lineHeight: 2, color: theme.light(0.75) }]}><span style={[{ fontSize: 30, color: theme.light() }]}>🙉</span> Previously won 8 Hackathon Competitions</div> */}
          {/* <div style={[gstyles.h4, { lineHeight: 2, color: theme.light(0.75) }]}><span style={[{ fontSize: 30, color: theme.light() }]}>🙊</span> Graduated University of California, Berkeley 2015</div> */}


          {/* <View
            style={{
              width: 1024 / 2,
              height: 1024 / 3,
              backgroundColor: theme.light(0.95),
              borderRadius: theme.borderRadius,
              padding: theme.spacing_2,
              // boxShadow: `4px 4px ${theme.red(0.5)}`,
              border: `1px solid ${theme.borderColor}`,
            }}>

          </View> */}
          <Contacts />
        </View>


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

export default connect(mapStateToProps)(Radium(Cover));
