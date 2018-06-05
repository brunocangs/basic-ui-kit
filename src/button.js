import styled from 'styled-components';

export default styled.button`
    background-color: ${(props) => (props.flat ? 'white' : props.theme.primary)};
    color: ${(props) => (props.flat ? props.theme.primary : 'white')};
    border: ${(props) => (props.flat) ? `1px solid ${props.theme.primary}` : 0};
    height: 40px;
    border-radius: ${(props) => {
        if (props.fullWidth) {
            return 0;
        } else {
            return '5px';
        }
    }};
    width: ${(props) => {
        if (props.fullWidth) {
            return '100%';
        }
        else {
            return props.width || '100%';
        }
    }};
    text-transform: uppercase;
    letter-spacing: 1.1;
    font-size: 20px;
    &:hover {
        border-color: ${(props) => (props.flat ? props.theme.primaryDark : 0)}
        color: ${(props) => (props.flat ? props.theme.primaryDark : 'white')}
        background-color: ${(props) => (!props.flat ? props.theme.primaryDark : 'white')}
    };
    &:active {
        box-shadow: inset 0 0 3px rgba(0,0,0,0.4)
    }
    transition: background-color 0.3s;
`;