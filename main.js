const first = document.querySelector('#number1');
const second = document.querySelector('#number2');

const result = document.querySelector('.result');



if (window.Worker) {
  const wW = new Worker("worker.js");

  first.onchange = () => {
    wW.postMessage([first.value, second.value]);
    console.log('meesage sent', [first.value, second.value]);
  };

  second.onchange = () => {
    wW.postMessage([first.value, second.value]);
    console.log('message sent from second value');
  }

  wW.onmessage = e => {
    console.log(e);
    result.innerHTML = "<div>" + e.data + "</div>";
  };

} else {
  console.log('No web worker supported');
}

