'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = layout;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _head = require('next\\dist\\lib\\head.js');

var _head2 = _interopRequireDefault(_head);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\udemy\\BlockChain\\Campaign\\components\\layout.js';
function layout(props) {
    return _react2.default.createElement(_semanticUiReact.Container, { style: { padding: '10px' }, __source: {
            fileName: _jsxFileName,
            lineNumber: 7
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 8
        }
    }, _react2.default.createElement('link', {
        rel: 'stylesheet',
        href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.12/semantic.min.css',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 9
        }
    })), _react2.default.createElement(_Header2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), props.children);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXGxheW91dC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbnRhaW5lciIsIkhlYWQiLCJIZWFkZXIiLCJsYXlvdXQiLCJwcm9wcyIsInBhZGRpbmciLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLEFBQU87Ozs7QUFDUCxBQUFTOztBQUNULEFBQU87Ozs7QUFDUCxBQUFPLEFBQVksQUFDbkI7Ozs7Ozs7QUFBZSxTQUFBLEFBQVMsT0FBVCxBQUFnQixPQUFPLEFBQ2xDOzJCQUNJLEFBQUMsNENBQVUsT0FBTyxFQUFDLFNBQW5CLEFBQWtCLEFBQVM7c0JBQTNCO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0o7QUFESTtBQUFBO2FBQ0osQUFDTSxBQUNKO2NBRkYsQUFFTzs7c0JBRlA7d0JBRkEsQUFDSSxBQUNKLEFBS0k7QUFMSjtBQUNFLHlCQUlFLEFBQUM7O3NCQUFEO3dCQVBKLEFBT0ksQUFFQztBQUZEO0FBQUEsY0FSUixBQUNJLEFBU1csQUFJbEIiLCJmaWxlIjoibGF5b3V0LmpzIiwic291cmNlUm9vdCI6IkQ6L3VkZW15L0Jsb2NrQ2hhaW4vQ2FtcGFpZ24ifQ==