'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Full = exports.Default = undefined;

var _templateObject = _taggedTemplateLiteral(['\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: 20px;\n  margin: 20px;\n  @media (max-width: 576px) {\n    margin: 10px;\n  }\n'], ['\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: 20px;\n  margin: 20px;\n  @media (max-width: 576px) {\n    margin: 10px;\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: 20px;\n  margin: 20px;\n  @media (max-width: 576px) {\n    margin: 0;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n\t}\n'], ['\n  background-color: #fff;\n  border-radius: 2px;\n  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 -1px 1px -1px rgba(0,0,0,.12);\n  padding: 20px;\n  margin: 20px;\n  @media (max-width: 576px) {\n    margin: 0;\n    border-radius: 0;\n    -webkit-box-shadow: none;\n    -moz-box-shadow: none;\n    box-shadow: none;\n\t}\n']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Default = _styledComponents2.default.div(_templateObject);

var Full = _styledComponents2.default.div(_templateObject2);

exports.Default = Default;
exports.Full = Full;