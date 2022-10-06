let typingArea = document.getElementById('randomText');
let userInput = document.getElementById('userInput');
let userInputQ = document.querySelector('#userInput');
let letter = document.getElementsByClassName('letter');
let score = document.getElementById('popup');
let focus = document.getElementById('focus');
let blur = document.getElementById('blur');
let acc = document.getElementById('acc');
let timeElement = document.getElementById('time');
let wpm = document.getElementById('wpm');
let firstCursor = document.getElementById('first-cursor');

const Quotes = ["It's nice to be important, but it's more important to be nice!",
    "If you don't prioritize your life, someone else will.",
    "What you seek is seeking you.",
    "Impossible is just a big word thrown around by small men and women who find it easier to live in the world they've been given than to explore the power they have to change it.",
    "The struggle ends when the gratitude begins.",
    "It is possible to commit no mistakes and still lose. That is not a weakness; that is life.",
    "You can't be paralyzed by fear of failure or you will never push yourself.",
    "When the whole world is silent, even one voice becomes powerful.",
    "Some of us think holding on makes us strong, but sometimes it is letting go.",
    "Always focus on how far you've come, not how far you have to go.",
    "If you get tired, learn to rest, not to quit.",
    "If you want to find happiness, find gratitude.",
    "Always do your best. What you plant now, you will harvest later.",
    "Acknowledging the good that you already have in your life is the foundation for all abundance.",
    "You often feel tired, not because you've done too much, but because you've done too little of what sparks a light in you.",
    "Powerful avalanches begin with small shifts.",
    "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "Fear leads to self-doubt which is the worst enemy of creativity.",
    "Be who you are and say what you feel, because those who mind don't matter and those who matter don't mind.",
    "Learn to love slow progress. Learn to forgive yourself for the inevitable backsliding. And of course, expect to be uncomfortable along the way.",
    "Mystery creates wonder and wonder is the basis of our desire to understand.",
    "Every day of our lives, we are on the verge of making those slight changes that would make all the difference.",
    "Not everything that can be counted counts. Not everything that counts can be counted",
    "Champions aren’t made in the gyms. Champions are made from something they have deep inside them—a desire, a dream, a vision.",
    "Do what you love, not what you think you're supposed to do.",
    "Be thankful for what you have; you'll end up having more. If you concentrate on what you don't have, you will never, ever have enough.",
    "Ask yourself, who do you want to be? Figure out for yourself what makes you happy, no matter how crazy it may sound to other people.",
    "There is no duty we so much underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.",
    "Let your hopes, not your hurts, shape your future.",
    "Forgive yourself for your faults and your mistakes and move on.",
    "If you want to fly, you have to give up everything that weighs you down.",
    "It is not uncommon for people to spend their whole life waiting to start living.",
    "Do fewer things. Do them better. Know why you're doing them.",
    "Nothing can dim the light which shines from within.",
    "Within you is a stillness and a sanctuary to which you can retreat at any time and be yourself.",
    "Nothing is particularly hard if you divide it into small jobs.",
    "Our greatest weapon against stress is our ability to choose one thought over another.",
    "If you want to go fast, go alone. If you want to go far, bring others along.",
    "Be kind whenever possible. It is always possible.",
    "Rise above the storm and you will find the sunshine.",
    "Decide whether or not the goal is worth the risks involved. If it is, stop worrying.",
    "A champion is defined not by their wins, but by how many times they recover when they fall.",
    "With the new day comes new strength and new thoughts.",
    "You can be happy or you can be unhappy. It's just according to the way you look at things.",
    "What you do matters, but why you do it matters much more.",
    "You will get all you want in life if you help enough other people get what they want.",
    "When feeling overwhelmed by a faraway goal, repeat the following: I have it within me right now, to get me to where I want to be later.",
    "Do no harm, but take no crap.",
    "It's kind of fun to do the impossible.",
    "The reason why people give up so fast is because they tend to look at how far they still have to go, instead of how far they have gotten.",
    "Choose your heroes or they will be chosen for you.",
    "The penalty for procrastination is the loss of hopes and dreams.",
    "Unless you try to do something beyond what you have already mastered you will never grow.",
    "Change is the essence of life; be willing to surrender what you are for what you could become.",
    "Forget all the reasons why it won't work and believe the one reason why it will.",
    "I have had lots of troubles in my life, most of which never happened.",
    "You have power over your mind, not outside events. Realize this, and you will find strength.",
    "You don’t learn to walk by following rules. You learn by doing, and by falling over.",
    "Excuses are the rocks where our dreams are crushed.",
    "Always be yourself, express yourself, have faith in yourself. Do not go out and look for a successful personality and duplicate it.",
    "Time you enjoy wasting is not wasted time.",
    "Opportunities to find our deeper powers come when life seems most challenging.",
    "If you want to look good in front of thousands, you have to outwork thousands in front of nobody.",
    "What gets measured gets managed.",
    "If you stumble make it part of the dance.",
    "A goal without a plan is only a wish.",
    "If you keep on doing what you've always done, you will keep getting what you've always gotten.",
    "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The secret to your success is found in your daily routine.",
    "Be weird, be transparent, be authentic, be yourself.",
    "A little nonsense now and then is relished by the wisest people.",
    "Don't blame others as an excuse for you not working hard enough.",
    "We may encounter many defeats but we must not be defeated.",
    "Somewhere, something incredible is waiting to be known.",
    "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "The best teachers are those who show you where to look, but don't tell you what to see.",
    "Instead of wondering when your next vacation is, maybe you should set up a life you don't need to escape from.",
    "Dude, suckin' at something is the first step to being sorta good at something.",
    "Why fit in when you were born to stand out?",
    "Mistakes are the portals of discovery.",
    "Spend more time smiling than frowning and more time praising than criticizing.",
    "If you focus on what you left behind, then how can you see what lies ahead?"
];

