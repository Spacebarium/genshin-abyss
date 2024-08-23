fetch("https://api.ambr.top/v2/en/monster")
    .then(response => response.json())
    .then(data => {
        // let copiedItems = {};
        data = data.data.items;
        for (const key in data) {
            // setTimeout(getMonsterData(key), 1000);

            const newParagraph = document.createElement("p");
            const newContent = document.createTextNode(`${key}, ${data[key].name}`);
            newParagraph.appendChild(newContent);
            document.body.appendChild(newParagraph);
        }
        // console.log(copiedItems)
    })