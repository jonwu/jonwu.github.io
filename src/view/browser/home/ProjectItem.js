import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'view/global/components';
import Radium from 'radium';


const Tag = props => {
  const { gstyles, theme, styles, label } = props;
  return (
    <View
      style={[
        {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.text(0.1),
          paddingTop: theme.spacing_5,
          paddingBottom: theme.spacing_5,
          paddingLeft: theme.spacing_4,
          paddingRight: theme.spacing_4,
          borderRadius: theme.borderRadius,
        },
        gstyles.right_3,
      ]}>
      <div style={[gstyles.footnote_bold, { color: theme.text(0.5) }]}>{label}</div>
    </View>
  );
};
class ProjectItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles, title, caption, description, src, flipped, tags } = this.props;
    return (
      <View row style={{ height: 1024 / 2.5 }}>
        <img src={src} style={{ height: '100%' }} />
        <div style={{ flex: 1 }} />
        <View style={{ width: 250, padding: theme.spacing_2, paddingTop: 0 }}>
          <div style={[gstyles.h3_bold, { color: theme.text() }]}>{title}</div>
          <div style={[gstyles.p1_bold, { color: theme.text(0.25) }, gstyles.bottom_2]}>
            {caption}
          </div>
          {description && (
            <div style={[gstyles.p1, { color: theme.text() }, gstyles.bottom_1]}>{description}</div>
          )}

          <View row style={{ flexStyle: 'flex-wrap' }}>
            {tags.map(t => {
              return <Tag {...this.props} label={t} />;
            })}
          </View>
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

export default connect(mapStateToProps)(ProjectItem);
