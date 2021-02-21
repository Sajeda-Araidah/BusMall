'use strcit '
const  names =[
    'bag',
 'banana',
 'bathroom',
    'boots',
    'breakfast',
    'bubblegum',
    'chair',
    'cthulhu',
    'dog-guck',
    'dragon',
 'pen',
'pet-sweep',
'scissors',
'shark',
'sweep',
'tauntaun',
'unicorn',
'usb',
'water-can',
'wine-glass'

];
function getRrandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

const firstImage=document.getElementById('first-image');

const secondImage=document.getElementById('second-image');
console.log('first-image');
const thirdImage =document.getElementById('third-image');

const imagesSection = document.getElementById('images-section');


function BusMall(name){
this.name ;
this.path ='./img/${name}.jpg';
this.votes = 0 ;
this.views = 0 ;
BusMall.all.push(this);

}

BusMall.all=[];
for (let i=0 ;i<names.length;i++){
   new  BusMall(names[i]);
}
console.table(BusMall.all);

function  Render(){
  const firstImage= getRrandomNumber (0,BusMall.length-1) ; 
  console.log('first', leftIndex, BusMall.all[firstImage].path);
  firstImage.src=BusMall.all[firstImage].path;
  firstImage.title=BusMall.all[firstImage].name;
  firstImage.alt=BusMall.all[firstImage].name;

  const secondImage= getRrandomNumber (0,BusMall.length-1) ; 
  console.log('second', leftIndex, BusMall.all[secondImage].path);
  secondImage.src=BusMall.all[secondImage].path;
  secondImage.title=BusMall.all[secondImage].name;
  secondImage.alt=BusMall.all[secondImage].name;

  const thirdImage= getRrandomNumber (0,BusMall.length-1) ; 
  console.log('third', leftIndex, BusMall.all[thirdImage].path);
  thirdImage.src=BusMall.all[thirdImage].path;
  thirdImage.title=BusMall.all[thirdImage].name;
  thirdImage.alt=BusMall.all[thirdImage].name;

}
imagesSection.addEventListener('click', handleClick);

function handleClick(event) {
    console.log('Target', event.target.id);
    if (event.target.id !== 'images-section') {
      for (let i = 0; i < BusMall.all.length; i++) {
        if (BusMall.all[i].name === event.target.title) {
          BusMall.all[i].votes++; 
        }
      }
      console.log(BusMall.all);
      Render();
    }
  }


Render();