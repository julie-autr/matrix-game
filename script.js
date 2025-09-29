const cases = document.querySelectorAll('div.case');

var jeuActif = false;
var compteurcoups=0;

document.getElementById("affichageScore").style.display = 'none';
document.getElementById("victoire").style.display = 'none';

document.getElementById("bouton").addEventListener('click',function(){
    jeuActif = true;
    compteurcoups=0;
    document.getElementById("victoire").style.display = 'none';
    document.getElementById("victoire").innerText='';
    document.getElementById("bouton").innerText="Rejouer";
    for (var i=0;i<cases.length;i++) {
        let nb=Math.random();
        if (nb>0.5){
            cases[i].setAttribute('state', 'on');
        }
        else{
            cases[i].setAttribute('state', 'off');
        } 
    } 
}
);


function changecolor(i){ //i est l'indice dans la liste
    if (cases[i].getAttribute('state')=='off'){
        cases[i].setAttribute('state', 'on');
    }
    else if (cases[i].getAttribute('state')=='on'){
        cases[i].setAttribute('state', 'off');
    }
};

var meilleurscore=100;

function testvictoire(coups){
    compteur=0;
    for (var i=0;i<cases.length;i++) {
        if (cases[i].getAttribute('state')=='off'){compteur+=1;}
    };
    if (compteur==9){
        jeuActif = false; 
        if (coups<meilleurscore){
            meilleurscore=coups;
            document.getElementById("victoire").style.display = 'flex';
            document.getElementById("victoire").innerText='Bravo ! Vous avez gagné en '+coups+' coups ! C\'est votre meilleur score !';
            document.getElementById("score").innerText=coups;
            document.getElementById("affichageScore").style.display = 'flex';
        }
        else {
            document.getElementById("victoire").style.display = 'flex';
            document.getElementById("victoire").innerText='Bravo ! Vous avez gagné en '+coups+' coups ! Rejouez pour battre votre score !';
        }
    }

}



const liste=Array.from(cases)
for (var i=0;i<cases.length;i++){
    cases[i].addEventListener('click',function(event){
        if(!jeuActif) return;

        const target = event.target;
        var indice=liste.indexOf(target);
        console.log(event, target, cases, liste, indice)
        var parent=target.parentElement;
        compteurcoups+=1;

        changecolor(indice)
        if (parent.className=='colonne1'){
            changecolor(indice+3);
            if (indice==0||indice==3||indice==6){
                changecolor(indice+1);
            }
            else if (indice==1||indice==4||indice==7){
                changecolor(indice+1);
                changecolor(indice-1);
            }
            else if (indice==2||indice==5||indice==8){
                changecolor(indice-1);
            }
            }
        else if (parent.className=='colonne3'){
            changecolor(indice-3);
            if (indice==0||indice==3||indice==6){
                changecolor(indice+1);
            }
            else if (indice==1||indice==4||indice==7){
                changecolor(indice+1);
                changecolor(indice-1);
            }
            else if (indice==2||indice==5||indice==8){
                changecolor(indice-1);
            }
        }
        else if (parent.className=='colonne2'){
            changecolor(indice-3);
            changecolor(indice+3);
            if (indice==0||indice==3||indice==6){
                changecolor(indice+1);
            }
            else if (indice==1||indice==4||indice==7){
                changecolor(indice+1);
                changecolor(indice-1);
            }
            else if (indice==2||indice==5||indice==8){
                changecolor(indice-1);
            }
        }
        testvictoire(compteurcoups);
    })
};

  