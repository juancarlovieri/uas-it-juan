var ans = prompt("Can ducks' feet feel the cold of the water?");
ans = ans.toLowerCase();
document.body.hidden = true;
if (ans == "no") {
  document.body.hidden = false;
}