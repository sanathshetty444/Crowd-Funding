'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContributeForm = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _campaign = require('../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _web = require('../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\udemy\\BlockChain\\Campaign\\components\\ContributeForm.js';
var ContributeForm = exports.ContributeForm = function (_Component) {
    (0, _inherits3.default)(ContributeForm, _Component);

    function ContributeForm() {
        var _ref;

        var _temp, _this, _ret;

        (0, _classCallCheck3.default)(this, ContributeForm);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = ContributeForm.__proto__ || (0, _getPrototypeOf2.default)(ContributeForm)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            value: '',
            errormsg: '',
            loading: false
        }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(ContributeForm, [{
        key: 'onSubmit',
        value: function () {
            var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(e) {
                var instance, acc;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                e.preventDefault();
                                this.setState({ loading: true, errormsg: '' });
                                _context.prev = 2;
                                instance = (0, _campaign2.default)(this.props.address);
                                _context.next = 6;
                                return _web2.default.eth.getAccounts();

                            case 6:
                                acc = _context.sent;

                                console.log("clicked");
                                _context.next = 10;
                                return instance.methods.contribute().send({
                                    from: acc[0],
                                    value: _web2.default.utils.toWei(this.state.value, 'ether')

                                });

                            case 10:
                                Router.pushRoute('/');
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                this.setState({ errormsg: _context.t0.message });

                            case 16:
                                this.setState({ loading: false });

                            case 17:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[2, 13]]);
            }));

            function onSubmit(_x) {
                return _ref2.apply(this, arguments);
            }

            return onSubmit;
        }()
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 34
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { error: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'ether', labelPosition: 'right', value: this.state.value, onChange: function onChange(e) {
                    return _this2.setState({ value: e.target.value });
                }, type: 'text', placeholder: 'AMOUNT', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPS!', content: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, icon: 'add circle', content: 'Contribute!', onClick: this.onSubmit.bind(this), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            })));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIndlYjMiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvcm1zZyIsImxvYWRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2MiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJSb3V0ZXIiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVSxBQUNqQjs7Ozs7OztJQUFBLEFBQWEsZ0VBQWI7NENBQUE7OzhCQUFBO1lBQUE7OzBCQUFBOzs0Q0FBQTs7NkZBQUE7bUNBQUE7QUFBQTs7Z09BQUEsQUFDSTttQkFBTSxBQUNJLEFBQ047c0JBRkUsQUFFTyxBQUNUO3FCQUpSLEFBQ1UsQUFHTTtBQUhOLEFBQ0YsbUVBRlI7QUFBQTs7O2FBQUE7MkJBQUE7a0hBQUEsQUFNbUIsR0FObkI7OEJBQUE7OEVBQUE7OEJBQUE7eURBQUE7aUNBT1E7a0NBQUEsQUFBRSxBQUNGO3FDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxNQUFLLFVBUnBDLEFBUVEsQUFBYyxBQUF1QjtnREFFM0I7QUFWbEIsMkNBVTZCLHdCQUFTLEtBQUEsQUFBSyxNQVYzQyxBQVU2QixBQUFvQjtnREFWakQ7dUNBVzZCLGNBQUEsQUFBSyxJQVhsQyxBQVc2QixBQUFTOztpQ0FBcEI7QUFYbEIsK0NBYVk7O3dDQUFBLEFBQVEsSUFicEIsQUFhWSxBQUFZO2dEQWJ4QjtnREFja0IsQUFBUyxRQUFULEFBQWlCLGFBQWpCLEFBQThCOzBDQUMzQixJQURnQyxBQUNoQyxBQUFJLEFBQ1Q7MkNBQU0sY0FBQSxBQUFLLE1BQUwsQUFBVyxNQUFNLEtBQUEsQUFBSyxNQUF0QixBQUE0QixPQWhCbEQsQUFja0IsQUFBbUMsQUFFL0IsQUFBa0M7O0FBRkgsQUFDckMsaUNBREU7O2lDQUtWO3VDQUFBLEFBQU8sVUFuQmYsQUFtQlEsQUFBaUI7Z0RBbkJ6QjtBQUFBOztpQ0FBQTtnREFBQTtnRUFxQlk7O3FDQUFBLEFBQUssU0FBUyxFQUFDLFVBQVMsWUFyQnBDLEFBcUJZLEFBQWMsQUFBZ0I7O2lDQUVsQztxQ0FBQSxBQUFLLFNBQVMsRUFBQyxTQXZCdkIsQUF1QlEsQUFBYyxBQUFTOztpQ0F2Qi9CO2lDQUFBO2dEQUFBOztBQUFBO3VDQUFBO0FBQUE7O2tDQUFBO3lDQUFBO0FBQUE7O21CQUFBO0FBQUE7QUFBQTthQUFBO2lDQTBCYTt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHVDQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxTQUFRLGVBQXJCLEFBQW1DLFNBQVEsT0FBTyxLQUFBLEFBQUssTUFBdkQsQUFBNkQsT0FBTyxVQUFVLHFCQUFBOzJCQUFHLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxFQUFBLEFBQUUsT0FBMUIsQUFBRyxBQUFjLEFBQWdCO0FBQS9HLG1CQUF5SCxNQUF6SCxBQUE4SCxRQUFPLGFBQXJJLEFBQWlKOzhCQUFqSjtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBSkosQUFJSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDLE1BQTZDLE1BQTdDLEFBQWtELGNBQWEsU0FBL0QsQUFBdUUsZUFBYyxTQUFTLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBNUcsQUFBOEYsQUFBbUI7OEJBQWpIO2dDQVBaLEFBQ0ksQUFDSSxBQUtJLEFBS2Y7QUFMZTs7QUFsQ3BCO0FBQUE7O1dBQUE7QUFBQSxBQUFvQyxBQTBDcEM7O2tCQUFBLEFBQWUiLCJmaWxlIjoiQ29udHJpYnV0ZUZvcm0uanMiLCJzb3VyY2VSb290IjoiRDovdWRlbXkvQmxvY2tDaGFpbi9DYW1wYWlnbiJ9