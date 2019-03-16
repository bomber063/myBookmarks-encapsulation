//封装的一点总结
//封装就是先定义函数function 函数名字（变量名字）{ 函数具体运算内容 return 该封装函数等于的值},例如function xx(a){a=a+1 return a},这里xx就是封装的函数名字,a就是该封装函数的变量,经过a=a+1运算，最后把a赋值给function xx(a)
//调用该封装函数的时候一般只需要把函数名字写出来，例如上面的只需要写xx（a）即可
//如果是没有变量只有函数名字,例如function init(),调用就直接写函数名字即可
//return 后面返回的值可以使单个值也可以是数组或者对象等哈希,例如可以return{'h':hh,'s':ss}
//监听事件示例代码,选取对象.监听事件名称=function(变量){事件发生后执行的代码内容}
        // 例如
        // document.onkeypress = function (x) {
        // var x = x['key']
        // var website = hash[x]
        // // location.href='http://'+website /当前网站打开/
        // window.open('http://' + website, '_blank')  //在新窗口打开地址//
    // }

//封装函数的变量一般都是来自外部,比如下面的变量基本上都是和16行keys和17行hash相关。


//下面的意思
//1、把ks返回给'k',然后通过init()['k']取到init()函数里面ks数组赋值给keys
//2、把hh返回给'h',然后通过init()['h']取到init()函数里面hh数组赋值给hash

//下面的是函数封装后初始化数据 init()是没有变量的函数，直接使用函数名字即可
// 第一步 初始化数据只有三行（16、17、18）
var hashA = init()
var keys = hashA['k']//['k']代表init()函数里面的reture的'k',这里的'k'不可以用k代替
var hash = hashA['h']//['h']代表init()函数里面的reture的'h',这里的'h'不可以用h代替

//封装函数
function getFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name) || 'null')
}
// console.log(hash)

// localStorage不封装，在这里单独写成下面的也是可以达到要求
    // var hashInlocalStorage = JSON.parse(localStorage.getItem('zzz') || 'null')
    // // 取出 localStorage 中的 zzz 对应的 hash
    // if (hashInlocalStorage) {
    //     hash = hashInlocalStorage
    //     console.log(hash)
    // }
    // console.log(hash)


// 第三步 点击事件 监听用户动作 只有一行（37）
listenToUser(hash)
//点击事件封装函数
function listenToUser(hash){
    document.onkeypress = function (x) {
        var x = x['key']
        var website = hash[x]
        // location.href='http://'+website /当前网站打开/
        window.open('http://' + website, '_blank')  //在新窗口打开地址//
    }
}



//下面的是初始化封装的函数，也就是函数封装前的初始化数据
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
        'q': 'www.qq.com',
        'w': 'weibo.com',
        'e': 'ele.me',
        'r': 'renren.com',
        't': 'www.twitter.com',
        'y': 'youtube.com',
        'u': 'uc.com',
        'i': 'iqiyi.com',
        'o': 'opera.com',
        'p': undefined,
        'a': 'acfun.tv',
        's': 'sohu.com',
        'z': 'zhihu.com',
        'm': 'www.mcdonalds.com.cn',
        'd':'www.douyu.com',
        'h':'www.huya.com',
        'g':'www.google.com',
        'b':'www.baidu.com',
        'f':'www.facebook.com',

    }


