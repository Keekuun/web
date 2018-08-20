function login(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user_re = /^(0?(13|14|15|17|18|19)[0-9]{9})|(\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14})$/;
    var pass_re = /\w{9,}/;
    if(!username){
        alert("用户名不能为空！");
    }
    else if (!user_re.test(username)){
        alert("用户名输入错误！");
    }
    else if(!password){
        alert("密码不能为空！");
    }
    else if (!pass_re.test(password)){
        alert("密码输入错误！");
    }
    else{
        alert("Hello!"+username)
    }
}