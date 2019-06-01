// console.log(nav)
Array.from(nav.children).forEach((item, i) => {
    item.addEventListener('tap', function(e) {
        // console.log(dat)
        dat.forEach((item, i) => {
            // console.log(dat)
            var t = new Date(item.time.substr(0, 10));
            dat.sort(function(a, b) {
                var c = new Date(b.time.substr(0, 10)),
                    d = new Date(a.time.substr(0, 10));

                // console.log(c * 1, d * 1)
                return c * 1 - d * 1
            })
            sort(dat, '.inner-list');
            console.log(dat)
        });
    })
});

function sort(arr, parentEl) {
    var el = document.querySelector(parentEl);
    el.innerHTML = '';
    arr.forEach((i) => {

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

}
var footer = document.querySelector('footer');

footer.addEventListener('click', function(e) {
    var el = e.target;
    // console.log(el)

    if (el.tagName == 'I') {
        for (var i = 0; i < footer.children.length; i++) {
            footer.children[i].style.color = '#000';
        }
        el.parentNode.parentNode.style.color = 'red';

    }
})