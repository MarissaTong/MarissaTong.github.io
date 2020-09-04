
function typecursor (text,img) {
    var content = document.getElementsByClassName(text);

    var ele = '<span>' + content[0].innerText.split('').join('</span><span>') + '</span>';

    $(ele).hide().appendTo(img).each(function (i) {
        $(this).delay(100 * i).css({
            display: 'inline',
            opacity: 0
        }).animate({
            opacity: 1
        }, 100);
    });

}
