// top players 
const topPlayer = document.getElementById('players');
topPlayer.style.color = 'rgba(255, 99, 71, 0.88)';

const players = document.getElementsByClassName('player');
for (const player of players) {
    player.style.backgroundColor = 'lightblue';
    player.style.padding = '15px'
    player.style.borderRadius = '5px';
}

// top blogs 
const topBlog = document.getElementById('blogs');
topBlog.style.color = 'rgba(255, 99, 71, 0.88)';

// top course 
const topCourse = document.getElementById('course');
topCourse.style.color = 'rgba(255, 99, 71, 0.88)';


// todo section 
document.getElementById('programming').style.color = 'purple';

document.getElementById('add-btn').addEventListener('click', function () {
    const inputField = document.getElementById('input');
    const inputValue = inputField.value;
    const listItem = document.createElement('li');
    listItem.innerText = inputValue;
    listItem.className = 'list-group-item';

    const ulList = document.getElementById('list-ul');

    ulList.appendChild(listItem);
    console.log(listItem);

    // clear input field 
    inputField.value = '';

});



// counter number 
function updateCount(isIncreasing) {
    const counter = document.getElementById('count');
    let counterNumber = parseInt(counter.innerText);
    if (isIncreasing) {
        if (counterNumber < 5) {
            counterNumber = counterNumber + 1;
        }
    } else if (counterNumber > 0) {
        counterNumber = counterNumber - 1;
    }

    counter.innerText = counterNumber;
}
//  increament 
document.getElementById('plus').addEventListener('click', function () {
    updateCount(true);
});

// decreament 
document.getElementById('minus').addEventListener('click', function () {
    updateCount(false);
});