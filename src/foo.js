
foo = function () {
    const rand = Math.floor(Math.random() * 100);

    if (rand) {
        return true;
    } else  {
        return false;
    }
}

module.exports = foo;