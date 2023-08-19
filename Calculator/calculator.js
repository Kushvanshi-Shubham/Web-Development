let result = document.getElementById('result');
buttons = document.querySelectorAll('button');
let resultScreen = ""
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonValue = e.target.innerText;
            if (buttonValue == "C"){
                resultScreen= "";
                result.value = resultScreen;
            }
            else if(buttonValue == "="){
                result.value = eval(resultScreen);
            }

            else{
                resultScreen += buttonValue;
                result.value = resultScreen;
            }
            
    })

}

