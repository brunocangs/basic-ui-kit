import React from 'react';
import styled from 'styled-components';

const Input = styled.div`
    position: relative;
    background-color: ${props => props.theme.background}
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 5px;
    height: 20px;
`;
const Dropdown = styled.div`
    position: absolute;
    background: ${props => props.theme.background}
    top: 33;
    width: calc(100% - 2px);
    border: ${props => props.open ? '1px solid #eee' : 0};
    box-shadow: ${props => props.open ? '1px 1px 3px rgba(0,0,0,0.2)' : 0} ;
    border-radius: 5px;
    z-index: 99;
    overflow-y: auto;
    max-height: ${props => props.open ? '120px' : '0px'};
    transition: max-height 0.3s;
`;
const Wrapper = styled.div`
    position: relative;
    width: ${props => props.width || '100%'};
    background: transparent;
`;

const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 8px solid #aeaeae;
    transform: ${props => props.open ? 'rotate(180deg)' : ''};
    position: absolute;
    transition: all 0.3s;
    z-index: 50;
    right: 10;
    top: 12;
`;

const Title = styled.div`
    color: ${(props) => (props.theme.primaryBright)}
    text-transform: capitalize;
    font-weight: 500;
    margin-bottom: 3px;
    margin-top: 8px;
`;

export default class SelectGroup extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            open: false
        };
    }
    render () {
        let StyledItem = styled(this.props.renderItem) `
            position: relative;
            padding: 5px;
            min-height: 20px;
            width: calc(100% - 10px);
            z-index: -1;
            &:hover {
                background: ${props => props.theme.backgroundDark}
            }
        `;
        return (
            <React.Fragment>
                {this.props.title && <Title>{this.props.title}</Title>}
                <Wrapper
                    width={this.props.width}
                >
                    <Arrow
                        open={this.state.open}
                        onClick={() => this.setState({open: !this.state.open})}
                    />
                    <Input
                        value={this.props.selected}
                        onClick={() => this.setState({open: !this.state.open})}
                        tabIndex={0}
                    >
                        {this.props.value}
                    </Input>
                    <Dropdown width={this.props.width} open={this.state.open}>
                        {
                            [''].concat(this.props.data).map((info, index) => {
                                return (
                                    <StyledItem
                                        key={index}
                                        value={info}
                                        onClick={(event) => {
                                            console.log('selected');
                                            this.props.onSelect(event, info);
                                            this.setState({open: false});
                                        }}
                                    />
                                );
                            })
                        }
                    </Dropdown>
                </Wrapper>
            </React.Fragment>

        );
    }
}