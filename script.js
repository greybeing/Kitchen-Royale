const button = document.querySelector('button');

button.onclick = function() {
    let name = prompt('What is your name?');
    alert('Welcome ' + name + ', fill in the form to order your favorite dish');
  }