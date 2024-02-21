const adviceId = document.getElementById("number");
const quote = document.getElementById("quote");
const generatorBtn = document.getElementById("dice-box");

generatorBtn.addEventListener("click", getAdvice);

async function getAdvice() {
  try {
    const data = await fetch("https://api.adviceslip.com/advice");
    if (!data.ok) throw new Error("Failed to fetch data");
    const response = await data.json();

    const id = response.slip.id;
    const advice = response.slip.advice;

    adviceId.textContent = `#${id}`;
    quote.textContent = `"${advice}"`;
  } catch (error) {
    console.log(error.message);
  }
}
