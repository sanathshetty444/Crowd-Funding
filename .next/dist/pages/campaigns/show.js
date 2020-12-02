'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _layout = require('../../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _campaign = require('../../ethereum/campaign');

var _campaign2 = _interopRequireDefault(_campaign);

var _ContributeForm = require('../../components/ContributeForm');

var _ContributeForm2 = _interopRequireDefault(_ContributeForm);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\udemy\\BlockChain\\Campaign\\pages\\campaigns\\show.js?entry';


var CampaignShow = function (_Component) {
    (0, _inherits3.default)(CampaignShow, _Component);

    function CampaignShow() {
        (0, _classCallCheck3.default)(this, CampaignShow);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignShow.__proto__ || (0, _getPrototypeOf2.default)(CampaignShow)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignShow, [{
        key: 'renderCards',
        value: function renderCards() {
            var _props = this.props,
                minimumContro = _props.minimumContro,
                balance = _props.balance,
                requestsCount = _props.requestsCount,
                approversCount = _props.approversCount,
                manager = _props.manager;

            var items = [{
                header: manager,
                meta: "Address Of Manager",
                style: { overflowWrap: 'break-word' },
                description: 'Manager is the creator of this campaign'
            }, {
                header: minimumContro,
                meta: 'Minimum Contribution (wei)',
                description: 'You must contribute at least this much wei to become an approver'
            }, {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request tries to withdraw money from the contract. Requests must be approved by approvers'
            }, {
                header: approversCount,
                meta: 'Number of Approvers',
                description: 'Number of people who have already donated to this campaign'
            }, {
                header: _web2.default.utils.fromWei(balance, 'ether'),
                meta: 'Campaign Balance (ether)',
                description: 'The balance is how much money this campaign has left to spend.'
            }];
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 62
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 66
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 68
                }
            }, _react2.default.createElement(_semanticUiReact.Container, { style: { padding: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement(_ContributeForm2.default, { floated: 'right', address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            }))))));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
                var address, instance, summary;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                // For URL's address appended in it
                                address = props.query.address;

                                console.log(address);
                                instance = (0, _campaign2.default)(address);
                                _context.next = 5;
                                return instance.methods.getSummary().call();

                            case 5:
                                summary = _context.sent;
                                return _context.abrupt('return', {
                                    address: address,
                                    minimumContro: summary[0],
                                    balance: summary[1],
                                    requestsCount: summary[2],
                                    approversCount: summary[3],
                                    manager: summary[4]
                                });

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps(_x) {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignShow;
}(_react.Component);

exports.default = CampaignShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJDYXJkIiwiQ29udGFpbmVyIiwiR3JpZCIsIkxheW91dCIsIkNhbXBhaWduIiwiQ29udHJpYnV0ZUZvcm0iLCJ3ZWIzIiwiQ2FtcGFpZ25TaG93IiwicHJvcHMiLCJtaW5pbXVtQ29udHJvIiwiYmFsYW5jZSIsInJlcXVlc3RzQ291bnQiLCJhcHByb3ZlcnNDb3VudCIsIm1hbmFnZXIiLCJpdGVtcyIsImhlYWRlciIsIm1ldGEiLCJzdHlsZSIsIm92ZXJmbG93V3JhcCIsImRlc2NyaXB0aW9uIiwidXRpbHMiLCJmcm9tV2VpIiwicGFkZGluZyIsInJlbmRlckNhcmRzIiwiYWRkcmVzcyIsInF1ZXJ5IiwiY29uc29sZSIsImxvZyIsImluc3RhbmNlIiwibWV0aG9kcyIsImdldFN1bW1hcnkiLCJjYWxsIiwic3VtbWFyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBVzs7QUFDMUIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7Ozs7Ozs7O0ksQUFFSTs7Ozs7Ozs7Ozs7c0NBa0JKO3lCQUdQLEtBSE8sQUFHRjtnQkFIRSxBQUVMLHVCQUZLLEFBRUw7Z0JBRkssQUFFUyxpQkFGVCxBQUVTO2dCQUZULEFBRWlCLHVCQUZqQixBQUVpQjtnQkFGakIsQUFFK0Isd0JBRi9CLEFBRStCO2dCQUYvQixBQUU4QyxpQkFGOUMsQUFFOEMsQUFFdkQ7O2dCQUFNO3dCQUNGLEFBQ1csQUFDUDtzQkFGSixBQUVTLEFBQ0w7dUJBQU0sRUFBQyxjQUhYLEFBR1UsQUFBYyxBQUNwQjs2QkFMSSxBQUNSLEFBSWdCO0FBSmhCLEFBQ0ksYUFGSTt3QkFPUixBQUNZLEFBQ1I7c0JBRkosQUFFVSxBQUNOOzZCQVZJLEFBT1IsQUFJTTtBQUpOLEFBQ0k7d0JBS0YsQUFDVSxBQUNSO3NCQUZGLEFBRVEsQUFDTjs2QkFoQkksQUFhTixBQUlJO0FBSkosQUFDRTt3QkFLRixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQXRCSSxBQW1CTixBQUlJO0FBSkosQUFDRTt3QkFNUSxjQUFBLEFBQUssTUFBTCxBQUFXLFFBQVgsQUFBbUIsU0FEN0IsQUFDVSxBQUE0QixBQUNwQztzQkFGRixBQUVRLEFBQ047NkJBNUJSLEFBQVksQUF5Qk4sQUFJSSxBQUdWO0FBUE0sQUFDRTtpREFNRCxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1COzhCQUFuQjtnQ0FBUCxBQUFPLEFBQ1Y7QUFEVTthQUFBOzs7O2lDQUVGLEFBQ0w7bUNBQ0ksY0FBQTs7OEJBQUE7Z0NBQUEsQUFFSTtBQUZKO0FBQUEsYUFBQSxrQkFFSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUVJO0FBRko7QUFBQSwrQkFFSSxBQUFDLDRDQUFVLE9BQU8sRUFBQyxTQUFuQixBQUFrQixBQUFTOzhCQUEzQjtnQ0FBQSxBQUNBO0FBREE7K0JBQ0EsY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREEsQUFDQSxBQUNBLDZCQUFBLEFBQUM7OzhCQUFEO2dDQUFBLEFBQ0k7QUFESjtBQUFBLCtCQUNLLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0s7QUFETDtvQkFESixBQUNJLEFBQ0ssQUFBSyxBQUVWLGdDQUFDLGNBQUQsc0JBQUEsQUFBTSxVQUFPLE9BQWIsQUFBb0I7OEJBQXBCO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxBQUFDLDBDQUFlLFNBQWhCLEFBQXdCLFNBQVEsU0FBUyxLQUFBLEFBQUssTUFBOUMsQUFBb0Q7OEJBQXBEO2dDQVpwQixBQUNJLEFBRUksQUFFSSxBQUVBLEFBSUksQUFDSSxBQVd2QjtBQVh1Qjs7Ozs7O2lILEFBcEVLOzs7OztpQ0FDekI7QUFDTTtBLDBDQUFRLE1BQUEsQUFBTSxNLEFBQU0sQUFDMUI7O3dDQUFBLEFBQVEsSUFBUixBQUFZLEFBQ047QSwyQ0FBUyx3QixBQUFBLEFBQVM7O3VDQUNILFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUE3QztBOzs2Q0FFQyxBQUNLLEFBQ1I7bURBQWMsUUFGWCxBQUVXLEFBQVEsQUFDdEI7NkNBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7bURBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0RBQWUsUUFMWixBQUtZLEFBQVEsQUFDdkI7NkNBQVEsUSxBQU5MLEFBTUssQUFBUTtBQU5iLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVQ4Qjs7a0IsQUFBckIiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi91ZGVteS9CbG9ja0NoYWluL0NhbXBhaWduIn0=