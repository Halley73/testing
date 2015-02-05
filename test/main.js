var assert = require('assert');

describe('Come utente voglio vedere i miei dati', function () {
   it('should give some data to the user', function () {
        assert.equal(process.env.NODE_ENV, 'testing');
   });
});
