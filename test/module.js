var chai = require('chai'),
    expect = chai.expect,
    //Person = require('../person'),
    fs = require('fs'),
    rewire = require('rewire'),
    Person = rewire('../person');

Person.__set__('os', {
    cpus: function () {
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    }
});

var person;

chai.should();

beforeEach(function () {
    person = new Person('Halley73');
});

after(function (done) {
    if (!fs.existsSync('test.json')) done();
    fs.unlink('test.json', done);
});

describe('module testing', function () {
    this.timeout(8000);

    xdescribe('Testing our modules', function () {
        it('should be a Person', function () {
            var person = new Person();

            person.should.be.instanceOf(Person);
        });

        it('should return the person name', function() {
            person.hello().should.be.equal('Hello I\'m Halley73');
        });

        it('should throw an error', function (done) {
            person.study(function (err) {
                err.should.be.instanceOf(Error);
                err.toString().should.equal('Error: never');

                done();
            });
        });
    });

    describe('Testing fs module', function () {
        it('should write a file', function(done) {
            fs.writeFile('test.json', JSON.stringify({test: 'test'}), function (err) {
                expect(err).to.be.null;

                fs.readFile('test.json', function (err, buf) {
                    expect(err).to.be.null;

                    var test = JSON.parse(buf.toString());
                    test.should.be.not.null;
                    test.should.have.property('test', 'test');
                    test.should.deep.equal({test: 'test'});

                    done();
                });
            });
        });

        it('should return 200 cores', function () {
            person.getCpus().should.equal(10);
        });
    });
});
