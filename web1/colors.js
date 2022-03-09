var Body = {
    // setColor 프로퍼티 추가
    setColor: function (color) {
        $('body').css('color', color);
        // document     .querySelector('body')     .style     .color = color;
    },
    setBackgroudColor: function (color) {
        $('body').css('backgroudColor', color);
        // document     .querySelector('body')     .style     .backgroundColor = color;
    }
}

var Links = {
    setColor: function (color) {
        // 모든 a 태그를 jquery로 제어
        $('a').css('color', color); // jquery 사용
        // var alist = document.querySelectorAll('a') var i = 0; while (i <
        // alist.length) {     alist[i].style.color = color;     i = i + 1; }
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