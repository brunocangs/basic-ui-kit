# My package

## Using

This package has no default exports, and has 7 named exports

* Button
* TextInput
* ChoiceField
* Radio
* RadioGroup
* SelectGroup
* SelectItem
* MaskedTextInput

You can also import, from the /utils folder

* mask, masking function, called with string interpolation. Example: \`(${2}) ${4}-${4}\`
* MaskedInput, a basic, unstyled input that provides automatic masking logic, similar to #MaskedTextInput

## API

All components are controlled by props, and accept

### Button

* onClick, function called with (event)
* width, optional to control width of button

### TextInput

* onChange, function called with (event)
* value, controlled input value
* title (optional)
* width, optional to control width of input

### ChoiceField

* checked, controlled input value
* onClick, function called with (event)
* label, text to be displayed near the checkbox

### RadioGroup

* data, an array of info to be displayed
* selected, controlled input value, only one can be selected
* onChange, function called when one of the options is selected, called with (event, value)

### SelectGroup

* data, array of options to be rendered by the component, automatically ads empty first value
* renderItem, item to be rendered inside the options, will be passed custom className props
* title, optional title to be displayed on top of the input
* width, optional to control width of input

### MaskedTextInput

* onChange, function called with (event)
* value, controlled input value
* title (optional)
* width, optional to control width of input
* mask, a mask to be aplied, use characters and {number} to specify size of the substring
* clearRegex, regex to be used to remove the mask


# Demo

For a live demo head [here](https://brunocangs.github.io/basic-ui-kit/)