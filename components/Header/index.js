// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container
const mainDiv = document.querySelector('.header-container')
function Header() {
  // Create all elements needed for the page
  const subDiv = document.createElement('div')
  const mainSpan = document.createElement('span')
  const h1Title = document.createElement('h1')
  const subspan = document.createElement('span')

  // Assign Classes
  subDiv.classList.add('header')
  mainSpan.classList.add('date')
  subspan.classList.add('temp')

  // Create text content
  mainSpan.textContent = "MARCH 28, 2019"
  h1Title.textContent = 'Lambda Times'
  subspan.textContent = '98°'

  // Append the elements
  subDiv.appendChild(mainSpan)
  subDiv.appendChild(h1Title)
  subDiv.appendChild(subspan)

  return subDiv
}

mainDiv.appendChild(Header())