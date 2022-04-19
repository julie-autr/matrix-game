const cases = document.querySelectorAll('div.case');
document.getElementById("bouton").addEventListener('click',function(){
    document.getElementById("bouton").innerText="Rejouer !";
    for (var i=0;i<cases.length;i++) {
        let nb=Math.random();
        if (nb>0.5){
            cases[i].style.backgroundColor="black";
        }
        else{
            cases[i].style.backgroundColor="white";
        }
     }    
}
)