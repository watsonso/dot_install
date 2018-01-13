(function(){
  'use strict';

  var higher = document.getElementById('higher');
  var lower = document.getElementById('lower');
  var dealerCard = document.getElementById('dealer_card');
  var playerCard = document.getElementById('player_card');
  var wrapper = document.getElementById('wrapper');
  var result = document.getElementById('result');

  var dealerValue;
  var playerValue;

  function getRandom() {
    return Math.floor(Math.random() * 13 + 1);
  }

  function init() {
    dealerValue = getRandom();
    dealerCard.textContent = dealerValue;
    playerValue = getRandom();
    playerCard.textContent = playerValue;
    wrapper.removeEventListener('transitionend', init)
  }

  function check(guess) {
    var str;
    wrapper.classList.add('open');
    if (playerValue === dealerValue) {
      str = 'draw';
    } else {
      str = 'You ' + getResultStr(guess)
    }
    result.textContent = str;
    result.classList.remove('hidden');
  }

  function getResultStr(guess) {
    if (
      playerValue > dealerValue && guess === 'higher'
      || playerValue > dealerValue && guess === 'lower'
    ) {
      return 'win!';
    } else {
      return 'lose...';
    }
  }

  higher.addEventListener('click', function() {
    check('higher');
  });

  lower.addEventListener('click', function() {
    check('lower');
  });

  dealerCard.addEventListener('click', function() {
    result.classList.add('hidden');
    wrapper.classList.remove('open');
    wrapper.addEventListener('transitionend', init)
  });

  init();
})();
