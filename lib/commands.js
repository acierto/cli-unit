var Expect = require('./expect');

var exec = require('child_process').exec;
var spawn = require('child_process').spawn;
var Q = require('q');
var _ = require('lodash-node/compat');

var Commands = function () {
};

Commands.prototype.checkCommand = function (command, callback, done) {
    Commands.prototype.executeCommand(command).then(callback).then(done, done);
};

Commands.prototype.runAndCheckCurl = function (command, curlCommand, callback, done) {

    var toJson = function (str) {
        return _.isEmpty(str) ? "{}" : eval("(" + str + ")");
    };

    var getMessageBody = function () {
        var deferred = Q.defer();

        exec(curlCommand, function (error, stdout) {
            deferred.resolve(toJson(stdout));
        });

        return deferred.promise;
    };

    Commands.prototype.executeCommand(command, 2000).then(getMessageBody).then(callback).then(done, done);
};

Commands.prototype.executeCommand = function (commandWithArgs, timeout) {
    var deferred = Q.defer();

    var usedTimeout = timeout || 6000;
    var tokens = commandWithArgs.split(' ');
    var command = tokens[0];
    var args = tokens.slice(1);

    var child = spawn(command, args);

    var receivedData = '';

    child.stdout.on('data', function (data) {
        receivedData += data.toString();
    });

    child.stderr.on('data', function (data) {
        receivedData += data.toString();
    });

    setTimeout(function () {
        deferred.resolve(receivedData);
    }, usedTimeout);

    return deferred.promise;
};

Commands.prototype.expect = function (str) {
    return new Expect(str);
};

module.exports = new Commands();
