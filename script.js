const input = document.getElementById("command-input");
const output = document.getElementById("output");

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    let command = input.value;
    output.innerHTML += `Macbook:~ user$ ${command}\n`;
    input.value = "";

    switch (command) {
      case "help":
        output.innerHTML += "Available commands:\n- help\n- date\n- clear\n";
        break;
      case "date":
        output.innerHTML += new Date() + "\n";
        break;
      case "add":
        output.innerHTML += "You can add things here" + "\n";
        break;
      case "edit":
        output.innerHTML += "Hi this is a terminal, but it doesn't really do anything" + "\n";
        break;
      case "clear":
        output.innerHTML = "";
        break;
      default:
        output.innerHTML += "Unknown command\n";
    }
  }
});
