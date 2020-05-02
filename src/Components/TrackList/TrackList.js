import React from 'react';
import './TrackList.css';
import Track from '../Track/Track';

class TrackList extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="TrackList">
                {this.props.tracks.map(track =>{
                    return <Track key={track.id} track={track} button={this.props.button} onAdd={this.props.onAdd} isRemoval={this.props.isRemoval} onRemove={this.props.onRemove} />;
                })}
            </div>
        );
    }
}

export default TrackList;