async function getPrice() {
    console.log("fetching page...");
    const site = document.getElementById('pageUrl').value;
    console.log(site);

    await fetch(`https://cors-anywhere.herokuapp.com/${site}`, {
        method: 'GET',
        mode: 'cors',
    })
    .then((response) => {
        return response.text();
        console.log(response);
    })
    .then((html) => {
        var parser = new DOMParser();
        let doc = parser.parseFromString(html, "text/html");
        console.log(doc);

        const price = 
        doc.querySelector('.a-price-symbol').textContent+
        doc.querySelector('.a-price-whole').textContent+
        doc.querySelector('.a-price-fraction').textContent;
        const img_src = doc.querySelector('#landingImage').src;
        const img_alt = doc.querySelector('#landingImage').alt;

        document.querySelector("#productImage").src = img_src;
        document.querySelector("#productImage").alt = img_alt;
        document.querySelector("#productName").textContent = img_alt;
        document.querySelector("#productPrice").textContent = price;
    })
    .catch((err) => console.log(err))
}