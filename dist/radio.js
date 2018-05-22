'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    display: inline-block;\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    border: 1px solid ', '\n    border-radius: 10px;\n    background: #eee;\n    margin-right: 5px;\n'], ['\n    display: inline-block;\n    cursor: pointer;\n    height: 15px;\n    width: 15px;\n    border: 1px solid ', '\n    border-radius: 10px;\n    background: #eee;\n    margin-right: 5px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    transform: scale(', ');\n    height: 100%;\n    width: 100%;\n    background: ', '\n    border-radius: 10px;\n    transition: all 0.2s;\n    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);\n'], ['\n    transform: scale(', ');\n    height: 100%;\n    width: 100%;\n    background: ', '\n    border-radius: 10px;\n    transition: all 0.2s;\n    transition-timing-function: cubic-bezier(0.46, 0.39, 0, 1.04);\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    display: inline;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 5px;\n'], ['\n    display: inline;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    margin-bottom: 5px;\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Container = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.primaryBright;
});

var Checkmark = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.selected ? 0.7 : 0;
}, function (props) {
    return props.theme.primaryDark;
});

var Wrapper = _styledComponents2.default.div(_templateObject3);

var SelectField = function (_React$Component) {
    _inherits(SelectField, _React$Component);

    function SelectField() {
        _classCallCheck(this, SelectField);

        return _possibleConstructorReturn(this, (SelectField.__proto__ || Object.getPrototypeOf(SelectField)).apply(this, arguments));
    }

    _createClass(SelectField, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Wrapper,
                null,
                _react2.default.createElement(
                    Container,
                    { onClick: function onClick(e) {
                            e.target.value = _this2.props.value;
                            _this2.props.onClick(e, _this2.props.value);
                        }
                    },
                    _react2.default.createElement(Checkmark, { selected: this.props.selected })
                ),
                this.props.label
            );
        }
    }]);

    return SelectField;
}(_react2.default.Component);

exports.default = SelectField;


SelectField.defaultProps = {
    selected: false,
    onClick: function onClick() {
        console.log('Please provide a onClick prop. It will be called with (event, value)');
    },
    value: null
};