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

var _routes = require('../routes');

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
                                _routes.Router.pushRoute('/campaigns/' + this.props.address);
                                _context.next = 16;
                                break;

                            case 13:
                                _context.prev = 13;
                                _context.t0 = _context['catch'](2);

                                this.setState({ errormsg: _context.t0.message });

                            case 16:
                                this.setState({ loading: false, value: '' });

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
                    lineNumber: 36
                }
            }, _react2.default.createElement(_semanticUiReact.Form, { error: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 37
                }
            }, _react2.default.createElement(_semanticUiReact.Form.Field, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 38
                }
            }, _react2.default.createElement(_semanticUiReact.Input, { label: 'ether', labelPosition: 'right', value: this.state.value, onChange: function onChange(e) {
                    return _this2.setState({ value: e.target.value });
                }, type: 'text', placeholder: 'AMOUNT', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 39
                }
            })), _react2.default.createElement(_semanticUiReact.Message, { error: true, header: 'OOPS!', content: this.state.errormsg, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }), _react2.default.createElement(_semanticUiReact.Button, { loading: this.state.loading, primary: true, icon: 'add circle', content: 'Contribute!', onClick: this.onSubmit.bind(this), floated: 'right', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            })));
        }
    }]);

    return ContributeForm;
}(_react.Component);

