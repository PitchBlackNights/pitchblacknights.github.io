var working = 1;

var url = location.href;
console.clear();
console.log('url = ' + url);
console.log('working = ' + working);

function checkStatus() {
  console.log('checkStatus() was executed');
  if (working == 1) {
    location.href = 'https://pitchblacknights.github.io/under-construction';
  };
};
checkStatus();
