document.addEventListener("DOMContentLoaded", function() {
    let message = document.querySelector(".message");
    let text = message.innerText;
    message.innerText = "";
    
    let index = 0;
    function typeWriter() {
        if (index < text.length) {
            message.innerText += text.charAt(index);
            index++;
            setTimeout(typeWriter, 50);
        }
    }
    
    typeWriter();
});