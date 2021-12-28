import React, { useState } from 'react';
import styled from 'styled-components';

function SquareGenerator() {

    function randomTopNumber() {
        return (Math.floor(Math.random() * (window.innerHeight - 0) + 0));
    }

    function randomSideNumber() {
        return (Math.floor(Math.random() * (window.innerWidth - 0) + 0));
    }

    const [squareVerticalPosition, setNewTopPosition] = useState(randomTopNumber());

    const [squareHorizontalPosition, setNewSidePosition] = useState(randomSideNumber());

    return (
        <Square 
            verticalPosition={squareVerticalPosition} 
            horizontalPosition={squareHorizontalPosition} 
            onClick={() => {
                setNewTopPosition(randomTopNumber);
                setNewSidePosition(randomSideNumber);
            }}/>
    )
}

export default SquareGenerator

const Square = styled.div`
    height: 100px;
    width: 100px;
    background-color: red;
    position: absolute;
    top: ${(props) => props.verticalPosition}px;
    left: ${(props) => props.horizontalPosition}px;
`
