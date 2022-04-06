import React from 'react';

import { PageFrame } from './PageFrame';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import { Button, ListGroup } from 'react-bootstrap';

export class MainPage extends React.Component {

render() {
    return(
    <>
        <PageFrame /> 
        {/* <img src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2018/08/homemade-strawberry-cupcakes-2.jpg.webp" class="img-fluid" alt="Background picture" height={100}></img>
        <h1>Welcome to my recipe website</h1>
        <figure class="text-center">
            <blockquote class="blockquote">
                <p>A well-known quote, contained in a blockquote element.</p>
            </blockquote>
            <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
            </figcaption>
        </figure>        */}
    </>
        )
    }
}   