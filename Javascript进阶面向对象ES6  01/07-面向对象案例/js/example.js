/*
 * @Author: your name
 * @Date: 2020-07-29 23:37:18
 * @LastEditTime: 2020-08-01 16:22:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\6. Javascript   进阶面向对象ES6\Javascript进阶面向对象ES6  01\07-面向对象案例\js\example.js
 */ 
/*
 *                   ___====-_  _-====___
 *             _--^^^#####//      \\#####^^^--_
 *          _-^##########// (    ) \\##########^-_
 *         -############//  |\^^/|  \\############-
 *       _/############//   (@::@)   \############\_
 *      /#############((     \\//     ))#############\
 *     -###############\\    (oo)    //###############-
 *    -#################\\  / VV \  //#################-
 *   -###################\\/      \//###################-
 *  _#/|##########/\######(   /\   )######/\##########|\#_
 *  |/ |#/\#/\#/\/  \#/\##\  |  |  /##/\#/  \/\#/\#/\#| \|
 *  `  |/  V  V  `   V  \#\| |  | |/#/  V   '  V  V  \|  '
 *     `   `  `      `   / | |  | | \   '      '  '   '
 *                      (  | |  | |  )
 *                     __\ | |  | | /__
 *                    (vvv(VVV)(VVV)vvv)
 * 
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 * 
 *                神兽保佑            永无BUG
 */

/*
 * @Author: Baron
 * @Date: 2020-07-29 23:37:18
 * @LastEditTime: 2020-07-29 23:37:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \暑期前端培训\6. Javascript   进阶面向对象ES6\Javascript进阶面向对象ES6  01\example.js
 */ 

 let that
class Tab {
    constructor(id) {
        // 获取元素
        that = this
        this.main = document.querySelector(id)
        this.tab = this.main.querySelector('.tabadd')
        this.ul = this.main.querySelector('.fisrstnav ul:first-child')
        this.fsection = this.main.querySelector('.tabscon')
        this.init()
    }

    // 0. 页面初始化
    init() {
        // 相关元素绑定事件
        this.updateNode()
        this.tab.onclick = this.addTab
        for(let i = 0;i<this.lis.length;i++) {
            this.lis[i].index = i
            this.lis[i].onclick = this.toggleTab
            this.remove[i].onclick = this.removeTab
            this.spans[i].ondblclick = this.editTab
            this.sections[i].ondblclick = this.editTab
        }
    }

    updateNode() {
        this.lis = this.main.querySelectorAll('li')
        this.sections = this.main.querySelectorAll('section')
        this.remove = this.main.querySelectorAll('.icon-guanbi')
        this.spans = this.main.querySelectorAll('.fisrstnav li span:first-child')
    }

    //1.切换功能
    toggleTab() {                                                                                                                                                                       
        // console.log(this.index);
        that.clearClass() 
        this.className = 'liactive'
        that.sections[this.index].className = 'conactive'
    }
    //清除类样式
    clearClass() {
        for (let i = 0; i < this.lis.length; i++) {
            this.lis[i].className = ''
            this.sections[i].className = ''
        }
    }
    //2.添加功能
    addTab() {                                                              
        //  console.log('Baron');
        that.clearClass()
        let li = '<li class="liactive"><span>选项卡</span><span class="iconfont icon-guanbi"></span></li>'
        that.ul.insertAdjacentHTML('beforeend',li)
        let section = '<section class="conactive">内容</section>'
        that.fsection.insertAdjacentHTML('beforeend',section)
        that.init()
    }
    //3.删除功能
    removeTab(e) {
        e.stopPropagation()
        let index = this.parentNode.index
        console.log(index)
        that.lis[index].remove()
        that.sections[index].remove()
        that.init()
        if(document.querySelector('.liactive')) return
        index--
        that.lis[index] && that.lis[index].click();

    }
    //4.修改功能
    editTab() {
        let str = this.innerHTML
        console.log(str);
        // 双击禁止选定文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        this.innerHTML = `<input type="text"/>`
        let input = this.children[0]
        input.value = str
        input.select()   // 文本框里的文字处于选定状态
        input.onblur = function() {
            this.parentNode.innerHTML = this.value
        }
        input.onkeyup = function(e) {
            if(e.keyCode === 13) {
                this.blur()
            }
        }

    }

    
}
let s4 = [1,2,3]
s4.forEach((value,index,arr) => {
    if(value == 3){

        console.log(index);
    }
    console.log(arr);
})

new Tab('#tab')