let tux=document.getElementById('tux');

document.addEventListener('keydown',function(event){
  console.log('Touche enfoncée:',event.key);
  let rect=tux.getBoundingClientRect();
  console.log(rect);
  let d=300;
  let left=rect.left;
  let top=rect.top;
  if(event.key==='ArrowRight'){left+=d;}
  if(event.key==='ArrowLeft' ){left-=d;}
  if(event.key==='ArrowDown' ){top+=d;}
  if(event.key==='ArrowUp'   ){top-=d;}
  tux.style.left=left+"px";
  tux.style.top=top+"px";
  
});