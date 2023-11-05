var telegram_bot_id = "6434541716:AAEku2XPsDEioboSmpF3oTZ6a6m4FCSqnYM";
var chat_id =  -1001635970016; 
var u_name, email, message;
var ready = function () {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email + "\nIzoh: " + message;
};
var sendtelegram = function () {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    return false;
};


{
    let nameBtn = document.getElementById("name"),
        emailBtn = document.getElementById("email"),
        msg = document.getElementById("message")
        
    const success = document.querySelector(".success"),
        send = document.querySelector(".send"),
        danger = document.querySelector(".danger")

    send.addEventListener("click", () => {
        if (nameBtn.value === '' || emailBtn.value === ''  || msg.value === '') {
            danger.style.display = 'block'
            setTimeout(() => {
                danger.style.display = 'none'
            }, 5000)

        } else {
            success.style.display = 'block'
            setTimeout(() => {
                success.style.display = 'none'
            }, 5000)
        }
    })

}