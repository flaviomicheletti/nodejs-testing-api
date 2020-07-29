
module.exports = {
    trueOrfalse: function () {
        const rand = Math.floor(Math.random() * 2);

        if (rand) {
            return true;
        } else {
            return false;
        }
    }

}