var Expect = function (data) {
    this.data = data;
};

Expect.prototype.contains = function (str) {
    if (this.data.indexOf(str) == -1) {
        throw new Error("Expectation is wrong. Expected that `" + this.data + "` contains `" + str + "`");
    }

};

module.exports = Expect;
