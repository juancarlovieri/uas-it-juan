var ans = prompt("Can ducks' feet feel the cold of the water?");
ans = ans.toLowerCase();
document.body.hidden = true;
if (ans == "no") {
  document.body.hidden = false;
} else {
  document.body.innerHTML =
    "<p style='color: blue'>You are not a duck lover, you shall not pass!</p>";
  document.body.style.backgroundColor = "red";
  document.body.hidden = false;
}
