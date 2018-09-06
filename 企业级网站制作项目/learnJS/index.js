function add2() {
    let newMember = document.createElement('li');
    let name1 = document.createTextNode('十一');
    newMember.appendChild(name1);
    let member = document.querySelector('.member');
    member.appendChild(newMember);
}
function add1() {
    let newMember = document.createElement('li');
    newMember.innerHTML = '张三';
    let member = document.querySelector('.member');
    member.insertBefore(newMember,member.firstChild);
}
function add3() {
    let newMember = document.createElement('h3');
    newMember.innerHTML = '乐队成员';
    let member = document.querySelector('.member');
    member.parentNode.insertBefore(newMember,member.previousSibling);
}
function add4() {
    let member = document.querySelector('h3');
    member.remove(member);
}


window.onload = function(){
    var link = document.querySelector('.link');
    link.onclick = function(){
        console.log('被点击了')
    };
    link.onmouseover = function(){
        console.log('谁在上面')
    };
    link.onmouseout = function(){
        console.log('谁离开了')
    };
};