window.addEventListener('load', function() {
    var display =new Display(document.getElementById('display1'));

    var count = 0;

    setInterval(function() {
        for (var j = 0; j < 10; i++) {
            for (var i = 0; i < 1000000; i++) {
                var e = (i * Math.PI / 2);
            }
        }
        display.setDigit(count);
        count++;
        if (count >= 10) {
            count = 0;
        }
    }, 1000);
});