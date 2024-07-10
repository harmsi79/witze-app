const API = "https://witzapi.de/api/joke";

export async function fetchJoke() {
  const res = await fetch(API);

  const data = await res.json();

  return data[0].text;
}
