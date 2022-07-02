console.log('Welcome to Spotify by Pratham');
let index=0;
let seekbar=document.getElementById('seek');
let myAudio=new Audio('music/0.mp3');
let mainPlay=document.getElementById('mainPlay');
let next=document.getElementById('next');
let info=document.getElementById('info');

let songs=[
  {name:"Novo Amor - Anchor",path:"music/0.mp3"},
  {name:"Joji - Slow Dancing in the Dark",path:"music/1.mp3"},
  {name:"Coldplay - Scientist",path:"music/2.mp3"},
  {name:"SYML - Where's my Love",path:"music/3.mp3"},
  {name:"Rence - Baby Blue",path:"music/4.mp3"},
  {name:"Current Joys - A Different Age",path:"music/5.mp3"},
  {name:"Jaden - Photograph",path:"music/6.mp3"},
  {name:"Lumineers - Sleep on the Floor",path:"music/7.mp3"},
];
let n=songs.length;//max songs
mainPlay.addEventListener('click',()=>{
  info.innerText=songs[index].name;
  console.log(info);
  if(myAudio.paused||myAudio.currentTime<=0){
    myAudio.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
  }
  else{
    myAudio.pause();
    mainPlay.classList.remove('fa-pause-circle');
    mainPlay.classList.add('fa-play-circle');
  }
})
myAudio.addEventListener('timeupdate',()=>{
  seek= parseInt((myAudio.currentTime/myAudio.duration)*100);
  seekbar.value=seek;  
})
seekbar.addEventListener('change',()=>{
  myAudio.currentTime=(seekbar.value*myAudio.duration)/100;
})
next.addEventListener('click',()=>{
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');
  if(index==n-1){
    index=0;
  }
  else{
    index+=1;
  }
  myAudio.src = `music/${index}.mp3`;
  myAudio.currentTime=0;
  info.innerText=songs[index].name;
  myAudio.play();
});
prev.addEventListener('click',()=>{
  mainPlay.classList.remove('fa-play-circle');
  mainPlay.classList.add('fa-pause-circle');
  if(index==0){
    index=n-1;
  }
  else{
    index-=1;
  }
  myAudio.src = `music/${index}.mp3`;
  myAudio.currentTime=0;
  info.innerText=songs[index].name;
  myAudio.play();
});
let makeAllPlays=()=>{
  Array.from(document.getElementsByClassName('playsubicon')).forEach((element)=>{
    element.classList.add('fa-play-circle');    
  })
}
Array.from(document.getElementsByClassName('playsubicon')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    index=parseInt(e.target.id);
    // if(!myAudio.paused && index==myAudio.id){
    //   mainPlay.classList.remove('fa-pause-circle');
    //   mainPlay.classList.add('fa-play-circle');  
    //   myAudio.pause();
    //   mainPlay.classList.remove('fa-pause-circle');
    //   mainPlay.classList.add('fa-play-circle');
    // }
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    myAudio.src = `music/${index}.mp3`;
    info.innerText=songs[index].name;
    myAudio.currentTime=0;    
    myAudio.play();
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
  });
});
