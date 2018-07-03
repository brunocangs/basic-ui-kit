let mask = function (strings, ...pieces) {
    const string = pieces.pop() || '';
    let a = pieces.reduce((previous, current, index) => {
        const fragment = string.slice(previous.sum, previous.sum + Number(current));
        previous.sum += Number(current);
        if (fragment.length) {
            previous.string += (strings[index] + fragment);
        }
        return previous;
    },
        {
            sum: 0,
            string: ''
        }
    );
    return a.string;
}
module.exports = mask;