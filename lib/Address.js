"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BITBOXAddress = require("bitbox-sdk/lib/Address").default;
var BITBOXSDK = require("bitbox-sdk/lib/bitbox-sdk").default;
var BITBOX = new BITBOXSDK();
var utils = require("slpjs").slpjs.Utils;
var Address = /** @class */ (function (_super) {
    __extends(Address, _super);
    function Address(restURL) {
        var _this = _super.call(this, restURL) || this;
        _this.restURL = restURL;
        return _this;
    }
    Address.prototype.toSLPAddress = function (address) {
        try {
            this._ensureValidAddress(address);
            return utils.toSlpAddress(address);
        }
        catch (err) {
            return err;
        }
    };
    Address.prototype.toCashAddress = function (address) {
        try {
            this._ensureValidAddress(address);
            return utils.toCashAddress(address);
        }
        catch (err) {
            return err;
        }
    };
    Address.prototype.toLegacyAddress = function (address) {
        try {
            this._ensureValidAddress(address);
            var cashAddr = utils.toCashAddress(address);
            return BITBOX.Address.toLegacyAddress(cashAddr);
        }
        catch (err) {
            return err;
        }
    };
    Address.prototype._ensureValidAddress = function (address) {
        try {
            utils.toCashAddress(address);
        }
        catch (err) {
            throw new Error("Invalid BCH address. Double check your address is valid: " + address);
        }
    };
    return Address;
}(BITBOXAddress));
exports.default = Address;