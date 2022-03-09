var Body = {
    // setColor 프로퍼티 추가
    setColor: function (color) {
        document
            .querySelector('body')
            .style
            .color = color;
    },
    setBackgroudColor: function (color) {
        document
            .querySelector('body')
            .style
            .backgroundColor = color;
    }
}

var Links = {
    setColor: function (color) {
        var alist = document.querySelectorAll('a')
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = color;
            i = i + 1;
        }
    }
}

function nightDayHandler() {
    var target = document.querySelector("body");
    if (self.value == 'night') {
        Body.setBackgroudColor('black');
        Body.setColor('white');
        self.value = 'day';
        LinksSetColor('powerblue')
    } else {
        Body.setBackgroudColor('white');
        Body.setColor('black');
        self.value = 'night';
        LinksSetColor('blue');
    }
}