'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    width: 100%;\n    height: ', ',\n    &:hover {\n        background-color: ', '\n    }\n'], ['\n    width: 100%;\n    height: ', ',\n    &:hover {\n        background-color: ', '\n    }\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Wrapper = _styledComponents2.default.div(_templateObject, function (props) {
    return props.height || 60;
}, function (props) {
    return props.theme.backgroundDark;
});

var SelectItem = function (_React$Component) {
    _inherits(SelectItem, _React$Component);

    function SelectItem() {
        _classCallCheck(this, SelectItem);

        return _possibleConstructorReturn(this, (SelectItem.__proto__ || Object.getPrototypeOf(SelectItem)).apply(this, arguments));
    }

    _createClass(SelectItem, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                Wrapper,
                { className: this.props.className, value: this.props.value, onClick: function onClick(e) {
                        _this2.props.onClick(e, _this2.props.value);
                    }
                },
                this.props.value
            );
        }
    }]);

    return SelectItem;
}(_react2.default.Component);

exports.default = SelectItem;


SelectItem.defaultProps = {
    value: null,
    onSelect: function onSelect() {
        console.log('You must provide a onSelect props to the SelectGroup');
    }
};