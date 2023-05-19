const adjectives = ['Arnold', 'Jackie', 'Steven'];
const nouns = ['Chan', 'Schwarzenegger', 'Segal'];

export function getRandomName() {
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length);
    const nounIndex = Math.floor(Math.random() * nouns.length);

    return `${adjectives[adjectiveIndex]} ${nouns[nounIndex]}`;
}
