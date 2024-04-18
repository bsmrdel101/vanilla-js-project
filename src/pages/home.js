import Counter from "../components/Counter.js";
import Layout from "../components/Layout.js";


export default function Home() {
  return Layout(`
    <div class="home">
      <h1>Home</h1>
      <p>Welcome to the home page</p>
      <br />
      ${ html(Counter()) }
    </div>
  `);
}
