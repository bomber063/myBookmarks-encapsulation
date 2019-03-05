
//下面的意思
//1、把ks返回给'k',然后通过init()['k']取到init()函数里面ks数组赋值给keys
//2、把hh返回给'h',然后通过init()['h']取到init()函数里面hh数组赋值给hash

//下面的是函数封装后初始化数据
var hashA = init()
var keys = hashA['k']//['k']代表init()函数里面的reture的'k',这里的'k'不可以用k代替
console.log(keys)
var hash = hashA['h']//['h']代表init()函数里面的reture的'h',这里的'h'不可以用h代替

//下面的是封装的函数，也就是函数封装前的初始化数据
function init() {
    var ks = {   //init()函数里面前面的哈希数组ks
        0: {
            0: 'q',
            1: 'w',
            2: 'e',
            3: 'r',
            4: 't',
            5: 'y',
            6: 'u',
            7: 'i',
            8: 'o',
            9: 'p',
            'length': 10
        },
        1: {
            0: 'a',
            1: 's',
            2: 'd',
            3: 'f',
            4: 'g',
            5: 'h',
            6: 'j',
            7: 'k',
            8: 'l',
            'length': 9
        },
        2: {
            0: 'z',
            1: 'x',
            2: 'c',
            3: 'v',
            4: 'b',
            5: 'n',
            6: 'm',
            'length': 7
        },
        'length': 3
    }

    var hh = {    //init()函数里面前面的哈希对象hh
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'tianya.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn'
    }

    var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
    // 取出 localStorage 中的 zzz 对应的 hash
    if (hashInlocalStorage) {
        hash = hashInlocalStorage
    }

    return {
        'k': ks,  //这里是把ks的值放在'k'里面,ks就是init()函数里面前面的哈希数组ks,这里的'k'可以用k代替
        'h': hh   //这里是把hh的值放在'h'里面,hh就是init()函数里面前面的哈希对象hh,这里的'h'可以用h代替
    }

}





index = 0;
while (index < keys['length']) {
    div1 = document.createElement('div')
    a = main1.appendChild(div1)

    index2 = 0;
    while (index2 < keys[index]['length']) {

        span = document.createElement('span')
        span.textContent = keys[index][index2]
        span.className = 'text'

        img = document.createElement('img')
        img.className = 'picture'

        if (hash[keys[index][index2]]) {
            img.src = 'http://' + hash[keys[index][index2]] + '/favicon.ico'
        }
        //因为有字母没有部分没有给出网址，所以也需要判断是否有网址//
        else {
            img.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        }
        //可以查询onerror了解用法//
        img.onerror = function (e) {
            e.target.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
            return img
        }


        kbd = document.createElement('kbd')//创建一个kbd//
        // b.textContent(keys[index][index2])
        // kbd.textContent=keys[index][index2];//kbd遍历//
        button = document.createElement('button')//创建button//
        button.textContent = '编辑'//button上写字为e//
        button.id = keys[index][index2]
        button.onclick = function (xx) {
            key = xx['target']['id']
            wangzhi = prompt('给我一个网址')
            hash[key] = wangzhi
            localStorage.setItem('zzz', JSON.stringify(hash))//把改变的hash存到本地//
            console.log(hash)
            //    xx.target=keys[index][index2]
        }
        kbd.appendChild(span)

        kbd.appendChild(button)//把button放到kbd里面//
        kbd.appendChild(img)

        a.appendChild(kbd);//把kbd放到div里面//
        a.className = 'row';
        main1.appendChild(a)

        index2 = index2 + 1;
    }
    index = index + 1;
}

document.onkeypress = function (x) {
    x = x['key']
    website = hash[x]
    // location.href='http://'+website /当前网站打开/
    window.open('http://' + website, '_blank')  //在新窗口打开地址//
}


