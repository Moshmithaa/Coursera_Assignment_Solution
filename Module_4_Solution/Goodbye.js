(function(window) {
    var goodBye = {};
    var speakWord = "Goodbye";
    goodBye.speak = function (name) {
        console.log(speakWord + " " + name);
    };
    window.goodBye = goodBye;
})(window);
