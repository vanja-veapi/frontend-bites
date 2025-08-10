import { Card } from "./Card.js";

export class Deck {
    deck = [];

    symbols;
    cardsPerSuit;

    constructor({ symbols = [], cardsPerSuit = 13 }) {
        this.symbols = symbols;
        this.cardsPerSuit = cardsPerSuit;

        this.populateDeck();
    }

    populateDeck() {
        this.deck = [];
        for (let i = 0; i < this.symbols.length; i++) {
            for (let j = 1; j <= this.cardsPerSuit; j++) {
                this.deck.push(new Card({ value: j, symbolIndex: i }));
            }
        }
    }

    // Fisher–Yates shuffle algorithm
    shuffle() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }

    // Koristiti splice umesto shift i pop, jer onda imam vecu fleksibilnost
    drawCard({ count = 1, drawFromTop = true } = {}) {
        if (this.deck.length === 0) {
            throw new DeckError("Deck is empty");
        }

        if (count > this.deck.length) {
            throw new DeckError("Not enough cards");
        }

        return drawFromTop
            ? this.deck.splice(0, count)
            : this.deck.splice(-count);
        // return drawFromTop ? this.deck.shift() : this.deck.pop();
    }

    resetDeck() {
        this.populateDeck();
        this.shuffle();
    }

    get deckList() {
        return [...this.deck];
    }
}

/**
 * TEST CASE
 * 1. Mesati prazan spil
 * 2. Vuci jednu kartu sa vrha i sa dna
 * 3. Probati da se izvuce karta iz praznog spila
 * 4. Vuci 2 ili vise karte sa vrha i sa dna
 * */

class DeckError extends Error {
    constructor(message) {
        super(message);
        this.name = "DeckError";
    }
}
