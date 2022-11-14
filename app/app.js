const quote = document.getElementById('quotes')
const author = document.getElementById('author')
const nbtn = document.getElementById('nbtn')
const tbtn = document.getElementById('tweet')
let realData;
let quoteData;

const tweet = () => {
    let mytweet = `https://twitter.com/intent/tweet?text=${quoteData.text}`;
    window.open(mytweet);

}
const newQuote = () => {
    let rnum = Math.floor(Math.random()*50)
    quoteData = realData[rnum];
    // console.log(realData[rnum].author)
    quote.innerHTML = `${(quoteData.text)}`
    quoteData.author == null ? author.innerHTML = "unknown": author.innerHTML = `${(quoteData.author)}`
}

const getQuote = async ()=>{
    const api = "https://type.fit/api/quotes";
    try {
        let data = await fetch (api);
        realData = await data.json();
        newQuote()
    } catch (error) {
    }
}
getQuote()
nbtn.addEventListener('click', newQuote)
tbtn.addEventListener('click', tweet)