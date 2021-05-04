window.addEventListener('load',function() {
    var day = document.querySelector('.day');
    var kind = document.querySelector('.kind');
    var date = new Date();
    
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var nextm = date.getMonth() + 2;
    var dates = date.getDate();
    var mdates = date.getDate() + 1;
    var hdates = date.getDate() + 2;

    if(month == 1||month == 3||month == 5||month ==7||month ==8||month == 10) {
        if(dates == 30) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 1 + '日';
        } else if (dates == 31) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + nextm + '月' + 1 + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 2 + '日';
        } else {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + month + '月' + hdates  + '日';
        }
    } else if (month == 4||month == 6||month ==9||month ==11) {
        if(dates == 29) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 1 + '日';
        } else if (dates == 30) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + nextm + '月' + 1 + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 2 + '日';
        } else {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + month + '月' + hdates  + '日';
        }
    } else if (month == 12) {
        if(dates == 30) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + 1 + '月' + 1 + '日';
        } else if (dates == 31) {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + 1 + '月' + 1 + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + 1 + '月' + 2 + '日';
        } else {
            day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
            day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
            day.children[2].innerHTML = "<h3>后天</h3>" + month + '月' + hdates  + '日';
        }
    } else {
        if ((year%4==0 && year%100!=0) || (year%400==0)) {
            if(dates == 28) {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 1 + '日';
            } else if (dates == 29) {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + nextm + '月' + 1 + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 2 + '日';
            } else {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + month + '月' + hdates  + '日';
            } 
        } else {
            if(dates == 27) {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 1 + '日';
            } else if (dates == 28) {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + nextm + '月' + 1 + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + nextm + '月' + 2 + '日';
            } else {
                day.children[0].innerHTML = "<h3>今天</h3>" + month + '月' + dates + '日';
                day.children[1].innerHTML = "<h3>明天</h3>" + month + '月' + mdates  + '日';
                day.children[2].innerHTML = "<h3>后天</h3>" + month + '月' + hdates  + '日';
            }
        }
    }

    var daylis = day.querySelectorAll('li')
    for (var i = 0;i < daylis.length; i++) {
        daylis[i].onclick = function() {
            for (var i = 0;i < daylis.length; i++) {
                daylis[i].className = '';
            }
            this.className = 'current';
        }
    }

    var kind = kind.querySelectorAll('li')
    for (var i = 0;i < kind.length; i++) {
        kind[i].onclick = function() {
            for (var i = 0;i < kind.length; i++) {
                kind[i].className = '';
            }
            this.className = 'current';
        }
    }

    var watch = document.querySelector('.watch');
    var box = document.querySelector('.box');
    var ticket = document.querySelector('.ticket');
    var more = document.querySelector('.more');
    watch.addEventListener('click',function() {
        box.className = 'box rot';
        ticket.className = 'ticket ticketopc';
        more.className = 'moreopc';
    })
    
    var back = document.querySelector('.back');
    back.addEventListener('click',function() {

        box.className = 'box rotback';
        ticket.className = 'ticket';
        more.className = 'more'
    })

    const ptext = document.querySelector('.ptext');
    ptext.innerHTML = ptext.textContent.replace(/\S/g,"<span>$&</span>");

    const letters = ptext.querySelectorAll('span');
    for (let i = 0;i<letters.length;i++) {
        letters[i].addEventListener('mouseover',function() {
            letters[i].classList.add('active');
            letters[i].classList.add('active'+i)

            setTimeout(()=>{
                let letter = document.querySelector('.active'+i)
                letter.classList.remove("active");
                letter.classList.add("show");
            },2000)
        })
    }

})