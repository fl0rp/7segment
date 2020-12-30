window.addEventListener('load', function() {
    var displays = {
        h1: new Display(document.getElementById('h1')),
        h2: new Display(document.getElementById('h2')),
        m1: new Display(document.getElementById('m1')),
        m2: new Display(document.getElementById('m2')),
        s1: new Display(document.getElementById('s1')),
        s2: new Display(document.getElementById('s2'))
    };

    function displayTime(displays) {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();

        displays.h1.setDigit(Math.floor(h/10));
        displays.h2.setDigit(h%10);

        displays.m1.setDigit(Math.floor(m/10));
        displays.m2.setDigit(m%10);

        displays.s1.setDigit(Math.floor(s/10));
        displays.s2.setDigit(s%10);
    }

    var wrapper = function(displays) {
        return function() {
            displayTime(displays);
        }
    }(displays);

    setInterval(function() {
        setTimeout(wrapper, 1);
    }, 1000);
});