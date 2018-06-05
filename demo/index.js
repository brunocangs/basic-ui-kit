import React, {Component, Fragment} from 'react';
import {Button, TextInput, ChoiceField, RadioGroup, SelectGroup, SelectItem, MaskedTextInput} from '../src';
import {ThemeProvider} from 'styled-components';
import {darken, lighten} from 'polished';
import {render} from 'react-dom'

let colors = {
    primary: '#2F3D56',
    secondary: '#C399F1',
    background: '#fefefe',
    textColor: '#4c4c4c'
};

let theme = {
    ...colors,
};
Object.keys(colors).forEach(color => {
    theme[color + 'Dark'] = darken(0.05, colors[color]);
    theme[color + 'Bright'] = lighten(0.1, colors[color]);
});

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            theme,
            checked: false,
            radioSelected: null,
            color: '#000',
            selectOption: null,
            maskedValue: ''
        };
        this.handleColorChange = this.handleColorChange.bind(this);
    }
    handleColorChange ({target: {id, value}}) {
        console.log(id, value);
        let colors = {

        };
        colors[id] = value;
        colors[id + 'Dark'] = darken(0.05, value);
        colors[id + 'Bright'] = lighten(0.1, value);
        console.log(colors);
        this.setState({theme: {...this.state.theme, ...colors}});
    }
    render () {
        let regex = /[()\-\s]/g;
        console.log(this.state);
        return (
            <ThemeProvider theme={this.state.theme}>
                <Fragment>
                    <style>
                        {`body {
                            background: ${this.state.theme.background};
                            height: 3000px;
                        }
                        *{
                            outline: none;
                            font-family: 'Roboto', sans-serif;    
                            color: ${this.state.theme.textColor}
                        }
                        `}
                    </style>
                    <input type="color" value={this.state.theme.primary} id='primary' onChange={this.handleColorChange} />
                    <br />
                    <Button flat width={400}>
                        this is a flat button
                                </Button>
                    <br />
                    <br />
                    <Button width={400}>
                        this is a regular button
                                </Button>
                    <br />
                    <br />
                    <Button fullWidth>
                        this is a full width button
                                </Button>
                    <br />
                    <br />
                    <TextInput placeholder="teste" title='nome' width={400} />
                    <br />
                    <br />
                    <ChoiceField checked={this.state.checked} onClick={() => this.setState({checked: !this.state.checked})} label="This is a checkmark" />
                    <br />
                    <br />
                    <RadioGroup data={['First', 'Second', 'Third']} onChange={(event, value) => this.setState({radioSelected: value})} selected={this.state.radioSelected} />
                    <SelectGroup
                        data={[1, 2, 3, 4, 5, 6, 7, 8]}
                        renderItem={SelectItem}
                        onSelect={(event, value) => {
                            this.setState({selectOption: value});
                        }}
                        value={this.state.selectOption}
                        width={200}
                        title="Test"
                    />
                    <br />
                    <br />
                    <MaskedTextInput
                        title={'Masked'}
                        width={400}
                        value={this.state.maskedValue}
                        mask='({2}) {5}-{4}'
                        clearRegex={regex}
                        onChange={(event, value) => {
                            console.log(value);
                            this.setState({maskedValue: value})
                        }}
                    />
                </Fragment>
            </ThemeProvider>
        );
    }
}

render(<App />, document.getElementById('root'));