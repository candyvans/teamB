window.onload = function() {
    var form = document.getElementsByTagName('form')[0];
    //判断注册的时候两次输入的密码是否一样
    var registerBox = form.querySelectorAll('.box');
    var password = registerBox[1].children[0];
    var passwordCheck = registerBox[2].getElementsByTagName('input')[0];
    var pwdWarning = form.querySelector('#pwd-warning');
    var tools = form.getElementsByClassName('tool');
    var toolItems = form.querySelectorAll('input');
    tools[0].addEventListener('click', function() {
        toolItems[0].value = '';
    })
    tools[3].addEventListener('click', function() {
        toolItems[3].value = '';
    })

    for (let i = 1; i <= 2; i++) {
        tools[i].addEventListener('click', function() {
            if (toolItems[i].type == 'password') { toolItems[i].type = 'text'; } else {
                toolItems[i].type = 'password';
            }
        })
    }

    passwordCheck.addEventListener('blur', function() {
        checkPwd(password, passwordCheck, pwdWarning);
    });

    function checkPwd(password, passwordCheck, warning) {
        if (password != '' && passwordCheck != '' &&
            password.value != passwordCheck.value) {
            warning.innerHTML = "两次输入的密码不一致";
        } else {
            warning.innerHTML = "";
        }
    }

    var phoneWarning = form.querySelector('#phone-warning');
    toolItems[3].addEventListener('blur', function() {
            if (toolItems[3].value != '') {
                if (!checkPhone(toolItems[3])) {
                    phoneWarning.innerHTML = '请输入正确的手机号码';
                } else {
                    phoneWarning.innerHTML = '';
                }
            }
        })
        // 判断手机号码是否规范
    function checkPhone(input) {
        let p = input.value;
        // 必须是1开头，第二位数字可以是0-9任意一个，总长为11
        let reg = /^1([0-9])\d{9}$/;
        // 必须是1开头，第二位数字可以是3|5|6|7|8|9任意一个，总长为11
        // let reg = /^1([3|5|6|7|8|9])\d{9}$/;
        if (reg.test(p)) {
            return true;
        } else {
            return false;
        }
    }

}