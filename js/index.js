var main = document.querySelector('main');
var bs = new BScroll('main', {
    bounce: true,
    probeType: 2,
    tap: true,
    click: true
});
var topBar = document.querySelector('.top-bar');
var bottomBar = document.querySelector('.bottom-bar');
var flag = false;
var select = false;
var index = 0;
var dat = [];
bs.on('scroll', function(e) {
    if (e.y >= topBar.offsetHeight) {
        topBar.innerHTML = '释放刷新';
        flag = true;
    } else {
        topBar.innerHTML = '下拉刷新';
        flag = false;
    }
    // console.log(bs.maxScrollY)
    if (!index) {
        if (e.y < bs.maxScrollY - topBar.offsetHeight) {
            bottomBar.innerHTML = '释放加载';
            select = true;
        } else {
            bottomBar.innerHTML = '上拉加载';
            select = false;
        }
    } else {
        bottomBar.innerHTML = '没有跟多数据了';
    }

})
bs.on('scrollEnd', function() {
    if (flag) {
        location.reload();
    }
    if (select) {
        //加载数据
        render(data, '.inner-list', 3);
        if (!data.length) {
            index = 1;
        }
    }
})

render(data, '.inner-list', 3);

//渲染
function render(arr, parentEl, num) {
    var newArr = arr.splice(0, num);
    var el = document.querySelector(parentEl);
    newArr.forEach((i) => {
        el.innerHTML += `
        <div>
             <dl>
                 <dt><img src="${i.src}"></dt>
                 <dd>
                     <h2>${i.title}</h2>
                     <span class="timeclass="icon-shizho</i>${i.time}</span>
                     <span class="posclass="icon-dingwei>${i.pos}</span>
                     <class="money" style="color: red;font-size: .48rem;transform: translate(0, 60px);">${i.minPrice}-${i.maxPrice}</span>
                 </dd>
             </dl>
        </div>
        `;
    });
    for (var i = 0; i < newArr.length; i++) {
        dat.push(newArr[i]);
    }

}