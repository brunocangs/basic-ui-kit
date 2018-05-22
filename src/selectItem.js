import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
    width: 100%;
    height: ${props => props.height || 60},
    &:hover {
        background-color: ${props => props.theme.backgroundDark}
    }
`;
export default class SelectItem extends React.Component {
    render () {
        return (
            <Wrapper className={this.props.className} value={this.props.value} onClick={(e) => {
                console.log('clicked from item');
                this.props.onClick(e, this.props.value);
            }}
            >
                {this.props.value}
            </Wrapper>
        );
    }
}

SelectItem.defaultProps = {
    value: null,
    onSelect: () => {
        console.log('You must provide a onSelect props to the SelectGroup');
    }
};