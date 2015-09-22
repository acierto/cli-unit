var _ = require('lodash-node/compat');

var Expect = function (data) {
    this.data = data;
};

Expect.prototype.contains = function (str) {
    if (this.data.indexOf(str) == -1) {
        throw new Error("Expectation is wrong. Expected that `" + this.data + "` contains `" + str + "`");
    }
};

Expect.prototype.equals = function (str) {
    if (this.data !== str) {
        throw new Error("Expectation is wrong. Expected that `" + this.data + "` to be equal `" + str + "`");
    }
};

Expect.prototype.deepEquals = function (array) {
    if (!_.isEmpty(_.difference(this.data, array))) {
        throw new Error("Expectation is wrong. Expected that `" + this.data + "` to be equal `" + array + "`");
    }
};

module.exports = Expect;
