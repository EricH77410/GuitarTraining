import React from 'react';

const Backing = (props) => {
    return(
        <div className="exo__backing">
            <audio controls>
                <source src={'assets/audio/exo/'+props.backing} type="audio/mpeg"/>
                Your browser does not support the audio element.
            </audio>
        </div>
    )
}