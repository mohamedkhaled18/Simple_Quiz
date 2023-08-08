const info = [
    {
        "question": 'What is the biggest star in the world?',
        "answers": {
            "one": 'Earth',
            "two": 'Sun',
            "three": 'moon'
        },
        "correct": 'Sun'
    },
    {
        "question": 'What is symbol of ammonia?',
        "answers": {
            "one": 'NH3',
            "two": 'NO2',
            "three": 'NH4'
        },
        "correct": 'NH3'
    },
    {
        "question": 'What is the result of x in this equation: 2x + 5 = 6?',
        "answers": {
            "one": '0.5',
            "two": '-0.5',
            "three": 'Both Are Correct'
        },
        "correct": '0.5'
    },
    {
        "question": 'What galaxy are we in?',
        "answers": {
            "one": 'Milkey Way',
            "two": 'Neptune',
            "three": 'Red Galaxy'
        },
        "correct": 'Milkey Way'
    }
];

let total , current , question , answers , next;
total = document.querySelector('.total');
current = document.querySelector('.current');
question = document.getElementById('question');
answers = document.querySelectorAll('.answer');
next = document.getElementById('next');

total.innerHTML = info.length;

// Onload The Window
window.onload = first;
function first() {
    current.innerHTML = 1;
    question.innerHTML = info[0].question;
    for (let i = 0; i < 3; i++) {
        answers[i].innerHTML = Object.values(info[0].answers)[i]
    }
}


// Check
answers.forEach(btn => {
    btn.onclick = (e) => {
        if (e.currentTarget.innerHTML === info[current.innerHTML - 1].correct) {
            e.currentTarget.classList.add('right');
        } else {
            e.currentTarget.classList.add('error');
        }
    }
});


// Next Btn
next.addEventListener('click' , goNext);

function goNext() {
   if (next.innerHTML != 'Finish') {
        answers.forEach(el => {
            el.classList.remove('right');
            el.classList.remove('error');
        });

        current.innerHTML++;
        question.innerHTML = info[current.innerHTML - 1].question;
        for (let i = 0; i < 3; i++) {
            answers[i].innerHTML = Object.values(info[current.innerHTML - 1].answers)[i]
        }
        
        // Check The Last Question
        if (current.innerHTML == info.length) {
            next.innerHTML = 'Finish';
        }
    } else {    
        let confirmation = confirm('Do Want To Reset?');
        confirmation? location.reload() : window.close()
    }
}
