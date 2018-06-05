import React from 'react';
import styled from 'styled-components';
import {MaskedInput} from '../utils';

const Input = styled(MaskedInput) `
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 3px;
    padding: 10px 8px;
    width: ${(props) => (props.width || '100%')};
    transition: all 0.3s;
    background: inherit;
    caret-color: ${(props) => (props.theme.primaryBright)}
    &:focus {
        border: 1px solid ${(props) => (props.theme.primary)}
    }
    &::-webkit-input-placeholder {
        text-transform: capitalize;
        color: rgba(0,0,0,0.2);
    }
    &::after {
        height: 20px;
        width: 20px;
        color: #F0F
    }
`;
const Title = styled.div`
    color: ${(props) => (props.theme.primaryBright)}
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 3px;
`;

export default function TextInput (props) {
    return (
        <div>
            {props.title && <Title>{props.title}</Title>}
            <Input {...props} />
        </div>
    );
}