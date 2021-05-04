window.onload = function() {
    var inputs = document.querySelectorAll('input');
    var inputLen = inputs.length;
    for (let i = 0; i < inputLen; i++) {
        inputs[i].addEventListener('focus', function() {
            this.parentNode.classList.add('focus');
        });
        inputs[i].addEventListener('blur', function() {
            if (this.value == '') {
                this.parentNode.classList.remove('focus');
            }
        });
    }
}