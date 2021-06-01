"use strict";
const colors = ['red', 'blue', 'yellow', 'green'];
let sequence = [];
let user_sequence = [];
let level = 1;
const btnHandleClick = (color) => {
    if (user_sequence >= sequence)
        return;
    user_sequence = [...user_sequence, color];
    if (user_sequence[user_sequence.length - 1] !== sequence[user_sequence.length - 1]) {
        console.log('Game Over');
        document.querySelectorAll('button.button').forEach(btn => {
            btn.classList.add('unclickable');
        });
        alert(`Game Over - Niveau atteint: ${level}`);
        return;
    }
    if (user_sequence.length === sequence.length) {
        user_sequence = [];
        document.querySelectorAll('button.button').forEach(btn => {
            btn.classList.add('unclickable');
        });
        updateLevel();
        updateSequence();
    }
};
const createButtons = () => {
    colors.forEach(color => {
        const button = document.createElement('button');
        button.classList.add('button', color, 'unclickable');
        button.addEventListener('click', _ => btnHandleClick(color));
        button.addEventListener('mousedown', _ => button.classList.add('highlight'));
        button.addEventListener('mouseup', _ => button.classList.remove('highlight'));
        document.querySelector('#buttons').appendChild(button);
    });
};
const updateSequence = () => {
    const random = Math.floor(Math.random() * colors.length);
    sequence = [...sequence, colors[random]];
    console.log(sequence);
    for (let i = 0; i < sequence.length; i++) {
        setTimeout(() => {
            document.querySelector(`button.${sequence[i]}`).classList.add('highlight');
            setTimeout(() => {
                document.querySelector(`button.${sequence[i]}`).classList.remove('highlight');
            }, 300);
            if (i === sequence.length - 1) {
                (document.querySelectorAll('button.button')).forEach(btn => btn.classList.remove('unclickable'));
            }
        }, (i + 1) * 600);
    }
};
const updateLevel = () => {
    level++;
    const counter = document.querySelector('h1 span');
    counter.textContent = level.toString();
};
const initGame = () => {
    createButtons();
    updateSequence();
};
document.addEventListener('DOMContentLoaded', initGame);
