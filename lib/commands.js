var Expect = require('./expect');

var spawn = require('child_process').spawn;
var Q = require('q');
var _ = require('lodash-node/compat');

var Commands = function () {
};

Commands.prototype.checkCommand = function (command, callback, done) {
    Commands.prototype.executeCommand(command).then(callback).then(done, done);
};

Commands.prototype.executeCommand = function (commandWithArgs) {
    var deferred = Q.defer();

    var tokens = commandWithArgs.split(' ');
    var command = tokens[0];
    var args = tokens.slice(1);

    var child = spawn(command, args);

    child.stdout.on('data', function (data) {
        deferred.resolve(data.toString());
    });

    child.stderr.on('data', function (data) {
        deferred.resolve(data.toString());
    });

    return deferred.promise;
};

Commands.prototype.expect = function (str) {
    return new Expect(str);
};

module.exports = new Commands();
