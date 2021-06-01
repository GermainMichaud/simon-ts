const colors: string[] = ['red', 'blue', 'yellow', 'green']
let sequence: string[] = []
let user_sequence: string[] = []
let level = 1

const btnHandleClick = (color: string): void => {
  if (user_sequence >= sequence) return
  user_sequence = [...user_sequence, color]
  if (user_sequence[user_sequence.length - 1] !== sequence[user_sequence.length - 1]) {
    console.log('Game Over');
    (document.querySelectorAll('button.button') as NodeList).forEach(btn => {
      (btn as HTMLButtonElement).classList.add('unclickable')
    })
    alert(`Game Over - Niveau atteint: ${level}`)
    return
  }
  if (user_sequence.length === sequence.length) {
    user_sequence = [];
    (document.querySelectorAll('button.button') as NodeList).forEach(btn => {
      (btn as HTMLButtonElement).classList.add('unclickable')
    })
    updateLevel()
    updateSequence()
  }
}

const createButtons = (): void => {
  colors.forEach(color => {
    const button: HTMLButtonElement = document.createElement('button');
    button.classList.add('button', color, 'unclickable');
    button.addEventListener('click', _ => btnHandleClick(color));
    button.addEventListener('mousedown', _ => button.classList.add('highlight'));
    button.addEventListener('mouseup', _ => button.classList.remove('highlight'));
    (document.querySelector('#buttons') as HTMLDivElement).appendChild(button);
  })
}

const updateSequence = (): void => {
  const random = Math.floor(Math.random() * colors.length)
  sequence = [...sequence, colors[random]]
  console.log(sequence)
  for (let i = 0; i < sequence.length; i++) {
    setTimeout(() => {
      (document.querySelector(`button.${sequence[i]}`) as HTMLButtonElement).classList.add('highlight')
      setTimeout(() => {
        (document.querySelector(`button.${sequence[i]}`) as HTMLButtonElement).classList.remove('highlight')
      }, 300)
      if (i === sequence.length - 1) {
        (document.querySelectorAll('button.button')).forEach(btn => btn.classList.remove('unclickable'))
      }
    }, (i+1) * 600)
  }
}

const updateLevel = (): void => {
  level++
  const counter = document.querySelector('h1 span') as HTMLSpanElement
  counter.textContent = level.toString()
}

const initGame = (): void => {
  createButtons()
  updateSequence()
}

document.addEventListener('DOMContentLoaded', initGame)