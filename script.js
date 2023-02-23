const url = "https://api.api-ninjas.com/v1/cocktail?name=";
const config = {
  headers: {
    "X-Api-Key": "F87gqXq513b90DniArT44A==Y0v2S6C0tbBQQHIc",
  },
};

let create = (element, name, container) => {
  const inner = document.createElement(element);
  inner.classList.add(name);
  container.appendChild(inner);
  return inner;
};
const cocktail = document.querySelector(".cocktails");
const form = document.querySelector(".form__box");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const ingredient = event.target.ingredient.value;

  axios
    .get(`${url}${ingredient}`, config)

    .then((cocktails) => {
      let arr = cocktails.data;
      console.log(arr);

      displayCocktails = (cocktails) => {
        const cocktailBox = create("article", "cocktails__box", cocktail);
        const name = create("h3", "cocktails__name", cocktailBox);
        const ingridients = create("ul", "cocktails__ingridients", cocktailBox);
        const instructions = create("p", "cocktails__instruction", cocktailBox);

        name.innerText = cocktails.name;
        ingridients.innerText = cocktails.ingredients;
        instructions.innerText = cocktails.instructions;
      };
      const nodeToRemove = document.querySelectorAll(".cocktails__box");
      nodeToRemove.forEach((cocktails) => cocktails.remove(nodeToRemove));

      arr.forEach((cocktails) => displayCocktails(cocktails));
    })
    .catch(() => {
      if (arr === [""]) {
        alert("not a in the list");
      }
    });
  form.reset();
});
