import Radio from './radio';

// import styled from 'styled-components';
import React from 'react';

export default class RadioGroup extends React.Component {
    render () {
        return (
            <div>
                {this.props.data.map((option, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Radio
                                selected={this.props.selected === option}
                                value={option}
                                label={option}
                                onClick={(e, value) => {
                                    this.props.onChange(e, value);
                                }}
                            />
                        </React.Fragment>
                    );
                })}
            </div>
        );
    }
}

RadioGroup.deafultProps = {
    data: [],
    selected: null,
    onChange: () => {
        console.log('You must provide a onChange props. It will be called with (event, value)');
    }
};