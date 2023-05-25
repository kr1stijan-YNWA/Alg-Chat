const adjectives = ['Monkey', 'Sanji', 'Goku', 'Pain', 'Roronoa', 'Vegeta', 'Tanjiro', 'Naruto'];
const nouns = ['Luffy', 'Uchiha', 'Kamaboko', 'Lee', 'Guy', 'Uzui', 'Idk', 'he-he'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
