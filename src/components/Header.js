import React from 'react';
import Jamtrack from '../container/Jamtrack';

const Header = (props) => {
    return (
        <header className="header">
            <h1 className="heading-1">Guitar Training</h1>
            <Jamtrack title={props.title} />
        </header>
    )
}

export default Header;