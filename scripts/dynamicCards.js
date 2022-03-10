// dynamicCards.js

const cardData = [
  {
    // CARD 1 //
    cardId: 'card1',
    imgSrc: 'images/tiesto.png',
    imgAlt: 'Tiesto',
    project: 'Tiesto',
    position: `Greatest DJ of All Time 
    by Mix magazine and DjMag`,
    cardP: `
    Tiësto met producer Dennis Waakop 
    Reijers in 1998; the two have worked 
    together extensively since then
    `,
  },
  {
    // CARD 2 //
    cardId: 'card2',
    imgSrc: 'images/armin.png',
    imgAlt: 'Armin van Buuren',
    project: 'Armin Van Buuren',
    position: `Dutch DJ and record 
    producer from Leiden, Holland`,
    cardP: `
    Van Buuren has won a number of 
    accolades. He has been ranked the 
    number one DJ by DJ Mag a record 
    of five times
    `,
  },
  {
    // CARD 3 //
    cardId: 'card3',
    imgSrc: 'images/madeon.png',
    imgAlt: 'Madeon',
    project: 'Madeon',
    position: `Musician, DJ, record 
    producer, singer and songwriter`,
    cardP: `
    The songwriter from Nantes initially 
    came to widespread public attention at 
    17 through a YouTube video, "Pop Culture"
    `,
  },
  {
    // CARD 4 //
    cardId: 'card4',
    imgSrc: 'images/teigom.png',
    imgAlt: 'Teigom',
    project: 'Teigom',
    position: 'Brazilian Dj, singer, songwriter, and Producer',
    cardP: `
    After a 6-year-long carreer in Brazil, Judá Teixeira
    gave up on his Dj dreams and started an ice-cream company
    `,
  },
  {
    // CARD 5 //
    cardId: 'card5',
    imgSrc: 'images/daftpunk.png',
    imgAlt: 'Daft Punk',
    project: 'Daft Punk',
    position: `French electronic music duo`,
    cardP: `
    French electronic music duo formed in 
    1993 in Paris by Guy-Manuel de Homem-Christo 
    and Thomas Bangalter.
    `,
  },
  {
    // CARD 6 //
    cardId: 'card6',
    imgSrc: 'images/hardwell.png',
    imgAlt: 'Hardwell',
    project: 'Hardwell',
    position: `Dutch DJ, record producer and remixer from Breda`,
    cardP: `
    Hardwell was voted the world's number 
    one DJ on DJ Mag in 2013 and again in 2014. 
    He was ranked at number twelve in 2019
    `,
  },
];

function newPortfolioCard(card) {
  return `
<li class='speakers-items' id='${card.cardId}'>
  <div class='speakers-pic'>
    <img src='${card.imgSrc}' alt='${card.imgAlt}'/>
  </div>
  <div class="speakers-info">
    <h4>${card.project}</h4>
    <span>${card.position}</span>
    <div class="speakers-dash">  </div>
    <p>
    ${card.cardP}
    </p>
  </div>
</li>
`;
}

const generateCard = cardData.map((card, key) => {
  const cardContainer = document.createElement('div');
  cardContainer.className = 'card';
  if (key % 2 === 1) {
    cardContainer.classList.add('odd-card');
  }
  cardContainer.innerHTML = newPortfolioCard(card);
  return cardContainer;
});

const portfolio = document.getElementById('Speakers');
const cardQtt = generateCard.length;
for (let i = 0; i < cardQtt; i += 1) {
  portfolio.appendChild(generateCard[i]);
}
