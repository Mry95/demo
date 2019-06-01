// var tuijian = document.querySelector('.tuijian');

var nav = document.querySelector('.t-nav');
var tuijian = document.querySelector('.tuijian');
bs.on('scroll', function(e) {
    // console.log(e.y)


    if (e.y <= -nav.offsetTop - tuijian.offsetTop) {
        var idName = document.querySelector('#bar');
        if (!idName) {
            var ele = nav.cloneNode(true);
            ele.id = 'bar';
            document.body.appendChild(ele);
            ele.style.cssText = `position: fixed;top: 1.28rem;    display: flex;
                width:10rem;
                height: 1.14667rem;
                border-top: solid #666 .02667rem;
                border-bottom: solid #666 .02667rem;background:#fff;`;
            console.log(ele.children)
            for (var i = 0; i < ele.children.length; i++) {
                ele.children[i].style.cssText = `    flex: 1;
                    text-align: center;
                    line-height: 1.14667rem;`;
            }
        }

        // nav.style.cssText = `position:sticky;top:50px`;
    } else if (e.y > -nav.offsetTop - tuijian.offsetTop) {
        var idName = document.querySelector('#bar');
        if (idName) {
            document.body.removeChild(idName);
        }
    }
})