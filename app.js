console.log('script connected');

const bots = [];

document.querySelector('.bot-form').addEventListener('submit', createBot);

function createBot(e) {
  console.log('create bot');
  e.preventDefault();

  let name = document.getElementById('name-input').value;
  let attack = document.getElementById('attack-input').value;
  let hp = document.getElementById('hp-input').value;

  if (name === '' || attack === '' || hp === '') {
    alert('Form missing data');
  } else {
    let botDisplay = document.querySelector('.bot-display');
    let div = document.createElement('div');

    div.className = 'bot';

    div.innerHTML = `<h3>Name: ${name}</h3>
      <p>Attack: ${attack}</p>
      <p>HP: ${hp}</p>
      <button id="delete-btn">Destroy</button>`;

    div.lastChild.addEventListener('click', removeBot);

    let newBot = {
      name,
      attack,
      hp
    };

    bots.push(newBot);
    botDisplay.appendChild(div);

    document.getElementById('name-input').value = '';
    document.getElementById('attack-input').value = '';
    document.getElementById('hp-input').value = '';
  }
}

function removeBot(e) {
  console.log('remove bot');
  if (e.target.id === 'delete-btn') {
    if (confirm('Are You Sure?')) {
      e.target.parentElement.remove();
    }
  }
}
