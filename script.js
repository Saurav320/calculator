let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let operators = ['+', '-', '*', '/'];

buttons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        let value = e.target.innerText;

        if (value === '=') {
            try {
                string = eval(string);
                input.value = string;
            } catch {
                input.value = "Error";
                string = "";
            }
        }
        else if (value === 'AC') {
            string = "";
            input.value = string;
        }
        else if (value === 'DEL') {
            string = string.slice(0, -1);
            input.value = string;
        }
        else {
            let lastChar = string[string.length - 1];

            //  block multiple operators
            if (operators.includes(value) && operators.includes(lastChar)) {
                return;
            }

            string += value;
            input.value = string;
        }
    });
});
