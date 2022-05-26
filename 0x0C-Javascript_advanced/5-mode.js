function changeMode(size, weight, transform, background, color) {
  document.documentElement.style['font-size'] = size;
  document.documentElement.style['font-weight'] = weight;
  document.documentElement.style['text-transform'] = transform;
  document.documentElement.style['background-color'] = background;
  document.documentElement.style['color'] = color;
}

function main() {
  let spooky = changeMode('9','bold', 'uppercase', 'pink', 'green');
  let darkMode = changeMode('12','bold', 'capitalize', 'black', 'white');
  let screamMode = changeMode('12','normal', 'lowercase', 'white', 'black');

  let p = document.createElement('p');
  p.innerHTML = "Welcome Holberton!";
  document.body.appendChild(p);

  let buttonSpooky = document.createElement('button');
  buttonSpooky.type = 'button';
  buttonSpooky.innerText = 'Spooky';
  buttonSpooky.onclick = function() {spooky()};
  document.body.appendChild(buttonSpooky);

  let buttonDarkMode = document.createElement('button');
  buttonDarkMode.type = 'button';
  buttonDarkMode.innerText = 'Dark mode';
  buttonSpooky.onclick = function() {darkMode()};
  document.body.appendChild(buttonDarkMode);

  let buttonScreamMode = document.createElement('button');
  buttonScreamMode.type = 'button';
  buttonScreamMode.innerText = 'Scream mode';
  buttonSpooky.onclick = function() {screamMode()};
  document.body.appendChild(buttonScreamMode);
}

main();
