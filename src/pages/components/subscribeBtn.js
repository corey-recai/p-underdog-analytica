import ScriptTag from 'react-script-tag';
import React, {Component} from 'react';

export default class SubscribeBtn extends Component{
    render() {
        return (
            <ScriptTag async src="https://eomail5.com/form/fb7c90bf-f65d-11eb-96e5-06b4694bee2a.js" data-form="fb7c90bf-f65d-11eb-96e5-06b4694bee2a" />
        );
    }
}