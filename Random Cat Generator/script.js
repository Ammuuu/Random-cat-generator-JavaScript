const URL = "https://api.thecatapi.com/v1/images/search";

window.onload = () => document.getElementById('generate').addEventListener('click', generateCat);

let generateCat = () => {
    let catPromise = fetch(URL);
    let response = catPromise.then(response => response.json());

    response.then(data => {
        let tag = document.createElement("img");
        tag.style.height = "300px";
        tag.style.width = "300px";
        tag.style.margin = "10px";
        tag.style.boxShadow = "0px 10px 50px rgba(0, 0, 0, 0.7)";

        tag.src = data[0].url;
        document.getElementById('results').appendChild(tag);
    })
}