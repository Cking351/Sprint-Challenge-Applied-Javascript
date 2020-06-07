// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
// axios.get('https://lambda-times-backend.herokuapp.com/articles')
//     .then(response => {
//         console.log(response)
//     })
//     .catch(error => {
//         console.log(error)
//     })

    const theMainContainer = document.querySelector('.cards-container')

    function theCreater(headline, authorPhoto, authorName) {
        const cardDiv = document.createElement('div')
        const headlineDiv = document.createElement('div')
        const authorDiv = document.createElement('add')
        const imgDiv = document.createElement('div')
        const image = document.createElement('img')
        const nameSpan = document.createElement('span')


        cardDiv.classList.add('card')
        headlineDiv.classList.add('headline')
        authorDiv.classList.add('author')
        imgDiv.classList.add('img-container')

        theMainContainer.appendChild(cardDiv)
        cardDiv.appendChild(headlineDiv)
        cardDiv.appendChild(authorDiv)
        authorDiv.appendChild(imgDiv)
        imgDiv.appendChild(image)
        authorDiv.appendChild(nameSpan)

        headlineDiv.textContent = headline
        image.src = authorPhoto
        nameSpan.textContent = authorName
        
        return cardDiv
    }

    axios.get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            response.data.articles.javascript.forEach(items => {
                const cbMachine = theCreater(items.headline, items.authorPhoto, items.authorName)
                return cbMachine
            })
            response.data.articles.bootstrap.forEach(items => {
                const cbMachine = theCreater(items.headline, items.authorPhoto, items.authorName)
                return cbMachine
            })
            response.data.articles.technology.forEach(items => {
                const cbMachine = theCreater(items.headline, items.authorPhoto, items.authorName)
                return cbMachine
            })
            response.data.articles.jquery.forEach(items => {
                const cbMachine = theCreater(items.headline, items.authorPhoto, items.authorName)
                return cbMachine
            })
            response.data.articles.node.forEach(items => {
                const cbMachine = theCreater(items.headline, items.authorPhoto, items.authorName)
                return cbMachine
            })
        })
        