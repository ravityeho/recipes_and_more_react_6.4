import React from 'react';

import { PageFrame } from './PageFrame';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card'
import { Button, ListGroup } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { SearchRecipe } from './SearchRecipe';

export class MainPage extends React.Component {

render() {
    return(
        <>
        <PageFrame /> 

        <Carousel variant="dark">
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./slide_1.jpg')}
                alt="First slide"
                />
                <Carousel.Caption>
                <h5>TIP OF THE DAY:</h5>
                <p>"To get crispy chocolate chip cookies, you should freeze the dough slightly before baking"</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./slide_2.jpg')}
                alt="Second slide"
                />
                <Carousel.Caption>
                <h5>BEST MACARON RECIPE</h5>
                <p>Coming Soon...</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src={require('./slide_3.jpg')}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h5>BAKERY OF THR WEEK:</h5>
                <p>Lehamim Bakery [$$ - $$$]
                    <br></br>
                    Hashmonaim st. 103
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
        </>
        )
    }
}   