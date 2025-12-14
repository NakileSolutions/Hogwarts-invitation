// Énigmes de difficulté décroissante en anglais
const riddles = [
    {
        level: 1,
        text: "Between fog and ancient history I stand,<br>A Thames that winds through bridges grand.<br>My clock chimes loud, my giant eye does see,<br>Scarlet buses roam the streets of me.<br>What city am I?"
    },
    {
        level: 2,
        text: "I am a capital where monarchs reign,<br>My famous tower leans, yet still remains.<br>They call me 'The Big Smoke' in Shakespeare's tongue,<br>Black cabs and red booths, my legends sung.<br>Six letters form my name. Who am I?"
    },
    {
        level: 3,
        text: "I am a city where the Thames flows slow,<br>Where a giant eye watches the world below.<br>Big Ben marks my hours with its chime,<br>And red buses cross my bridges all the time.<br>What British city am I?"
    },
    {
        level: 4,
        text: "I am the capital of the United Kingdom.<br>My giant wheel is called the London Eye.<br>Big Ben is my famous clock tower.<br>Buckingham Palace stands within me.<br>What city am I?"
    },
    {
        level: 5,
        text: "I am a famous European capital.<br>English is spoken here.<br>Queen Elizabeth lived here.<br>My first letter is L.<br>Who am I?"
    }
];

// Réponses acceptées
const correctAnswers = ['londres', 'london'];

const answerInput = document.getElementById('answer-input');
const checkBtn = document.getElementById('check-btn');
const feedback = document.getElementById('feedback');
const riddleText = document.getElementById('riddle-text');
const riddleSection = document.getElementById('riddle-section');
const envelopeSection = document.getElementById('envelope-section');
const animatedMail = document.getElementById('animated-mail');

let currentRiddleIndex = 0;

// Afficher la première énigme au chargement
window.addEventListener('DOMContentLoaded', () => {
    displayRiddle(currentRiddleIndex);
    answerInput.focus();
});

// Fonction pour afficher une énigme
function displayRiddle(index) {
    riddleText.classList.add('riddle-transition');
    riddleText.innerHTML = riddles[index].text;
    
    setTimeout(() => {
        riddleText.classList.remove('riddle-transition');
    }, 500);
}

// Vérification de la réponse
checkBtn.addEventListener('click', () => {
    const userAnswer = answerInput.value.trim().toLowerCase();
    
    const isCorrect = correctAnswers.some(answer => 
        userAnswer === answer || userAnswer.includes(answer)
    );
    
    if (isCorrect) {
        feedback.textContent = '✨ Correct! This is for you... ✨';
        feedback.style.color = '#f4d03f';
        
        setTimeout(() => {
            riddleSection.classList.add('hidden');
            envelopeSection.classList.remove('hidden');
            
            // Ouvre automatiquement l'enveloppe après 1 seconde
            setTimeout(() => {
                animatedMail.classList.add('open');
            }, 1000);
        }, 2000);
    } else {
        // Mauvaise réponse : passer à l'énigme suivante si disponible
        if (currentRiddleIndex < riddles.length - 1) {
            currentRiddleIndex++;
            feedback.textContent = '❌ Try this simpler riddle...';
            feedback.style.color = '#ff6b6b';
            
            setTimeout(() => {
                displayRiddle(currentRiddleIndex);
                feedback.textContent = '';
                answerInput.value = '';
                answerInput.focus();
            }, 1500);
        } else {
            // Dernière énigme déjà affichée
            feedback.textContent = '❌ Still not right... Think carefully!';
            feedback.style.color = '#ff6b6b';
            answerInput.value = '';
            answerInput.focus();
        }
    }
});

// Permettre la validation avec la touche Entrée
answerInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkBtn.click();
    }
});

// Clic sur l'enveloppe pour l'ouvrir/fermer manuellement
animatedMail.addEventListener('click', () => {
    animatedMail.classList.toggle('open');
});
