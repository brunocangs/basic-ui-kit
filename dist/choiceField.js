'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    border: 1px solid ', '\n    border-radius: 3px;\n    background: #eee;\n    margin-right: 5px;\n'], ['\n    display: inline-block;\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    border: 1px solid ', '\n    border-radius: 3px;\n    background: #eee;\n    margin-right: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    transform: scale(', ');\n    transition: all 0.2s\n    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);\n'], ['\n    transform: scale(', ');\n    transition: all 0.2s\n    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n'], ['\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icons = require('./icons');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.primaryBright;
});

var Checkmark = (0, _styledComponents2.default)(_icons.Checked)(_templateObject2, function (props) {
    return props.checked ? 1.3 : 0;
});

var Wrapper = _styledComponents2.default.div(_templateObject3);

var ChoiceField = function (_React$Component) {
    _inherits(ChoiceField, _React$Component);

    function ChoiceField() {
        _classCallCheck(this, ChoiceField);

        return _possibleConstructorReturn(this, (ChoiceField.__proto__ || Object.getPrototypeOf(ChoiceField)).apply(this, arguments));
    }

    _createClass(ChoiceField, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                Wrapper,
                { onClick: this.props.onClick },
                _react2.default.createElement(
                    Container,
                    null,
                    _react2.default.createElement(Checkmark, { checked: this.props.checked })
                ),
                this.props.label
            );
        }
    }]);

    return ChoiceField;
}(_react2.default.Component);

exports.default = ChoiceField;


ChoiceField.defaultProps = {
    checked: false,
    onClick: function onClick() {
        console.log('If the check didn\'t appear then you didn\'t provide checked and onClick props');
    },
    label: false
};