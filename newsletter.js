
function validGmail() {
    var text= document.getElementById("inputText").value;

    var validationElement = document.getElementById("validation");

    var inputElement = document.getElementById("inputText");

    text = text.toLowerCase();
        if (text.includes("@gmail.com") || text.includes("@yahoo.com")) {
           window.location.href = "news-subscribe.html?text=" + encodeURIComponent(text); 
        }else{
            //inputField.style.backgroundColor = "red";
            //inputField.style.textContent = "Valid email required";

            validationElement.textContent = "Valid gmail required";
            inputElement.style.color = "hsl(4, 100%, 67%)";
            inputElement.style.backgroundColor = "#ffe8e6";

        }
        
}
