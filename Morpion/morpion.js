let tds=document.querySelectorAll('td');
for(let i=0;i<tds.length;i++)
{
    tds[i].addEventListener('click',function (event) 
{
    if (this.textContent===''){
    this.style.fontSize=100+'px';
    this.textContent=joueur;
    if (joueur==='X'){
    joueur='O';
    } 
    else{
    joueur='X';
    }
}
});
}
let joueur='X';