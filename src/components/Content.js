import React, { Component } from 'react';
// import NoteEditor from './NoteEditor';
// import NoteViewer from './NoteViewer';
// import Instructions from './Instructions';
import ListDetails from './ListDetails'

/*
  Advice: If you cannot figure out how to get this component to work,
          move the div and renderContent up into NoteContainer and
          try to get it to work in the parent first.
          Then complete the rest of your app before attempting to
          refactor to get this Content component to work.
*/
class Content extends Component {
  renderContent = () => {
    if (this.props.currentNote && false) {
      return <NoteEditor currentNote={this.currentNote()}/>;
    } else if (this.props.currentListId) {
      return <NoteViewer currentNote={this.props.currentNote}/>;
    } else {
      return <Instructions />;
    }
  }

  render() {
    console.log("In Content. Props are ",this.props)
    return (
      <div>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
