import { fetchJoke } from "./fetch";
import "./styles/main.scss";

const currentJokeEl = document.querySelector(".current-joke__text");
const loadNewJokeBtn = document.querySelector(".current-joke__generate");

async function loadNewJoke() {
  const joke = await fetchJoke();

  currentJokeEl.innerText = joke;
}

loadNewJokeBtn.addEventListener("click", loadNewJoke);
