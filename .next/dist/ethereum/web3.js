'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// window.web3 = new Web3(window.ethereum);
// window.ethereum.enable();
// let web3 = new Web3(window.web3)
var web3 = void 0;

if (typeof window !== 'undefined') {
    window.web3 = new _web2.default(window.ethereum);
    window.ethereum.enable();
    web3 = new _web2.default(window.web3);
} else {
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/d3e6bb5005cd43458feebc0d2252eddb');
    web3 = new _web2.default(provider);
}
exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiZXRoZXJldW0iLCJlbmFibGUiLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsQUFBTyxBQUFQOzs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLFlBQUo7O0FBRUEsSUFBRyxPQUFPLEFBQVAsV0FBZ0IsQUFBbkIsYUFBZ0MsQUFDNUI7V0FBTyxBQUFQLE9BQWMsQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBaEIsQUFBZCxBQUNBO1dBQU8sQUFBUCxTQUFnQixBQUFoQixBQUNBO1dBQU8sQUFBSSxBQUFKLGtCQUFTLE9BQU8sQUFBaEIsQUFBUCxBQUVIO0FBTEQsT0FLSyxBQUNEO1FBQU0sV0FBUyxJQUFJLGNBQUssQUFBTCxVQUFlLEFBQW5CLGFBQ1gsQUFEVyxBQUFmLEFBR0E7V0FBSyxBQUFJLEFBQUosa0JBQVMsQUFBVCxBQUFMLEFBQ0g7QUFDRDtrQkFBZSxBQUFmIiwiZmlsZSI6IndlYjMuanMiLCJzb3VyY2VSb290IjoiRDovdWRlbXkvQmxvY2tDaGFpbi9DYW1wYWlnbiJ9