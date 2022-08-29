function setTheme(themeName){
     localStorage.setItem('theme', themeName);
     document.documentElement.className = themeName

}

function toggleTheme(){
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light');
    } else{
        setTheme('theme-dark');
    }
   
}

(function (){
    if (localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-dark');
    } else{
        setTheme('theme-light')
    }
})();



const display = document.getElementById('current-display');
const buttons = document.getElementsByTagName('button');

for (const button of buttons ){
    button.addEventListener("click", displayy)
    function displayy(){
         
        if (button.id == 'clear'){
            display.innerText = '';
        } else if (button.id == 'b'){
           let string = display.innerText.toString();
           display.innerText = string.slice(0, -1);
        }else if (display.innerText != '' && button.id == 'equal'){
            display.innerText = eval(display.innerText);
            
        }else if (display.innerText == '' && button.id == 'equal'){
            display.innerText = 'Empty!';
        }else {
            display.innerText += button.id;
        }
        
        
       // console.log(display.innerText)
    }
}
/*
buttons.forEach((item) => {
    item.onclick = ()=> {
        if (item.id == 'clear'){
            display.innerText = '';
        } else if (item.id == 'backspace'){
            let string = display.innerText.toString();
            display.innerText = string.substring(0, string.length - 1);
        }else if (display.innerText != '' && item.id == 'equal'){
            display.innerText = eval(display.innerText);
            
        }else if (display.innerText == '' && item.id == 'equal'){
            display.inneText = 'Empty!';
        }else {
            display.inneText += item.id;
        }
    }    
})*/