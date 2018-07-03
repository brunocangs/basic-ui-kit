'use strict';

var mask = function mask(strings) {
    for (var _len = arguments.length, pieces = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        pieces[_key - 1] = arguments[_key];
    }

    var string = pieces.pop() || '';
    var a = pieces.reduce(function (previous, current, index) {
        var fragment = string.slice(previous.sum, previous.sum + Number(current));
        previous.sum += Number(current);
        if (fragment.length) {
            previous.string += strings[index] + fragment;
        }
        return previous;
    }, {
        sum: 0,
        string: ''
    });
    return a.string;
};
module.exports = mask;