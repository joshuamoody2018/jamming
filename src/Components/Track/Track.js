import React from 'react';
import './Track.css';

class Track extends React.Component{
    render(){
        return(
            <div class="Track">
                <div class="Track-information">
                    <h3>{/*Track name will go here*/}</h3>
                    <p>{/*Track Artist*/} {/*Track album*/}</p>
                </div>
                <button class="Track-action">{/*plus or minus*/}</button>
            </div>
        );
    }
}

export default Track;