/**
 * splits quote into spans of letters and words
 * @param {string} quote
 */
const splitQuote = (quote) => {
    let wrds = quote.split(' ');
    let size = wrds.length;
    let result = ``;
    let temp = ``;
    for (let i = 0; i < size; i++) {
        let wrdSize = wrds[i].length;
        if (i == 0) { // first word : activeWord and i-cursor
            // temp += `<span>&nbsp;</span>`
            for (let j = 0; j < wrdSize; j++) {
                temp += `<span class="letter">${wrds[i][j]}</span>`;
            }
            result += `<span class="word activeWord">${temp}</span><span class="letter"> </span>`;
            temp = ``;
        }
        else if (i === size - 1) { // last word : no space in the end
            for (let j = 0; j < wrdSize; j++) {
                temp += `<span class="letter">${wrds[i][j]}</span>`;
            }
            result += `<span class="word">${temp}</span>`;
            temp = ``;
        }
        else {
            for (let j = 0; j < wrdSize; j++) {
                temp += `<span class="letter">${wrds[i][j]}</span>`;
            }
            result += `<span class="word">${temp}</span><span class="letter"> </span>`;
            temp = ``;
        }
    }
    return result;
};

// getting a random quote from Quotes array, then split it into spans and fill it in typingArea 
let rand = Math.floor(Math.random() * (Quotes.length));
let today_quote = Quotes[rand];
typingArea.innerHTML = splitQuote(today_quote);


// ----------------------
let start;
let end;
let time;
let wrong = 0;

/**
 * checkes correctness of characters typed at each input_value_change, and changes style of chars depending on correctness
 * @param {string} inputText
 */
const checkCorrect = (inputText) => {
    moveCursor(0);
    firstCursor.classList.add('stop');
    let i = inputText.length - 1;
    moveCursor(i);
    // console.log('i = ', i);
    if (i === 0) {
        start = Date.now();
        // console.log(start);
    }
    inputChar = inputText[i];
    if (inputChar == today_quote[i]) {
        letter[i].classList.add("correct");
    }
    else {
        letter[i].classList.add("wrong");
        wrong += 1;
    }
    letter[i].classList.remove('activeLetter');
    letter[i + 1].classList.add('activeLetter');
    checkDone(userInput.value);
};

userInput.addEventListener('keydown', (event) => {
    if (event.keyCode == 8) {
        let lastIndex = userInput.value.length - 1;
        letter[lastIndex].classList.remove("wrong", "correct");

        letter[lastIndex + 1].classList.remove('activeLetter');
        letter[lastIndex].classList.add('activeLetter');
    }
});

checkDone = (inputText) => {
    if (inputText.length === today_quote.length) {
        end = Date.now();
        time = Math.floor((end - start) / 1000);
        minutes = time / 60;
        console.log('game over');
        wpm.innerHTML = Math.floor(today_quote.length / (minutes));
        acc.innerHTML = `${Math.floor(((today_quote.length - wrong) / today_quote.length) * 100)}%`;
        timeElement.innerHTML = (time) + 's';
        score.style.display = 'flex'; // shows the score
    }
};

focus.addEventListener("click", () => {
    userInput.focus();
    focus.style.display = 'none';
    // keySound = new sound("audiomass-output.mp3");
});

typingArea.addEventListener("click", () => {
    focus.style.display = "none";
    userInput.focus();
    // keySound focus= new sound("audiomass-output.mp3");
});

setInterval(() => {

    // firstCursor.classList.remove('stop');
    if (userInputQ === document.activeElement) {
        // console.log('in focus');

    }
    else {
        // console.log("click to focus!")
        firstCursor.classList.remove('stop');
    }

    if (userInputQ != document.activeElement) {
        focus.style.display = "flex";
    }
}, 500);

const moveCursor = (i) => {
    letter[i].after(firstCursor);
};