exports.default = ContributeForm;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXENvbnRyaWJ1dGVGb3JtLmpzIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ29tcG9uZW50IiwiQnV0dG9uIiwiRm9ybSIsIklucHV0IiwiTWVzc2FnZSIsImZhY3RvcnkiLCJDYW1wYWlnbiIsIndlYjMiLCJSb3V0ZXIiLCJDb250cmlidXRlRm9ybSIsInN0YXRlIiwidmFsdWUiLCJlcnJvcm1zZyIsImxvYWRpbmciLCJlIiwicHJldmVudERlZmF1bHQiLCJzZXRTdGF0ZSIsImluc3RhbmNlIiwicHJvcHMiLCJhZGRyZXNzIiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJhY2MiLCJjb25zb2xlIiwibG9nIiwibWV0aG9kcyIsImNvbnRyaWJ1dGUiLCJzZW5kIiwiZnJvbSIsInV0aWxzIiwidG9XZWkiLCJwdXNoUm91dGUiLCJtZXNzYWdlIiwidGFyZ2V0Iiwib25TdWJtaXQiLCJiaW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQVEsQUFBTSxBQUFPOztBQUM5QixBQUFPLEFBQWE7Ozs7QUFDcEIsQUFBTyxBQUFjOzs7O0FBQ3JCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQWEsQUFFckI7Ozs7O0lBQUEsQUFBYSxnRUFBYjs0Q0FBQTs7OEJBQUE7WUFBQTs7MEJBQUE7OzRDQUFBOzs2RkFBQTttQ0FBQTtBQUFBOztnT0FBQSxBQUNJO21CQUFNLEFBQ0ksQUFDTjtzQkFGRSxBQUVPLEFBQ1Q7cUJBSlIsQUFDVSxBQUdNO0FBSE4sQUFDRixtRUFGUjtBQUFBOzs7YUFBQTsyQkFBQTtrSEFBQSxBQU1tQixHQU5uQjs4QkFBQTs4RUFBQTs4QkFBQTt5REFBQTtpQ0FPUTtrQ0FBQSxBQUFFLEFBQ0Y7cUNBQUEsQUFBSyxTQUFTLEVBQUMsU0FBRCxBQUFTLE1BQUssVUFScEMsQUFRUSxBQUFjLEFBQXVCO2dEQUUzQjtBQVZsQiwyQ0FVNkIsd0JBQVMsS0FBQSxBQUFLLE1BVjNDLEFBVTZCLEFBQW9CO2dEQVZqRDt1Q0FXNkIsY0FBQSxBQUFLLElBWGxDLEFBVzZCLEFBQVM7O2lDQUFwQjtBQVhsQiwrQ0FhWTs7d0NBQUEsQUFBUSxJQWJwQixBQWFZLEFBQVk7Z0RBYnhCO2dEQWNrQixBQUFTLFFBQVQsQUFBaUIsYUFBakIsQUFBOEI7MENBQzNCLElBRGdDLEFBQ2hDLEFBQUksQUFDVDsyQ0FBTSxjQUFBLEFBQUssTUFBTCxBQUFXLE1BQU0sS0FBQSxBQUFLLE1BQXRCLEFBQTRCLE9BaEJsRCxBQWNrQixBQUFtQyxBQUUvQixBQUFrQzs7QUFGSCxBQUNyQyxpQ0FERTs7aUNBS1Y7K0NBQUEsQUFBTywwQkFBd0IsS0FBQSxBQUFLLE1BbkI1QyxBQW1CUSxBQUEwQztnREFuQmxEO0FBQUE7O2lDQUFBO2dEQUFBO2dFQXFCWTs7cUNBQUEsQUFBSyxTQUFTLEVBQUMsVUFBUyxZQXJCcEMsQUFxQlksQUFBYyxBQUFnQjs7aUNBRWxDO3FDQUFBLEFBQUssU0FBUyxFQUFDLFNBQUQsQUFBUyxPQUFNLE9BdkJyQyxBQXVCUSxBQUFjLEFBQXFCOztpQ0F2QjNDO2lDQUFBO2dEQUFBOztBQUFBO3VDQUFBO0FBQUE7O2tDQUFBO3lDQUFBO0FBQUE7O21CQUFBO0FBQUE7QUFBQTthQUFBO2lDQTBCYTt5QkFDTDs7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFDSTtBQURKO0FBQUEsYUFBQSxrQkFDSSxBQUFDLHVDQUFLLE9BQU8sS0FBQSxBQUFLLE1BQWxCLEFBQXdCOzhCQUF4QjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHdDQUFNLE9BQVAsQUFBYSxTQUFRLGVBQXJCLEFBQW1DLFNBQVEsT0FBTyxLQUFBLEFBQUssTUFBdkQsQUFBNkQsT0FBTyxVQUFVLHFCQUFBOzJCQUFHLE9BQUEsQUFBSyxTQUFTLEVBQUMsT0FBTSxFQUFBLEFBQUUsT0FBMUIsQUFBRyxBQUFjLEFBQWdCO0FBQS9HLG1CQUF5SCxNQUF6SCxBQUE4SCxRQUFPLGFBQXJJLEFBQWlKOzhCQUFqSjtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLEFBQUMsMENBQVEsT0FBVCxNQUFlLFFBQWYsQUFBc0IsU0FBUSxTQUFTLEtBQUEsQUFBSyxNQUE1QyxBQUFrRDs4QkFBbEQ7Z0NBSkosQUFJSSxBQUNBO0FBREE7Z0NBQ0EsQUFBQyx5Q0FBTyxTQUFTLEtBQUEsQUFBSyxNQUF0QixBQUE0QixTQUFTLFNBQXJDLE1BQTZDLE1BQTdDLEFBQWtELGNBQWEsU0FBL0QsQUFBdUUsZUFBYyxTQUFTLEtBQUEsQUFBSyxTQUFMLEFBQWMsS0FBNUcsQUFBOEYsQUFBbUIsT0FBTyxTQUF4SCxBQUFnSTs4QkFBaEk7Z0NBUFosQUFDSSxBQUNJLEFBS0ksQUFLZjtBQUxlOztBQWxDcEI7QUFBQTs7V0FBQTtBQUFBLEFBQW9DLEFBMENwQzs7a0JBQUEsQUFBZSIsImZpbGUiOiJDb250cmlidXRlRm9ybS5qcyIsInNvdXJjZVJvb3QiOiJEOi91ZGVteS9CbG9ja0NoYWluL0NhbXBhaWduIn0=