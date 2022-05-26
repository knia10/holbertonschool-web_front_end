function createElement(data);
let paragraph = document.createElement('p');
let textP = document.createTextNode(data);
paragraph.appendChild(textP);
document.body.appendChild(paragraph);

function queryWikipedia(callback) {
  let getArticle = new XMLHttpRequest();
  getArticle.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true)
  getArticle.onreadystatechange = function(aevt) {
    if (getArticle.readyState == 4) {
      if (getArticle.status == 200) {
        callback(JSON.parse(getArticle.responseText).query.pages[21721040].extract)
      }
    }
  }
  getArticle.send()
}
queryWikipedia(createElement);
