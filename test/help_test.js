var cu = require('../lib/commands');

//var _ = require('lodash-node/compat');

describe('Simple tests', function () {
    var $this = this;

    $this.timeout(7000);

    it('xl-repo-linker -h', function (done) {

        return cu.checkCommand('xl-repo-linker -h', function (data) {
            cu.expect(data).contains('Usage: xl-repo-linker');
        }, done);
    });

    it('xl-repo-linker --show-size', function (done) {
        cu.checkCommand('xl-repo-linker --show-size', function (data) {
            cu.expect(data).contains('XLD snapshot size is:');
        }, done);
    });

    it.only('xl-repo-linker --mode bla', function (done) {
        cu.checkCommand('xl-repo-linker --mode bla', function (data) {
            cu.expect(data).contains('Please check your mode value, valid values are [local, jira, google-drive]\n');
        }, done);
    });

    //it('xl-repo-linker --xld-home=IncorrectPath', function (done) {
    //    cu.runAndCheckCurl('xl-repo-linker --xld-home=IncorrectPath', 4, function (data) {
    //        expect(data.configValidation).to.equal('XL Deploy home doesn\'t exist [IncorrectPath]');
    //        expect(data.fields.length).to.equal(1);
    //        assert.deepEqual(['xld.home'], data.fields);
    //        done();
    //    });
    //});

});