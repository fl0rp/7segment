window.addEventListener('load', function() {
    var displays = [
        new Display(document.getElementById('display1')),
        new Display(document.getElementById('display2')),
        new Display(document.getElementById('display3')),
        new Display(document.getElementById('display4'))
    ];

    var counts = [1,3,3,7];

    setInterval(function() {
        for (var i = 0; i < displays.length; i++) {
            displays[i].setDigit(counts[i]);
            counts[i]++;
            if (counts[i] >= 10) {
                counts[i] = 0;
            }
        }
    }, 1000);
});