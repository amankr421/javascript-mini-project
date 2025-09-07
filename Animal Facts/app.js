let btn = document.querySelector("button");
let select = document.querySelector("#animal");
let factBox = document.querySelector("#fact");

btn.addEventListener("click", async () => {
  let animal = select.value;
  let url = `https://some-random-api.com/facts/${animal}`;

  try {
    let res = await axios.get(url);
    factBox.innerText = res.data.fact;

    //background
    setAnimalBackground(animal);
  } catch (e) {
    factBox.innerText = "No fact found!";
  }
});

function setAnimalBackground(animal) {
  let bgUrl = `images/${animal}.jpg`; 
  document.body.style.background = `url(${bgUrl}) no-repeat center center/cover`;
}

// Default background on page load
setAnimalBackground("cat");
