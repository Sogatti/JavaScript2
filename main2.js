function get_calc(btn) {
  if(btn.value == "=") {
    document.dentaku.display.value = eval(document.dentaku.display.value);
  } else if (btn.value == "AC") {
    document.dentaku.display.value = "";
  } else {
    add_calc = btn.value;
    if (add_calc == "×") {
      add_calc = "*";
    } else if (add_calc == "÷") {
      add_calc = "/";
    }
    const operators = ["+", "-", "*", "/"];
    const display = document.dentaku.display;
    const lastChar = display.value.slice(-1);

    if (operators.includes(lastChar) && operators.includes(add_calc)) {
      return;
    }

    if (add_calc === ".") {

      const tokens = display.value.split(/[\+\-\*\/]/);
      const lastNumber = tokens[tokens.length - 1];

      if (lastNumber.includes(".")) {
        return;
      }
    }
    document.dentaku.display.value += add_calc;
  }

}
