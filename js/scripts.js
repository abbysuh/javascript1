
let userName = prompt("What is your name?");
let favColor = prompt("What is your favorite color in these options? Red, orange, yellow, green, blue, pink, purple, black, white, and grey", "Purple");

switch (favColor.toLowerCase()) {
  case 'red':
    alert(`${userName} - As red as a cherry pie?`);
    break;
  case 'orange':
    alert(`That is very citrusy ${userName}!`);
    break;
  case 'yellow':
    alert(`Please, ${userName}, don't eat the yellow snow...`);
    break;
  case 'green':
    alert(`So ${userName}, are you vegan, environmentally friendly, or do you just like nature?? Maybe... you just like the color green...`);
    break;
  case 'blue':
    alert(`Hey ${userName}! Why so blue?`);
    break;
  case 'pink':
    alert(`Oh ${userName}, you're such a girl!`);
    break;
  case 'purple':
    alert(`Omg ${userName}! Just like my hair... well used to be... :(`);
    break;
  case 'black':
    alert(`What a classic, ${userName}!`);
    break;
  case 'white':
    alert(`So ${userName}... Your favorite color is all the colors?`);
    break;
  case 'grey':
  case 'gray':
    alert(`${userName} - No more shall the righteous cower before evil.`);
    break;
  default:
    alert(`Sorry, ${userName}, please enter a color from the list given.`)
