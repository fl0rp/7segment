var Display = function(node) {
    this.node = node;
    this.node.innerHTML = '';
    this.node.classList.add('display7segment');
    this.segments = [];

    var segment, i;
    for (i = 0; i < 7; i++) {
        segment = document.createElement('div');
        segment.classList.add('seg');
        segment.classList.add('seg' + i);
        this.node.appendChild(segment);
        this.segments.push(segment);
    }

    this.setDigit(0);
};

Display.prototype.setDigit = function (digit) {
    for (var i = 0; i < 10; i++) {
        if (this.node.classList.contains('digit' + i)) {
            this.node.classList.remove('digit' + i)
        }
    }
    this.node.classList.add('digit' + digit);
};