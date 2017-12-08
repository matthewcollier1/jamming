import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList';

class Playlist extends React.Component {

	constructor(props){
    super(props);

     this.state = {
      playlistName: 'New Playlist',
      playlistTracks: []

    }; 

    this.handleNameChange = this.handleNameChange.bind(this);
    }

	handleNameChange(event){
		let newName = event.target.value;
		this.props.onNameChange(newName);
	}

	render(){
		return(
			<div className="Playlist">
  				<input defaultValue={'New Playlist'} onChange={this.handleNameChange} />
  				<TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
 			 	<a className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
			</div>
		);
	}
}

export default Playlist;
