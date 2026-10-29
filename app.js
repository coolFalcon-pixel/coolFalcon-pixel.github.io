const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', open);
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
  }
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuButton?.getAttribute('aria-expanded') === 'true') {
    navigation.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    menuButton.focus();
  }
});
const chartButtons = [...document.querySelectorAll('[data-round]')];
chartButtons.forEach(button => button.addEventListener('click', () => {
  const round = button.dataset.round;
  chartButtons.forEach(control => control.setAttribute('aria-pressed', String(control === button)));
  document.querySelectorAll('.bar-row.before').forEach(row => row.classList.toggle('is-hidden', round === 'after'));
  document.querySelectorAll('.bar-row.after').forEach(row => row.classList.toggle('is-hidden', round === 'before'));
}));
