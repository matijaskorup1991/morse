let $ = (el) => document.querySelector(el);
let $$ = (el) => Array.from(document.querySelectorAll(el));
let $on = (el, evt, fn) =>
  Array.isArray(el)
    ? el.forEach((o) => $on(o, evt, fn))
    : el.addEventListener(evt, fn);

let morseAlphabet = [
  { letter: '1', morseCode: '.----' },
  { letter: '2', morseCode: '..---' },
  { letter: '3', morseCode: '...--' },
  { letter: '4', morseCode: '....-' },
  { letter: '5', morseCode: '.....' },
  { letter: '6', morseCode: '-....' },
  { letter: '7', morseCode: '--...' },
  { letter: '8', morseCode: '---..' },
  { letter: '9', morseCode: '----.' },
  { letter: '0', morseCode: '-----' },
  { letter: ' ', morseCode: '    ' },
  { letter: 'A', morseCode: '.-' },
  { letter: 'B', morseCode: '-...' },
  { letter: 'C', morseCode: '-.-.' },
  { letter: 'D', morseCode: '-..' },
  { letter: 'E', morseCode: '.' },
  { letter: 'F', morseCode: '..-.' },
  { letter: 'G', morseCode: '--.' },
  { letter: 'H', morseCode: '....' },
  { letter: 'I', morseCode: '..' },
  { letter: 'J', morseCode: '.---' },
  { letter: 'K', morseCode: '-.-' },
  { letter: 'L', morseCode: '.-..' },
  { letter: 'M', morseCode: '--' },
  { letter: 'N', morseCode: '-.' },
  { letter: 'O', morseCode: '---' },
  { letter: 'P', morseCode: '.--.' },
  { letter: 'Q', morseCode: '--.-' },
  { letter: 'R', morseCode: '.-.' },
  { letter: 'S', morseCode: '...' },
  { letter: 'T', morseCode: '-' },
  { letter: 'U', morseCode: '..-' },
  { letter: 'V', morseCode: '...-' },
  { letter: 'W', morseCode: '.--' },
  { letter: 'X', morseCode: '-..-' },
  { letter: 'Y', morseCode: '-.--' },
  { letter: 'Z', morseCode: '--..' },
];

function morseCode(el) {
  let res = '';
  morseAlphabet.map((obj) =>
    obj.letter === el.toUpperCase() ? (res = obj.morseCode) : ''
  );

  return res;
}

function createWord() {
  let res = [];
  let inputData = $('input').value;
  let data = inputData.split('');

  for (let i = 0; i < data.length; i++) {
    res.push(morseCode(data[i]));
  }
  console.log(res.join(''));
  return res.join('');
}

function renderMorseCode() {
  if ($$('aside div').length) {
    return;
  } else {
    return morseAlphabet.map((el) => {
      return ($(
        'aside'
      ).innerHTML += `<div class="morse">${el.letter}: ${el.morseCode}</div>`);
    });
  }
}

$on($('button'), 'click', (e) => {
  $('aside').style.display = 'block';
  renderMorseCode();
  $('.result').innerHTML = createWord();
});
