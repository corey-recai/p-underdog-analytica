import React from 'react';
import './Card.css'

let classes = 'card '
export const Card = (props) => (
    <div className={classes + props.className}>{props.children}</div>
)