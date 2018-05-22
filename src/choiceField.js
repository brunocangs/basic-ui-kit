import React from 'react';
import styled from 'styled-components';
import {Checked} from './icons';

const Container = styled.div`
    display: inline-block;
    cursor: pointer;
    height: 15px;
    width: 15px;
    border: 1px solid ${(props) => (props.theme.primaryBright)}
    border-radius: 3px;
    background: #eee;
    margin-right: 5px;
`;

const Checkmark = styled(Checked) `
    transform: scale(${props => props.checked ? 1.3 : 0});
    transition: all 0.2s
    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);
`;

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export default class ChoiceField extends React.Component {
    render () {
        return (
            <Wrapper onClick={this.props.onClick}>
                <Container>
                    <Checkmark checked={this.props.checked} />
                </Container>
                {this.props.label}
            </Wrapper>
        );
    }
}

ChoiceField.defaultProps = {
    checked: false,
    onClick: () => {
        console.log('If the check didn\'t appear then you didn\'t provide checked and onClick props');
    },
    label: false
};