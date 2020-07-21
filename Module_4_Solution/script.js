(function() {
    var names = ["Jackson","jinyoung","Jaebeom","justin","mosh","Yaakov"];
    for (var i = 0; i < names.length; i++) {
        var firstLetter = names[i].charAt(0).toLowerCase();
        if (firstLetter === 'j') {
            goodBye.speak(names[i]);
        } else {
            hello.speak(names[i]);
        }
    }
})();
