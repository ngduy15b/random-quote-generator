const btnEl = document.getElementById("btn")

const apiURL = "https://api.api-ninjas.com/v1/quotes?category=happiness";
const apiKey = "U2vu251qFWU2qKHX/3ezbQ==qdnH3V4J3M3N7DmS"
const quoteEl = document.getElementById("quote")
const authorEl = document.getElementById("author")


async function getQuote(){
  btnEl.innerText = "...";
  btnEl.disabled = true;
  fetch(apiURL,{ headers: {'X-Api-Key': 'U2vu251qFWU2qKHX/3ezbQ==qdnH3V4J3M3N7DmS'}})
  .then(response => response.json())
  .then(
    
    json => {console.log(json);
      const quote = json[0].quote;
      quoteEl.innerText = quote;
      const author = json[0].author;
      authorEl.innerText = author;
      btnEl.innerText = "GET A QUOTE";
      btnEl.disabled = false;
    }
  )
  .catch(err => {
    quoteEl.innerText = "...";
    authorEl.innerText = "...";
    btnEl.innerText = "...";
    btnEl.innerText = "GET A QUOTE";
    btnEl.disabled = false;
  });

  
}

btnEl.addEventListener('click', getQuote)