'use strcit '
const names = [
  'bag',
  'banana',
  'bathroom',
  'boots',
  'breakfast',
  'bubblegum',
  'chair',
  'cthulhu',
  'dog-duck',
  'dragon',
  'logo',
  'pen',
  'pet-sweep',
  'scissors',
  'shark',
  'sweep',
  'tauntaun',
  'unicorn',
  'water-can',
  'wine-glass'

];

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


const firstImage = document.getElementById('first-image');

const secondImage = document.getElementById('second-image');

const thirdImage = document.getElementById('third-image');

const imagesSection = document.getElementById('images-section');


function BusMall(name) {
  this.name = name;
  this.path = `./img/${name}.jpg`;
  this.votes = 0;
  this.views = 0;
  BusMall.all.push(this);

}

BusMall.all = [];
for (let i = 0; i < names.length; i++) {
  new BusMall(names[i]);
}


let leftImage = getRandomNumber(0, BusMall.all.length - 1);
let middleImage = getRandomNumber(0, BusMall.all.length - 1);
let rightImage = getRandomNumber(0, BusMall.all.length - 1);

function render() {

leftImage = getRandomNumber(0, BusMall.all.length - 1);
 middleImage = getRandomNumber(0, BusMall.all.length - 1);
 rightImage = getRandomNumber(0, BusMall.all.length - 1);

  while (leftImage === middleImage) {
    middleImage = getRandomNumber(0, BusMall.all.length - 1);
  }

  while (rightImage === leftImage || rightImage === middleImage) {
    rightImage = getRandomNumber(0, BusMall.all.length - 1);
  }

  //console.log('first', leftImage, BusMall.all[leftImage].path);
  firstImage.src = BusMall.all[leftImage].path;
  firstImage.title = BusMall.all[leftImage].name;
  firstImage.alt = BusMall.all[leftImage].name;
  BusMall.all[leftImage].views++;


 // console.log('second', middleImage, BusMall.all[middleImage].path);
  secondImage.src = BusMall.all[middleImage].path;
  secondImage.title = BusMall.all[middleImage].name;
  secondImage.alt = BusMall.all[middleImage].name;

  BusMall.all[middleImage].views++;


  //console.log('third', rightImage, BusMall.all[rightImage].path);
  thirdImage.src = BusMall.all[rightImage].path;
  thirdImage.title = BusMall.all[rightImage].name;
  thirdImage.alt = BusMall.all[rightImage].name;

  BusMall.all[middleImage].views++;

} 

imagesSection.addEventListener('click', handleClick);
//firstImage.addEventListener('click', handleClick);
//secondImage.addEventListener('click',handleClick);
//thirdImage.addEventListener('click',handleClick);
let maxClikes = 1;

function handleClick(event) {
  //console.log('Target', event.target.id);
  console.log(maxClikes);
  if ( maxClikes <= 25 ) {
    if (event.target.id === 'first-image') {

      BusMall.all[leftImage].votes++;
      //console.log("Hi");
      maxClikes++;

      render();

    } else if (event.target.id === 'second-image') {
      BusMall.all[middleImage].votes++;
      maxClikes++;

      render();

    } else if (event.target.id === 'third-image') {
      BusMall.all[rightImage].votes++;
      maxClikes++;

      render();
    }
  // render();
    }else {
  
        let btn = document.getElementById('btn');
        btn.addEventListener('click', showResult);
        /*firstImage.removeEventListener('click', handleClick);
        secondImage.removeEventListener('click', handleClick);
        thirdImage.removeEventListener('click', handleClick);*/
      }


  //console.log(BusMall.all);
  //render();
}


function showResult() {

  createChart();

  let list = document.getElementById('listOfItem');
  let result;

  for (let i = 0; i < BusMall.all.length; i++) {

    result = document.createElement('li');
    result.innerHTML = BusMall.all[i].name + ' has ' + BusMall.all[i].votes + ' votes ' + ' and shown' + BusMall.all[i].views + ' times';
    list.appendChild(result);

  }
}


 render();

 function createChart() {
  const ctx = document.getElementById('myChart').getContext('2d');

  const BusMallNames = [];
  const BusMallVotes = [];
  const BusMallViews = [];

  for (let i = 0; i < BusMall.all.length; i++) {
    BusMallNames.push(BusMall.all[i].name);
    BusMallVotes.push(BusMall.all[i].votes);
    BusMallViews.push(BusMall.all[i].views);


  }
  new Chart(ctx, {
    // The type of chart we want to create
    type: 'bar',

    // The data for our dataset
    data: {
      labels: BusMallNames,
      datasets: [
        {
          barPercentage: 0.5,
          // barThickness: 6,
          borderWidth: 5,
          label: '# of votes:',
          backgroundColor: 'rgb(100, 125, 50)',
          borderColor: 'rgb(100, 125, 50)',
          data: BusMallVotes,
        },
        {
          barPercentage: 0.5,
          // barThickness: 6,
          borderWidth: 5,
          label: '# of views:',
          backgroundColor: 'rgb(90, 115, 50)',
          borderColor: 'rgb(90, 115, 50)',
          data: BusMallViews,
        },
      ],
    },

    // Configuration options go here
    options: {},
  });
}