import ScriptTag from 'react-script-tag';
import React, {Component} from 'react';

export default class SubscribeBtn extends Component{
    render() {
        return (
            <ScriptTag
                script src="https://eomail5.com/form/171a4085-f6a8-11eb-96e5-06b4694bee2a.js"
                data-form="171a4085-f6a8-11eb-96e5-06b4694bee2a"
                className="p-2"
            />
        );
    }
}