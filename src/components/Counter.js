export default function Counter() {
  listen('#increment', 'click', () => {
    const count = document.getElementById('count');
    count.innerText = parseInt(count.innerText) + 1;
  });

  listen('#decrement', 'click', () => {
    const count = document.getElementById('count');
    count.innerText = parseInt(count.innerText) - 1;
  });


  return `
    <p>Count: <span id="count">0</span></p>
    <button id="increment">Increment</button>
    <button id="decrement">Decrement</button>
  `;
}
