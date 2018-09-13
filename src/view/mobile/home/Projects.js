import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ListView } from 'view/global/components';
import Radium from 'radium';
import ProjectItem from './ProjectItem';
import projects from 'view/global/utils/projects';
import Zoom from 'react-reveal/Zoom';

class Projects extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { gstyles, theme, styles } = this.props;
    return (
      <ListView
        data={projects}
        renderHeaderComponent={() => <div style={{ height: theme.spacing_1 * 2 }} />}
        renderSeparatorComponent={() => <div style={{ height: theme.spacing_1 * 2 }} />}
        renderItem={project => {
          return <ProjectItem {...project} />;
        }}
      />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    theme: state.settings.theme,
    gstyles: state.settings.gstyles,
  };
}

export default connect(mapStateToProps)(Radium(Projects));
