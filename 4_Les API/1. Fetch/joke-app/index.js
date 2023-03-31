const header = document.querySelector("#header");
const subHeader = document.querySelector("#content");

function getJoke() {
    fetch("https://api.blablagues.net/?rub=blagues")
        .then((result) => result.json())

        .then((data) => {
            // console.log(data);   // Voir ce qu'on reçoit
            const content = data.data.content;
            // console.log(content);

            header.textContent = content.text_head;
            subHeader.textContent =
                content.text !== "" ? content.text : content.text_hidden;
        });
}
getJoke();

document.body.addEventListener("click", getJoke);