// 删除下面的localstorage四行，单独在外面写出函数也是可以达到要求
    var hashInLocalStorage = getFromLocalStorage('zzz') 
    if(hashInLocalStorage){
        // hash = hashInLocalStorage  这里由于我把hh修改为了hash变量，导致封装前因为这里不需要调用可以满足要求，但是封装后无法满足要求，因为localstorage没有赋值给正确的hh
        hh=hashInLocalStorage
    }

    return {
        'k': ks,  //这里是把ks的值放在'k'里面,ks就是init()函数里面前面的哈希数组ks,这里的'k'可以用k代替
        'h': hh   //这里是把hh的值放在'h'里面,hh就是init()函数里面前面的哈希对象hh,这里的'h'可以用h代替
    }

}
		// 生成键盘
        // 遍历 keys，生成 kbd 标签
        //第二步 生成键盘 只有一行（125）
        generateKeyboard(keys,hash)
        //下面是生成键盘的封装函数
        function generateKeyboard(keys,hash){

            index = 0;
            while (index < keys['length']) {
                div1 = document.createElement('div')
                a = main1.appendChild(div1)
                
                index2 = 0;
                while (index2 < keys[index]['length']) {
                    
                    // span = document.createElement('span')
                    // span.textContent = keys[index][index2]
                    // span.className = 'text'
                    createSpan(keys[index][index2])//由于封装函数creatSpan，把上面三行写成下面这里一行即可
                    
                    // img = document.createElement('img')
                    // img.className = 'picture'
                    
                    // if (hash[keys[index][index2]]) {
                    //     img.src = 'http://' + hash[keys[index][index2]] + '/favicon.ico'
                    // }
                    // //因为有字母部分没有给出网址，所以也需要判断是否有网址//
                    // else {
                    //     img.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
                    // }
                    // //可以查询onerror了解用法//
                    // img.onerror = function (e) {
                    //     e.target.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
                    //     return img
                    // }
                    createImg(hash[keys[index][index2]])//由于封装函数creatImg，把上面15行写成下面这里一行即可
                                  
                    // button = document.createElement('button')//创建button//
                    // button.textContent = '编辑'//button上写字为e//
                    // button.id = keys[index][index2]
                    // button.onclick = function (xx) {
                    //     var key = xx['target']['id']//把点击的元素的target的id赋值给key
                    //     var wangzhi = prompt('给我一个网址')
                    //     hash[key] = wangzhi//把你输入的网址（wangzhi）赋值给hash数组里面字母（key）对应的网址(value)
                    //     var img2=xx['target'].previousSibling//把点击的元素也就是button前面的img元素赋值给img2
                    //     img2.src = 'http://' + wangzhi + '/favicon.ico'//修改img2的网址,也就是修改点击前面的img元素的地址
                    //     img2.onerror=function(xxx){
                    //         xxx.target.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
                    //         return img                            
                    //     }
                    //     localStorage.setItem('zzz', JSON.stringify(hash))//把改变的hash存到本地//
                    //     //    xx.target=keys[index][index2]
                    // }
                    createButton(keys[index][index2])//由于封装函数creatButoon，把上面16行写成下面这里一行即可
                   
                    kbd = document.createElement('kbd')//创建一个kbd//
                    // b.textContent(keys[index][index2])
                    // kbd.textContent=keys[index][index2];//kbd遍历//
                    kbd.appendChild(span)
                    kbd.appendChild(img)
                    kbd.appendChild(button)//把button放到kbd里面//
 
                    
                    a.appendChild(kbd);//把kbd放到div里面//
                    a.className = 'row';
                    main1.appendChild(a)
                    
                    index2 = index2 + 1;
                }
                index = index + 1;
            }

        }
            




//封装的创建span元素函数
function createSpan(textContent){
    span = document.createElement('span')
    // span.textContent = keys[index][index2]
    span.textContent = textContent
    span.className = 'text'
    return span
}

//封装的创建img元素函数
function createImg(domain){
    img = document.createElement('img')
    img.className = 'picture'
    // if (textContent) {
    // if (hash[keys[index][index2]]) {
       if (domain) {
        // img.src = 'http://' + hash[keys[index][index2]] + '/favicon.ico'
        img.src = 'http://' + domain + '/favicon.ico'
    }
    //因为有字母部分没有给出网址，所以也需要判断是否有网址//
    else {
        img.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
    }
    //可以查询onerror了解用法//
    img.onerror = function (e) {
        e.target.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
        // return img 这里写不写return img都不影响结果
        }
    return img
}
    
//封装的创建button元素函数
function createButton(id){
    button = document.createElement('button')//创建button//
    button.textContent = '编辑'//button上写字为e//
    // button.id = keys[index][index2]
    button.id = id
    button.onclick = function (xx) {
        var key = xx['target']['id']//把点击的元素的target的id赋值给key
        var wangzhi = prompt('给我一个网址')
        hash[key] = wangzhi//把你输入的网址（wangzhi）赋值给hash数组里面字母（key）对应的网址(value)
        var img2=xx['target'].previousSibling//把点击的元素也就是button前面的img元素赋值给img2
        img2.src = 'http://' + wangzhi + '/favicon.ico'//修改img2的网址,也就是修改点击前面的img元素的地址
        img2.onerror=function(xxx){
            xxx.target.src = 'http:' + '//i.loli.net/2017/11/10/5a05afbc5e183.png'
            // return img  这里写不写return都不影响                          
        }
        localStorage.setItem('zzz', JSON.stringify(hash))//把改变的hash存到本地//
        //    xx.target=keys[index][index2]
    }
    return button
}


// function tag(tagName){
//     return document.createElement(tagName) 
// }//方方老师还用了这个封装函数,但是个人觉得只有一行就没有封装了