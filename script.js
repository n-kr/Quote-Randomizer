const quotes = [
    "\"Logic will get you from A to B. Imagination will take you everywhere.\"<br> - Albert Einstein",
    "\"A dreamer is one who can only find his way by moonlight, and his punishment is that he sees the dawn before the rest of the world.\"<br> - Oscar Wilde",
    "\"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.\"<br> - Henry Ford",
    "\"This world is but a canvas to our imagination.\"<br> - Henry David Thoreau",
    "\"Patience is bitter, but its fruit is sweet.\"<br> - Jean-Jacques Rousseau",
    "\"It does not matter how slowly you go as long as you do not stop.\"<br> - Confucius",
    "\"Tell me and I forget. Teach me and I remember. Involve me and I learn.\"<br> - Benjamin Franklin",
    "\"Pleasure in the job puts perfection in the work.\"<br> - Aristotle",
    "\"Look up at the stars and not down at your feet. Try to make sense of what you see, and wonder about what makes the universe exist. Be curious.\"<br> - Stephen Hawking",
    "\"It is not in the stars to hold our destiny but in ourselves.\"<br> - William Shakespeare"
];

function changeQuote() {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    document.getElementById("display").innerHTML = quote;
};