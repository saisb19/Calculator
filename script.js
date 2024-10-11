let buttons = document.querySelectorAll(".main button");
let input = document.querySelector(".maincontainer input");

buttons.forEach((button) => {
	button.addEventListener("click", () => {
		if (button.textContent === "=") {
			try {
				input.value = eval(input.value);
			} catch (error) {
				input.value = "Error";
			}
		} else if (button.textContent === "C") {
			input.value = "";
		} else {
			input.value += button.textContent;
		}
	});
});
