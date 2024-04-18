import Layout from "../components/Layout.js";


export default function Home() {
  listen('#test-btn', 'click', () => {
    console.log('Button Clicked');
  });
  

  return Layout(`
    <div class="home">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <button id="test-btn">Click Me</button>
    </div>
  `);
}
