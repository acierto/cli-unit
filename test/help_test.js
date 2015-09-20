var cu = require('../lib/commands');

//var _ = require('lodash-node/compat');

describe('Simple tests', function () {
    var $this = this;

    $this.timeout(10000);
    //
    //it('xl-repo-linker -h', function (done) {
    //
    //    return cu.checkCommand('xl-repo-linker -h', function (data) {
    //        cu.expect(data).contains('Usage: xl-repo-linker1');
    //    }, done);
    //});

    it('xl-repo-linker --show-size', function (done) {
        cu.checkCommand('xl-repo-linker --xld-home="/Users/bogdannechyporenko/proj/xl-deploy/package/build/distributions/xl-deploy-5.2.0-SNAPSHOT-server" --show-size', function (data) {
            cu.expect(data).contains('XLD snapshot size is:');
        }, done);
    });

    //it('xl-repo-linker --mode bla', function (done) {
    //    cu.checkCommand('xl-repo-linker --mode bla', function (data) {
    //        expect(data).to.equal('Please check your mode value, valid values are [local, jira, google-drive]\n');
    //        done();
    //    });
    //});
    //
    //it('xl-repo-linker --xld-home=IncorrectPath', function (done) {
    //    cu.runAndCheckCurl('xl-repo-linker --xld-home=IncorrectPath', 4, function (data) {
    //        expect(data.configValidation).to.equal('XL Deploy home doesn\'t exist [IncorrectPath]');
    //        expect(data.fields.length).to.equal(1);
    //        assert.deepEqual(['xld.home'], data.fields);
    //        done();
    //    });
    //});

});