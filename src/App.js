import React from 'react';
import './App.css';
import {projectFirestore} from './firebase/Config';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';


class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    };
  }

  render(){
    return(
      <div className='app-container'>
        <SidebarComponent></SidebarComponent>
        <EditorComponent></EditorComponent>
      </div>
    )
  }

  componentDidMount = () => {
    projectFirestore
      .collection('notes')
      .onSnapshot(serverUpdate => {
        const notes = serverUpdate.docs.map(_doc => {
          const data = _doc.data();
          data['id'] = _doc.id;
          return data;
        });
        console.log(notes);
        this.setState({ notes: notes });
      });
  }
  

}

export default App;
