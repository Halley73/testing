var assert = require('assert'),
    chai = require('chai'),
    expect = chai.expect;

chai.should();

function fixedValue () {
    return 10;
}

describe('Come utente voglio vedere i miei dati', function () {
    it('should give some data to the user', function () {
        assert.equal(process.env.NODE_ENV, 'testing');
        expect(process.env.NODE_ENV).to.equal('testing');
        process.env.NODE_ENV.should.equal('testing');
    });

    it('should return a fixed value', function () {
        var result = fixedValue();

        result.should.be.not.null;
        result.should.be.a('number');
        result.should.equal(10);
    });
});
