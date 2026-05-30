let cards = [{ word: "Apple", meaning: "سیب" }, { word: "Book", meaning: "کتاب" }];
let currentIndex = 0;
let score = 0;

function showCard() {
    document.getElementById("word").innerText = cards[currentIndex].word;
    document.getElementById("meaning").innerText = cards[currentIndex].meaning;
    document.getElementById("meaning").classList.add("hidden");
}

function toggleMeaning() {
    document.getElementById("meaning").classList.toggle("hidden");
}

function nextCard() { currentIndex = (currentIndex + 1) % cards.length; showCard(); }
function prevCard() { currentIndex = (currentIndex - 1 + cards.length) % cards.length; showCard(); }

function addCard() {
    const word = document.getElementById("newWord").value;
    const meaning = document.getElementById("newMeaning").value;
    if(word && meaning) { cards.push({word, meaning}); alert("اضافه شد!"); }
}

function deleteCard() { cards.splice(currentIndex, 1); currentIndex = 0; showCard(); }

function startQuiz() {
    let guess = prompt(`معنی کلمه ${cards[currentIndex].word} چیست؟`);
    if(guess === cards[currentIndex].meaning) { score++; alert("درست بود!"); } 
    else { alert("اشتباه بود!"); }
    document.getElementById("score").innerText = "امتیاز: " + score;
}

showCard();
