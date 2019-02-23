const numerical = document.getElementById('sort-numerical');
numerical.addEventListener('click', toggle);

const strategy = document.getElementById('sort-strategy');
strategy.addEventListener('click', toggle);

const tactics = document.getElementById('sort-tactics');
tactics.addEventListener('click', toggle);

const buttons = document.getElementsByTagName("button");

const wrapper = document.querySelector('[data-grid="grid"]');

function toggle(event) {
  const className = event.target.id;
  wrapper.classList = className;

  for (let button of buttons) {
    if (button.id === event.target.id) {
      event.target.classList = "active";
    } 
    else {
      button.classList.remove('active');
    }
  }
}