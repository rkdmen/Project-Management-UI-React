webpackHotUpdate(0,{

/***/ 284:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.MainviewContainer = undefined;\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(2);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRedux = __webpack_require__(200);\n\nvar _redux = __webpack_require__(179);\n\nvar _reactBootstrap = __webpack_require__(285);\n\nvar _actions = __webpack_require__(536);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar MainviewContainer = exports.MainviewContainer = function (_Component) {\n  _inherits(MainviewContainer, _Component);\n\n  function MainviewContainer(props) {\n    _classCallCheck(this, MainviewContainer);\n\n    return _possibleConstructorReturn(this, (MainviewContainer.__proto__ || Object.getPrototypeOf(MainviewContainer)).call(this, props));\n  }\n\n  _createClass(MainviewContainer, [{\n    key: 'render',\n    value: function render() {\n      return _react2.default.createElement(\n        'div',\n        { className: 'table-container container' },\n        _react2.default.createElement(\n          'div',\n          { className: 'table-nav' },\n          _react2.default.createElement(\n            'span',\n            { className: 'project-title' },\n            'Projects Index'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'btn' },\n            'View All'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'btn' },\n            'Active'\n          ),\n          _react2.default.createElement(\n            'div',\n            { className: 'btn' },\n            'Inactive'\n          )\n        )\n      );\n    }\n  }]);\n\n  return MainviewContainer;\n}(_react.Component);\n\n// Mainview.propTypes = {\n// }\n\nfunction mapStateToProps(state) {\n  return {};\n}\n\nfunction mapDispatchToProps(dispatch) {\n  return (0, _redux.bindActionCreators)({}, dispatch);\n}\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(MainviewContainer);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/containers/MainviewContainers/MainviewContainer.js\n ** module id = 284\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/containers/MainviewContainers/MainviewContainer.js?");

/***/ }

})