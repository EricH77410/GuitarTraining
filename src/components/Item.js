import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <section className="main">
                <div className="exercices">
                    <div className="exo">
                        <h3 className="exo__title">{this.props.data.title}</h3>
                        <img src={'assets/img/exercices/'+this.props.data.img} alt={this.props.img} className="exo__img"/>
                        <div className="exo__audio">
                            <audio controls>
                                <source src={'assets/audio/exo/'+this.props.data.audio} type="audio/mpeg"/>
                                Your browser does not support the audio element.
                            </audio>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Item;