let inputNom = document.getElementById('nom');
let inputLogin = document.getElementById('login');
let inputMail = document.getElementById('mail');
let inputMdp = document.getElementById('mdp');
let inputConf = document.getElementById('confirmation');
inputNom.addEventListener('keyup',function(event) 
{
   console.log('Touche nom relâchée');
   let texte=inputNom.value;
   texte=texte.toLowerCase();
   texte=texte.replace(/[^a-z]/g,'-');
   inputLogin.value=texte;
   let erreur=document.querySelector('#erreur-nom');
   if(/^[a-zA-Z' ]+$/.test(inputNom.value)){erreur.style.opacity=0;}
   else{erreur.style.opacity=1;}
});
inputMail.addEventListener('keyup', function(){
    let errMail=document.getElementById('erreur-mail');
    if(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputMail.value)){errMail.style.opacity=0;}
   else {errMail.style.opacity=1;}
})
inputMdp.addEventListener('keyup', function(event){
    console.log('Touche mot de passe relâchée');
    let errconf=document.getElementById('erreur-confirmation');
    let errMdp=document.getElementById('erreur-mdp');
    if(inputMdp.value.length < 6){errMdp.style.opacity=1;}
    else{errMdp.style.opacity=0;}
    if(inputConf.value !== inputMdp.value){
        errconf.style.opacity=1;
    }
    else{errconf.style.opacity=0;}
})
inputConf.addEventListener('keyup', function(event){
    console.log('Touche confirmation relâchée');
    let errconf=document.getElementById('erreur-confirmation');
    if(inputConf.value !== inputMdp.value){
        errconf.style.opacity=1;
    }
    else{errconf.style.opacity=0;}
})