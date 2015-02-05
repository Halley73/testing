var chai = require('chai'),
    Person = require('../person');

chai.should();

xdescribe('module testing', function () {
    describe('Testing our modules', function () {
        it('should be a Person', function () {
            var person = new Person();

            person.should.be.instanceOf(Person);
        });
    });
});
