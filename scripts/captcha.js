var captcha_field = document.getElementById('captcha')
var captcha_btn = document.querySelector('.btn_captcha')
var submit_btn = document.querySelector('.button')


function generateCaptchaAlphabet(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

var secondCaptchaArray

function isEmpty(obj) {
    return Object.getOwnPropertyNames(obj).length === 1;
}

captcha_btn.innerText = generateCaptchaAlphabet(5)

button.addEventListener("click", () => {
    if (isEmpty(captcha_field.value)) {
        alert("Поле для ввода пустое, потворите попытку")
        return
    }

    if (captcha_field.value === captcha_btn.innerText) {
        alert("Правильно")
    }
    else{
        alert("Неправильно, повторите попытку")
        captcha_btn.innerText = generateCaptchaAlphabet(5)
    }

})





