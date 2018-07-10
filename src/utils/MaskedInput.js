import React from 'react';
import {mask} from '../utils';

export default function MaskedInput (props) {
    let {mask: pattern, value, onChange, clearRegex, ...otherProps} = props;
    let clearMask = (value) => {
        return value.replace(clearRegex, '');
    }
    let handleMask = (value) => {
        if (!pattern) return value;
        let fragmentCapture = /{(\d*)}/g;
        let partials = pattern.split(fragmentCapture);
        partials = partials.reduce((previous, current, index) => {
            if (index % 2) {
                previous[1].push(current)
            } else {
                previous[0].push(current)
            }
            return previous;
        }, [[], []]);
        partials[1].push(value);
        return mask(partials[0], ...partials[1]);

    }
    return (
        <input
            type='text' 
            {...otherProps}
            ref={(input) => {
                props.refCreator ? props.refCreator(input, props.id, props.tab) : React.createRef();
            }}
            onChange={(event) => {
                onChange(event, clearMask(event.target.value));
            }}
            value={handleMask(value)}
        />
    )
}
