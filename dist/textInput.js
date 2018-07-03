'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    border: 1px solid rgba(0,0,0,0.1);\n    border-radius: 3px;\n    padding: 10px 8px;\n    width: ', ';\n    transition: all 0.3s;\n    background: inherit;\n    caret-color: ', '\n    &:focus {\n        border: 1px solid ', '\n    }\n    &::-webkit-input-placeholder {\n        text-transform: capitalize;\n        color: rgba(0,0,0,0.2);\n    }\n    &::after {\n        height: 20px;\n        width: 20px;\n        color: #F0F\n    }\n'], ['\n    border: 1px solid rgba(0,0,0,0.1);\n    border-radius: 3px;\n    padding: 10px 8px;\n    width: ', ';\n    transition: all 0.3s;\n    background: inherit;\n    caret-color: ', '\n    &:focus {\n        border: 1px solid ', '\n    }\n    &::-webkit-input-placeholder {\n        text-transform: capitalize;\n        color: rgba(0,0,0,0.2);\n    }\n    &::after {\n        height: 20px;\n        width: 20px;\n        color: #F0F\n    }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    color: ', '\n    text-transform: capitalize;\n    font-weight: 500;\n    margin-bottom: 3px;\n'], ['\n    color: ', '\n    text-transform: capitalize;\n    font-weight: 500;\n    margin-bottom: 3px;\n']);

exports.default = TextInput;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.input.attrs({
    type: 'text'
})(_templateObject, function (props) {
    return props.width || '100%';
}, function (props) {
    return props.theme.primaryBright;
}, function (props) {
    return props.theme.primary;
});
var Title = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme.primaryBright;
});

function TextInput(props) {
    return _react2.default.createElement(
        'div',
        null,
        props.title && _react2.default.createElement(
            Title,
            null,
            props.title
        ),
        _react2.default.createElement(Input, props)
    );
}