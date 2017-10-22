'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Default = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: ', ';\n  margin: ', ';\n  @media (max-width: 576px) {\n    margin: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n  }\n'], ['\n  position: relative;\n  overflow: hidden;\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: ', ';\n  margin: ', ';\n  @media (max-width: 576px) {\n    margin: ', ';\n    border-radius: ', ';\n    box-shadow: ', ';\n  }\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Default = exports.Default = _styledComponents2.default.div(_templateObject, function (props) {
  return props.noPadding ? '0' : '20px';
}, function (props) {
  return props.noMargin ? '0' : '20px';
}, function (props) {
  return props.noMargin ? '0' : '10px';
}, function (props) {
  return props.full ? '0' : '2px';
}, function (props) {
  return props.full ? 'none' : '0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);';
});