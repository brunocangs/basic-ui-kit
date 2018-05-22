import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: inline-block;
    cursor: pointer;
    height: 15px;
    width: 15px;
    border: 1px solid ${(props) => (props.theme.primaryBright)}
    border-radius: 10px;
    background: #eee;
    margin-right: 5px;
`;

const Checkmark = styled.div`
    transform: scale(${props => props.selected ? 0.7 : 0});
    height: 100%;
    width: 100%;
    background: ${(props) => (props.theme.primaryDark)}
    border-radius: 10px;
    transition: all 0.2s;
    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);
`;

const Wrapper = styled.div`
    display: inline;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 5px;
`;

export default class SelectField extends React.Component {
    render () {
        return (
            <Wrapper>
                <Container onClick={(e) => {
                    e.target.value = this.props.value;
                    this.props.onClick(e, this.props.value);
                }}
                >
                    <Checkmark selected={this.props.selected} />
                </Container>
                {this.props.label}
            </Wrapper>
        );
    }
}

SelectField.defaultProps = {
    selected: false,
    onClick: () => {
        console.log('Please provide a onClick prop. It will be called with (event, value)');
    },
    value: null
};