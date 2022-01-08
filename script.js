const main = document.querySelector('.main');
const alertBox = document.querySelector('.alert');
const exclamationIcon = document.querySelector('.fa-exclamation-circle');
const msg = document.querySelector('.msg');
const closeBtn = document.querySelector('.close-btn');
const closeIcon = document.querySelector('.fa-times');

class ShowAlert {
  constructor(state, borderColor, color) {
    this.state = state;
    this.borderColor = borderColor;
    this.color = color;
  }
  trigger(message) {
    alertBox.style.background = this.state;
    alertBox.style.borderColor = this.borderColor;
    msg.textContent = message;
    msg.style.color = this.color;
    exclamationIcon.style.color = this.color;
    closeIcon.style.color = this.color;

    alertBox.classList.add('show');
    alertBox.classList.remove('hide');
    setTimeout(() => {
      alertBox.classList.remove('show');
      alertBox.classList.add('hide');
    }, 5000);

    closeBtn.addEventListener('click', () => {
      alertBox.classList.remove('show');
      alertBox.classList.add('hide');
    });
  }
}

const warning = new ShowAlert('#ff4500', '#ffb805', '#ffffff');
const danger = new ShowAlert('#0000', '#ffffff', '#ffffff');
main.addEventListener('click', (e) => {
  if (e.target.classList.contains('btn-warning')) {
    warning.trigger('Alert:Warning!!!!');
  } else if (e.target.classList.contains('btn-danger')) {
    danger.trigger('Alert:Warning!!!!');
  }
});
