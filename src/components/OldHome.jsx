import React from 'react'
import {Redirect, Route} from "react-router-dom";
function OldHome(props) {
    const id = props.match.params.id
    if (!isNaN(Number.parseInt(id))) {
        return (
            <Redirect to={`/${id}${props.location.search}`}/>
        );
    } else {
        return (<Route children={() => <h1>id parameter is not a number</h1>} />)
    }
}

export default OldHome;
