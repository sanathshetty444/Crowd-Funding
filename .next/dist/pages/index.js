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

var _factory = require('../ethereum/factory');

var _factory2 = _interopRequireDefault(_factory);

var _semanticUiReact = require('semantic-ui-react');

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _routes = require('../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'D:\\udemy\\BlockChain\\Campaign\\pages\\index.js?entry';


var CampaignIndex = function (_Component) {
    (0, _inherits3.default)(CampaignIndex, _Component);

    function CampaignIndex() {
        (0, _classCallCheck3.default)(this, CampaignIndex);

        return (0, _possibleConstructorReturn3.default)(this, (CampaignIndex.__proto__ || (0, _getPrototypeOf2.default)(CampaignIndex)).apply(this, arguments));
    }

    (0, _createClass3.default)(CampaignIndex, [{
        key: 'renderCampiagns',
        value: function renderCampiagns() {
            var items = this.props.campaigns.map(function (c) {
                return {
                    header: c,
                    description: _react2.default.createElement(_routes.Link, { route: '/campaigns/' + c, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, _react2.default.createElement('a', {
                        __source: {
                            fileName: _jsxFileName,
                            lineNumber: 18
                        }
                    }, 'View Campaign')),
                    fluid: true

                };
            });
            return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 25
                }
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 30
                }
            }, _react2.default.createElement(_layout2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                }
            }, _react2.default.createElement('h3', {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 33
                }
            }, 'Open Campaigns'), _react2.default.createElement(_routes.Link, { route: '/campaigns/new', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement('a', { href: '', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }, _react2.default.createElement(_semanticUiReact.Button, { floated: 'right', content: 'create Campiagn', icon: 'add circle', primary: true, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 35
                }
            }))), this.renderCampiagns()));
        }
    }], [{
        key: 'getInitialProps',
        value: function () {
            var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
                var campaigns;
                return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _factory2.default.methods.getDeployedCampaigns().call();

                            case 2:
                                campaigns = _context.sent;
                                return _context.abrupt('return', { campaigns: campaigns });

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getInitialProps() {
                return _ref.apply(this, arguments);
            }

            return getInitialProps;
        }()
    }]);

    return CampaignIndex;
}(_react.Component);

exports.default = CampaignIndex;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsInVzZUVmZmVjdCIsIkZhY3RvcnkiLCJCdXR0b24iLCJDYXJkIiwiTGF5b3V0IiwiTGluayIsIkNhbXBhaWduSW5kZXgiLCJpdGVtcyIsInByb3BzIiwiY2FtcGFpZ25zIiwibWFwIiwiaGVhZGVyIiwiYyIsImRlc2NyaXB0aW9uIiwiZmx1aWQiLCJyZW5kZXJDYW1waWFnbnMiLCJtZXRob2RzIiwiZ2V0RGVwbG95ZWRDYW1wYWlnbnMiLCJjYWxsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFPLEFBQVc7Ozs7QUFDekIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQVEsQUFBTzs7QUFDZixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBUSxBQUFXOzs7Ozs7O0ksQUFHYjs7Ozs7Ozs7Ozs7MENBS2UsQUFDYjtnQkFBTSxhQUFNLEFBQUssTUFBTCxBQUFXLFVBQVgsQUFBcUIsSUFBSSxhQUFHLEFBQ3BDOzs0QkFBTSxBQUNLLEFBQ1A7aURBQ0ksQUFBQyw4QkFBSyx1QkFBTixBQUEyQjtzQ0FBM0I7d0NBQUEsQUFBZ0M7QUFBaEM7cUJBQUEsa0JBQWdDLGNBQUE7O3NDQUFBO3dDQUFBO0FBQUE7QUFBQSx1QkFIbEMsQUFHRSxBQUFnQyxBQUNwQzsyQkFKSixBQUFNLEFBSUksQUFJYjs7QUFSUyxBQUNGO0FBRlIsQUFBWSxBQVVaLGFBVlk7aURBV1osQUFBQyxzQkFBRCxBQUFNLFNBQU0sT0FBWixBQUFtQjs4QkFBbkI7Z0NBREEsQUFDQSxBQUVIO0FBRkc7YUFBQTs7OztpQ0FHSSxBQUNKO21DQUNJLGNBQUE7OzhCQUFBO2dDQUFBLEFBRUc7QUFGSDtBQUFBLGFBQUEsa0JBRUcsQUFBQzs7OEJBQUQ7Z0NBQUEsQUFDSztBQURMO0FBQUEsK0JBQ0ssY0FBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBREwsQUFDSyxBQUVELG1DQUFBLEFBQUMsOEJBQUssT0FBTixBQUFZOzhCQUFaO2dDQUFBLEFBQTZCO0FBQTdCOytCQUE2QixjQUFBLE9BQUcsTUFBSCxBQUFROzhCQUFSO2dDQUFBLEFBQVc7QUFBWDsrQkFBVyxBQUFDLHlDQUFPLFNBQVIsQUFBZ0IsU0FBUSxTQUF4QixBQUFnQyxtQkFBa0IsTUFBbEQsQUFBdUQsY0FBYSxTQUFwRTs4QkFBQTtnQ0FINUMsQUFHSSxBQUE2QixBQUFXLEFBQ3RDO0FBRHNDO3VCQU5uRCxBQUNJLEFBRUcsQUFJTSxBQUFLLEFBS3JCOzs7Ozs7Ozs7Ozs7dUNBL0IwQixrQkFBQSxBQUFRLFFBQVIsQUFBZ0IsdUIsQUFBaEIsQUFBdUM7O2lDQUF4RDtBO2lFQUNDLEVBQUMsVyxBQUFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NmLEEsQUFuQzRCOztrQkFtQzVCLEFBQWUiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiRDovdWRlbXkvQmxvY2tDaGFpbi9DYW1wYWlnbiJ9