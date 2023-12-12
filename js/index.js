let p = document.getElementById("dupcard");

// console.log(document.querySelector("main"));

let main = document.querySelector("main");

for (i = 0; i < 8; i++) {
  let p_prime = p.cloneNode(true);
  // console.log(p_prime.childNodes);
  // console.log(p_prime.childNodes[1].childNodes[0]);
  p_prime.childNodes[1].childNodes[0].textContent = `Muffin ${i + 3}`;
  p_prime.childNodes[3].childNodes[1].src = `https://source.unsplash.com/200x200/?pastry,baking?${i}`;
  main.appendChild(p_prime);
}
