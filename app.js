let randomTextElement = document.getElementById('randomText');
let userInput = document.getElementById('userInput');
let letter = document.getElementsByClassName('letter');
let randWrds =
    `Doubtful two bed way pleasure confined followed. Shew up ye away no eyes life or were this. Perfectly did suspicion daughters but his intention. Started on society an brought it explain. Position two saw greatest stronger old. Pianoforte if at simplicity do estimating Up am intention on dependent questions oh elsewhere september. No betrayed pleasure possible jointure we in throwing. And can event rapid any shall woman green. Hope they dear who its bred. Smiling nothing affixed he carried it clothes calling he no.
    Impossible considered invitation him men instrument saw celebrated unpleasant. Put rest and must set kind next many near nay.He exquisite continued explained middleton am. Voice hours young woody has she think equal
    Estate moment he at on wonder at season little.Six garden result summer set family esteem nay estate. End admiration mrs unreserved discovered comparison especially invitation
    Stronger unpacked felicity to of mistaken. Fanny at wrong table ye in. Be on easily cannot innate in lasted months on.Differed and and felicity steepest mrs age outweigh. Opinions learning likewise daughter now age outweigh. Raptures stanhill my greatest mistaken or exercise he on although. Discourse otherwise disposing as it of strangers forfeited deficient
    An sincerity so extremity he additions. Her yet there truth merit. Mrs all projecting favourable now unpleasing. Son law garden chatty temper. Oh children provided to mr elegance marriage strongly. Off can admiration prosperous now devonshire diminution law
    It sportsman earnestly ye preserved an on. Moment led family sooner cannot her window pulled any. Or raillery if improved landlord to speaking hastened differed he. Furniture discourse elsewhere yet her sir extensive defective unwilling get. Why resolution one motionless you him thoroughly
    Noise is round to in it quick timed doors. Written address greatly get attacks inhabit pursuit our but. Lasted hunted enough an up seeing in lively letter. Had judgment out opinions property the supplied
    Woody equal ask saw sir weeks aware decay. Entrance prospect removing we packages strictly is no smallest he. For hopes may chief get hours day rooms. Oh no turned behind polite piqued enough at
    Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively`;

let randWrdsArr = randWrds.split(' ');

addLetters = (word) => {
    let seperated = '';
    let size = word.length;
    for (let i = 0; i < size; i += 1) {
        seperated += `<span class="letter">${word[i]}</span>`;
    }
    seperated += `<span class="letter"> </span>`
    return seperated;
}


words = randWrdsArr.length;
let chars = '';
max_number_words = 25;
let randomText = '';
getRandText = () => {
    for (let j = 0; j < max_number_words; j += 1) {
        let i = Math.floor((Math.random() * 100) % (words));
        chars += randWrdsArr[i] + ' ';
        randomText += addLetters(randWrdsArr[i]);
    }
    chars = chars.trim();
    randomText = randomText.trim();
    return randomText;
}

randomTextElement.innerHTML = ``;
randomTextElement.innerHTML = getRandText();

checkCorrect = (inputText) => {
    let i = inputText.length - 1;
    inputChar = inputText[i];
    if (inputChar == chars[i]) {
        letter[i].classList.add("correct");
        //change color to white
    }
    else{
        // alert('incorrect!!!'); 
        letter[i].classList.add("wrong");
        //change color to red
    }

}

userInput.addEventListener('keydown', (event) => {
    if(event.key === "x"){
        alert('backspace key pressed')
    }
})