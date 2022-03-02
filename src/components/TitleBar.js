import titleStyle from './TitleBar.module.css';
import { useState } from 'react';

function TitleBar(props) {

    return (
        <div className={titleStyle.container} style={{ 'backgroundColor': props.titleColor }}>
            <h1 className={titleStyle.title}>Color Guessing Game</h1>
            <p className={titleStyle.statement}>Guess the color: </p>
            <p className={titleStyle.rgbColor}>{props.color}</p>
        </div>
    );
}

export default TitleBar;