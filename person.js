var os = require('os');

function Person (name) {
    var me = this;

    me.name = name || 'Halley73';

    me.hello = function () {
        return 'Hello I\'m ' + me.name;
    };

    me.study = function (cb) {
        setTimeout(function () {
            cb(new Error('never'));
        }, 3000);
    };

    me.getCpus = function () {
        return os.cpus().length;
    };
}

module.exports = Person;
