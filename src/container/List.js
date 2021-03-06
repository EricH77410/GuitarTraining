import React from 'react'

export default class List extends React.Component {
    
    render(){
        const renderList = this.props.exercices.map((item) => {
            return (
                <li 
                    key={item.id} 
                    className="list__item"
                    onClick={()=>this.props.setActive(item.id)}>
                    {item.title}
                </li>
            )
        });

        return (
            <section className="list">
                <ul className="list__container">
                    {renderList}
                </ul>
            </section>
        )
    }
}


/* <li class="list__item list__active">Exo 1</li>
<li class="list__item">Exo 2</li>
<li class="list__item">Exo 3</li>
<li class="list__item">Exo 4</li>
<li class="list__item">Exo 5</li> */