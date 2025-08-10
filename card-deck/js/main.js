import { Deck } from "./Deck.js";
import { SYMBOLS } from "./Card.js";

const deck = new Deck({ symbols: SYMBOLS });
const CARDS_PER_DECK = deck.deckList.length;

window.addEventListener("load", () => {
    const container = document.querySelector(".container");

    for (let i = 0; i < CARDS_PER_DECK; i++) {
        const card = createCard(deck.deckList[i]);
        container.appendChild(card);
    }

    for (let i = 0; i < 55; i++) {
        const drawnCards = deck.drawCard();
        console.log({ deckList: deck.deckList, drawnCards });
    }
});

const createCard = (c) => {
    const card = document.createElement("div");
    card.classList.add("card", `suit-${c.symbol}`);

    const span = document.createElement("span");
    span.classList.add(
        "flex-center",
        ["hearts", "diamonds"].includes(c.symbol) ? "red" : "black"
    );

    span.textContent = c.display;
    card.appendChild(span);

    return card;
};
