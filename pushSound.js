function pushSound() {
  var sounds = ["Quackk", "meow- wait no. Quackkkk!!!!", "quack?", "quaquaquack"]
  var rand = Math.random();
  rand = Math.floor(rand * 4);
  alert(sounds[rand]);
}