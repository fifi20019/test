window.onload = function(){
    var hou = 2;
    var sec = 60;
    setInterval(function(){
    var a = new Date();
        document.getElementById("timer").innerHTML = hou +" : " + sec ;
        sec--;
        if(sec == 60)
        {
            hou--;
            sec = 60;
            if (hou == 60)
            {
                hou = 2;
            }
        }
        },500);
}

function resetTimer()
{
    
}