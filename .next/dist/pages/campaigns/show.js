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

var _routes = require('../../routes');

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
                    lineNumber: 63
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 67
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 69
                }
            }, _react2.default.createElement(_semanticUiReact.Container, { style: { padding: '10px' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            }, 'Campaign'), _react2.default.createElement(_semanticUiReact.Grid, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 73
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_ContributeForm2.default, { floated: 'right', address: this.props.address, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 83
                }
            }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 84
                }
            }, _react2.default.createElement(_routes.Link, { route: '/campaigns/' + this.props.address + '/requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 85
                }
            }, _react2.default.createElement('a', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 86
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { primary: true, content: 'View Requests', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 87
                }
            })))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxjYW1wYWlnbnNcXHNob3cuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJCdXR0b24iLCJDYXJkIiwiQ29udGFpbmVyIiwiR3JpZCIsIkxheW91dCIsIkNhbXBhaWduIiwiQ29udHJpYnV0ZUZvcm0iLCJ3ZWIzIiwiTGluayIsIkNhbXBhaWduU2hvdyIsInByb3BzIiwibWluaW11bUNvbnRybyIsImJhbGFuY2UiLCJyZXF1ZXN0c0NvdW50IiwiYXBwcm92ZXJzQ291bnQiLCJtYW5hZ2VyIiwiaXRlbXMiLCJoZWFkZXIiLCJtZXRhIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJkZXNjcmlwdGlvbiIsInV0aWxzIiwiZnJvbVdlaSIsInBhZGRpbmciLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJxdWVyeSIsImNvbnNvbGUiLCJsb2ciLCJpbnN0YW5jZSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFRLEFBQU0sQUFBVzs7QUFDbEMsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBYzs7OztBQUNyQixBQUFPLEFBQW9COzs7O0FBQzNCLEFBQU8sQUFBVTs7OztBQUNqQixBQUFRLEFBQVc7Ozs7Ozs7SSxBQUVFOzs7Ozs7Ozs7OztzQ0FrQko7eUJBR1AsS0FITyxBQUdGO2dCQUhFLEFBRUwsdUJBRkssQUFFTDtnQkFGSyxBQUVTLGlCQUZULEFBRVM7Z0JBRlQsQUFFaUIsdUJBRmpCLEFBRWlCO2dCQUZqQixBQUUrQix3QkFGL0IsQUFFK0I7Z0JBRi9CLEFBRThDLGlCQUY5QyxBQUU4QyxBQUV2RDs7Z0JBQU07d0JBQ0YsQUFDVyxBQUNQO3NCQUZKLEFBRVMsQUFDTDt1QkFBTSxFQUFDLGNBSFgsQUFHVSxBQUFjLEFBQ3BCOzZCQUxJLEFBQ1IsQUFJZ0I7QUFKaEIsQUFDSSxhQUZJO3dCQU9SLEFBQ1ksQUFDUjtzQkFGSixBQUVVLEFBQ047NkJBVkksQUFPUixBQUlNO0FBSk4sQUFDSTt3QkFLRixBQUNVLEFBQ1I7c0JBRkYsQUFFUSxBQUNOOzZCQWhCSSxBQWFOLEFBSUk7QUFKSixBQUNFO3dCQUtGLEFBQ1UsQUFDUjtzQkFGRixBQUVRLEFBQ047NkJBdEJJLEFBbUJOLEFBSUk7QUFKSixBQUNFO3dCQU1RLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUQ3QixBQUNVLEFBQTRCLEFBQ3BDO3NCQUZGLEFBRVEsQUFDTjs2QkE1QlIsQUFBWSxBQXlCTixBQUlJLEFBR1Y7QUFQTSxBQUNFO2lEQU1ELEFBQUMsc0JBQUQsQUFBTSxTQUFNLE9BQVosQUFBbUI7OEJBQW5CO2dDQUFQLEFBQU8sQUFDVjtBQURVO2FBQUE7Ozs7aUNBRUYsQUFDTDttQ0FDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUVJO0FBRko7QUFBQSxhQUFBLGtCQUVJLEFBQUM7OzhCQUFEO2dDQUFBLEFBRUk7QUFGSjtBQUFBLCtCQUVJLEFBQUMsNENBQVUsT0FBTyxFQUFDLFNBQW5CLEFBQWtCLEFBQVM7OEJBQTNCO2dDQUFBLEFBQ0E7QUFEQTsrQkFDQSxjQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFEQSxBQUNBLEFBQ0EsNkJBQUEsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSTtBQURKO0FBQUEsK0JBQ0ssY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNLO0FBREw7b0JBREosQUFDSSxBQUNLLEFBQUssQUFHVixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQywwQ0FBZSxTQUFoQixBQUF3QixTQUFRLFNBQVMsS0FBQSxBQUFLLE1BQTlDLEFBQW9EOzhCQUFwRDtnQ0FQWixBQUNJLEFBS0ksQUFDSSxBQUdSO0FBSFE7a0NBR1AsY0FBRCxzQkFBQSxBQUFNOzs4QkFBTjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9COzhCQUFwQjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksQUFBQyw4QkFBSyx1QkFBcUIsS0FBQSxBQUFLLE1BQTFCLEFBQWdDLFVBQXRDOzhCQUFBO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBOzs4QkFBQTtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLHlDQUFPLFNBQVIsTUFBZ0IsU0FBaEIsQUFBd0I7OEJBQXhCO2dDQXJCaEMsQUFDSSxBQUVJLEFBRUksQUFFQSxBQVVJLEFBQ0ksQUFDSSxBQUNJLEFBQ0ksQUFjbkM7QUFkbUM7Ozs7OztpSCxBQTdFUDs7Ozs7aUNBQ3pCO0FBQ007QSwwQ0FBUSxNQUFBLEFBQU0sTUFDcEIsQSxBQUQwQjs7d0NBQzFCLEFBQVEsSUFBUixBQUFZLEFBQ047QSwyQ0FBUyx3QixBQUFBLEFBQVM7O3VDQUNILFNBQUEsQUFBUyxRQUFULEFBQWlCLGEsQUFBakIsQUFBOEI7O2lDQUE3QztBOzs2Q0FFQyxBQUNLLEFBQ1I7bURBQWMsUUFGWCxBQUVXLEFBQVEsQUFDdEI7NkNBQVEsUUFITCxBQUdLLEFBQVEsQUFDaEI7bURBQWMsUUFKWCxBQUlXLEFBQVEsQUFDdEI7b0RBQWUsUUFMWixBQUtZLEFBQVEsQUFDdkI7NkNBQVEsUSxBQU5MLEFBTUssQUFBUTtBQU5iLEFBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSxBQVQ4Qjs7a0IsQUFBckIiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiJEOi91ZGVteS9CbG9ja0NoYWluL0NhbXBhaWduIn0=