import React from 'react';
import Styles from './Ball.module.scss';

function Ball(props) {
    const show = props.message.length ? Styles.show : "";

    return (
        <div className={[Styles.ball, show].join(" ")}>
            <div className={[Styles.fortune, show].join(" ")}>
                {props.message}
            </div>
        </div>
    )
}

export default Ball;