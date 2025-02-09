const input = document.getElementById("input");

function check() {
  let value = input.value.toLowerCase();

  if ((value == "")) {

    alert("Please type something");
    return 0
  }

  const reverse = revstr(value);

  if (value === reverse) {
    alert("PALINDROME");
  } else {
    alert("NOT A PALINDROME");
  }

  input.value = "";
}

function revstr(str) {
  return str.split("").reverse().join("");
}
