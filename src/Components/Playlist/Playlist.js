import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {
  constructor(props) {
    super(props);
  }

  this.handleNameChange = this.handleNameChange.bind(this);

  handleNameChange(event){
		let newName = event.target.value;
		this.props.onNameChange(newName);
	}

  render() {
    return(
    <div className="Playlist">
      <input defaultValue={'New Playlist'} onChange={this.handleNameChange}/>
        <TrackList onRemove={this.props.onRemove} />
        <a className="Playlist-save">SAVE TO SPOTIFY onClick={this.props.onSave}</a>
    </div>
    )
  }
}

export default Playlist;
