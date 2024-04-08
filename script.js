const form = document.querySelector('.form');
const nameInput = document.querySelector('.nam');
const ageInput = document.querySelector('.old');
const button = document.querySelector('.but');
const list = document.querySelector('.one');
const list_second = document.querySelector('.two');
const list_third = document.querySelector('.third');
const aga = document.querySelector('.aga_one')
const aga_two = document.querySelector('.aga_two')
const aga_third = document.querySelector('.aga_third')

button.onclick = () => {
    function addList(event) {
        event.preventDefault();

        const name = nameInput.value;
        const age = ageInput.value;

        const div = document.createElement("div");
        div.classList.add("frame");

        const innerDiv = document.createElement("div");
        innerDiv.classList.add("hum");

        const heading = document.createElement("h2");
        heading.classList.add("im");
        heading.innerHTML = name;

        const agea = document.createElement("div");
        agea.classList.add("ag");

        const start = document.createElement("p");
        start.classList.add("start");
        start.innerHTML = "Age";

        const end = document.createElement("p");
        end.classList.add("end");
        end.innerHTML = age;

        agea.append(start);
        agea.append(end);

        innerDiv.append(heading);
        innerDiv.append(agea);

        div.append(innerDiv);

        document.body.append(div);

        if (age < 25) {
            aga.append(div);
        } else if (age < 50) {
            aga_two.append(div);
        } else {
            aga_third.append(div);
        }

        nameInput.value = '';
        ageInput.value = '';
    }

    addList(event);
};