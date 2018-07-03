'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n    position: relative;\n    background-color: ', '\n    border-radius: 5px;\n    border: 1px solid rgba(0,0,0,0.1);\n    padding: 5px;\n    height: 20px;\n'], ['\n    position: relative;\n    background-color: ', '\n    border-radius: 5px;\n    border: 1px solid rgba(0,0,0,0.1);\n    padding: 5px;\n    height: 20px;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n    position: absolute;\n    background: ', '\n    top: 33;\n    width: calc(100% - 2px);\n    border: ', ';\n    box-shadow: ', ' ;\n    border-radius: 5px;\n    z-index: 99;\n    overflow-y: auto;\n    max-height: ', ';\n    transition: max-height 0.3s;\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        border-radius: 4px;\n        background: transparent; \n        box-shadow: 0px 0px 2px rgba(0,0,0,0.2) inset;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: rgba(0,0,0,0.2); \n        border-radius: 4px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n        background: rgba(0,0,0,0.3); \n    }\n'], ['\n    position: absolute;\n    background: ', '\n    top: 33;\n    width: calc(100% - 2px);\n    border: ', ';\n    box-shadow: ', ' ;\n    border-radius: 5px;\n    z-index: 99;\n    overflow-y: auto;\n    max-height: ', ';\n    transition: max-height 0.3s;\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        border-radius: 4px;\n        background: transparent; \n        box-shadow: 0px 0px 2px rgba(0,0,0,0.2) inset;\n    }\n    &::-webkit-scrollbar-thumb {\n        background: rgba(0,0,0,0.2); \n        border-radius: 4px;\n    }\n    &::-webkit-scrollbar-thumb:hover {\n        background: rgba(0,0,0,0.3); \n    }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    position: relative;\n    width: ', ';\n    background: transparent;\n'], ['\n    position: relative;\n    width: ', ';\n    background: transparent;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n    width: 0; \n    height: 0; \n    right: 10px;\n    top: 12px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 8px solid #aeaeae;\n    transform: ', ';\n    position: absolute;\n    transition: all 0.3s;\n    z-index: 50;\n'], ['\n    width: 0; \n    height: 0; \n    right: 10px;\n    top: 12px;\n    border-left: 5px solid transparent;\n    border-right: 5px solid transparent;\n    border-bottom: 8px solid #aeaeae;\n    transform: ', ';\n    position: absolute;\n    transition: all 0.3s;\n    z-index: 50;\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n    color: ', '\n    text-transform: capitalize;\n    font-weight: 500;\n    margin-bottom: 3px;\n    margin-top: 8px;\n'], ['\n    color: ', '\n    text-transform: capitalize;\n    font-weight: 500;\n    margin-bottom: 3px;\n    margin-top: 8px;\n']),
    _templateObject6 = _taggedTemplateLiteral(['\n            position: relative;\n            padding: 5px;\n            min-height: 20px;\n            width: calc(100% - 10px);\n            z-index: -1;\n            &:hover {\n                background: ', '\n            }\n        '], ['\n            position: relative;\n            padding: 5px;\n            min-height: 20px;\n            width: calc(100% - 10px);\n            z-index: -1;\n            &:hover {\n                background: ', '\n            }\n        ']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Input = _styledComponents2.default.div(_templateObject, function (props) {
    return props.theme.background;
});
var Dropdown = _styledComponents2.default.div(_templateObject2, function (props) {
    return props.theme.background;
}, function (props) {
    return props.open ? '1px solid #eee' : 0;
}, function (props) {
    return props.open ? '1px 1px 3px rgba(0,0,0,0.2)' : 0;
}, function (props) {
    return props.open ? '120px' : '0px';
});
var Wrapper = _styledComponents2.default.div(_templateObject3, function (props) {
    return props.width + 'px' || '100%';
});

var Arrow = _styledComponents2.default.div(_templateObject4, function (props) {
    return props.open ? 'rotate(180deg)' : '';
});

var Title = _styledComponents2.default.div(_templateObject5, function (props) {
    return props.theme.primaryBright;
});

var SelectGroup = function (_React$Component) {
    _inherits(SelectGroup, _React$Component);

    function SelectGroup(props) {
        _classCallCheck(this, SelectGroup);

        var _this = _possibleConstructorReturn(this, (SelectGroup.__proto__ || Object.getPrototypeOf(SelectGroup)).call(this, props));

        _this.state = {
            open: false
        };
        return _this;
    }

    _createClass(SelectGroup, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            var StyledItem = (0, _styledComponents2.default)(this.props.renderItem)(_templateObject6, function (props) {
                return props.theme.backgroundDark;
            });
            return _react2.default.createElement(
                _react2.default.Fragment,
                null,
                this.props.title && _react2.default.createElement(
                    Title,
                    null,
                    this.props.title
                ),
                _react2.default.createElement(
                    Wrapper,
                    {
                        width: this.props.width
                    },
                    _react2.default.createElement(Arrow, {
                        open: this.state.open,
                        onClick: function onClick() {
                            return _this2.setState({ open: !_this2.state.open });
                        }
                    }),
                    _react2.default.createElement(
                        Input,
                        {
                            value: this.props.selected,
                            onClick: function onClick() {
                                return _this2.setState({ open: !_this2.state.open });
                            },
                            tabIndex: 0
                        },
                        this.props.value
                    ),
                    _react2.default.createElement(
                        Dropdown,
                        { width: this.props.width, open: this.state.open },
                        [''].concat(this.props.data).map(function (info, index) {
                            return _react2.default.createElement(StyledItem, {
                                key: index,
                                value: info,
                                onClick: function onClick(event) {
                                    _this2.props.onSelect(event, info);
                                    _this2.setState({ open: false });
                                }
                            });
                        })
                    )
                )
            );
        }
    }]);

    return SelectGroup;
}(_react2.default.Component);

exports.default = SelectGroup;


SelectGroup.defaultProps = {
    data: [],
    title: null,
    selected: null,
    onSelect: function onSelect() {}
};