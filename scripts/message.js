function showMessage(messageString,time){
    let body = document.createElement('div');
    let message = document.createElement('p');

    body.innerText = String(messageString);
    body.id = "message";
    body.style.width = "500px";
    body.style.height = "40px";
    body.style.position = "fixed !important";
    body.style.transform = "translate3d(26rem,-5rem,0)";
    body.style.backgroundColor = "rgba(65, 212, 198, 100)";
    body.style.boxShadow = "rgba(255, 98, 6,100) 10px 10px";
    body.style.zIndex = 1;

    message.style.paddingTop = "5px";
    message.style.textAlign = "center";

    body.appendChild(message);

    document.getElementsByTagName('body')[0].append(body);

    setTimeout(() => {
        document.getElementById('message').remove();
    }, Number(time));
}