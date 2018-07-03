'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _templateObject = _taggedTemplateLiteral(['\n    background-color: ', ';\n    color: ', ';\n    border: ', ';\n    height: 40px;\n    border-radius: ', ';\n    width: ', ';\n    text-transform: uppercase;\n    letter-spacing: 1.1;\n    font-size: 20px;\n    &:hover {\n        border-color: ', '\n        color: ', '\n        background-color: ', '\n    };\n    &:active {\n        box-shadow: inset 0 0 3px rgba(0,0,0,0.4)\n    }\n    transition: background-color 0.3s;\n'], ['\n    background-color: ', ';\n    color: ', ';\n    border: ', ';\n    height: 40px;\n    border-radius: ', ';\n    width: ', ';\n    text-transform: uppercase;\n    letter-spacing: 1.1;\n    font-size: 20px;\n    &:hover {\n        border-color: ', '\n        color: ', '\n        background-color: ', '\n    };\n    &:active {\n        box-shadow: inset 0 0 3px rgba(0,0,0,0.4)\n    }\n    transition: background-color 0.3s;\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

exports.default = _styledComponents2.default.button(_templateObject, function (props) {
    return props.flat ? 'white' : props.theme.primary;
}, function (props) {
    return props.flat ? props.theme.primary : 'white';
}, function (props) {
    return props.flat ? '1px solid ' + props.theme.primary : 0;
}, function (props) {
    if (props.fullWidth) {
        return 0;
    } else {
        return '5px';
    }
}, function (props) {
    if (props.fullWidth) {
        return '100%';
    } else {
        return props.width || '100%';
    }
}, function (props) {
    return props.flat ? props.theme.primaryDark : 0;
}, function (props) {
    return props.flat ? props.theme.primaryDark : 'white';
}, function (props) {
    return !props.flat ? props.theme.primaryDark : 'white';
});