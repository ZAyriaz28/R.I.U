document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.game-card');
  const popSound = document.getElementById('popSound');
  const unpopSound = document.getElementById('unpopSound');
  const ROWS = 5;
  const COLS = 7;
  const totalBubbles = ROWS * COLS;

  function createBubble(index) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'bubble';
    button.setAttribute('role', 'gridcell');
    button.setAttribute('aria-pressed', 'false');
    button.setAttribute('tabindex', '0');
    button.title = 'Pop bubble ' + (index + 1);
    button.dataset.index = index;

    const stateSpan = document.createElement('span');
    stateSpan.className = 'bubble-status';
    stateSpan.textContent = 'Not popped';
    button.appendChild(stateSpan);

    button.addEventListener('click', () => {
      const isPopped = button.classList.toggle('popped');
      button.setAttribute('aria-pressed', isPopped.toString());
      stateSpan.textContent = isPopped ? 'Popped' : 'Not popped';

      if (isPopped) {
        popSound.currentTime = 0;
        popSound.play();
      } else {
        unpopSound.currentTime = 0;
        unpopSound.play();
      }
    });

    button.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        button.click();
      }
    });

    return button;
  }

  for (let i = 0; i < totalBubbles; i++) {
    container.appendChild(createBubble(i));
  }
});
