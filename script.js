/* Add your script here */
var input1 = document.getElementById("letter1");
var input2 = document.getElementById("letter2")
var radius = document.getElementById("radius");


console.log(input1.innerText)

$(document).ready(function(){
    $('#roundBtn').click(function(event){
       
    document.getElementById('result').value = (input1.value + input2.value);
    $("#result").css('border-radius',  parseInt(radius.value));
    })
});



    
    
    function changeBG(event){
        if(event.target.innerText == 'V'){
        //var color = event.target.innerText.toLowerCase()
    $('#result').css('background-color', 'violet')}


    else if(event.target.innerText == 'I')
    {
        $('#result').css('background-color', 'indigo');
    }

    else if(event.target.innerText == 'R')
    {
        $('#result').css('background-color', 'red');
        
    }
    else if(event.target.innerText == 'B')
    {
        $('#result').css('background-color', 'blue');
        
    }
    else if(event.target.innerText == 'W')
    {
        $('#result').css('background-color', 'white');
        
    }
    }   


    
