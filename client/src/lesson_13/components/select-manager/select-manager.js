import {Select} from '../select/select';

export class SelectManager {
  constructor(targetEl) {
    this.targetEl = targetEl;
    this.selects = [];
    this.render();
  }

  render() {
    this.addBtn = document.createElement('button');
    this.openAllBtn = document.createElement('button');
    this.closeAllBtn = document.createElement('button');

    this.addBtn.textContent = 'ADD';
    this.openAllBtn.textContent = 'OPEN ALL';
    this.closeAllBtn.textContent = 'CLOSE ALL';

    this.addBtn.addEventListener('click', () =>  this.addSelect());
    this.openAllBtn.addEventListener('click', () =>  this.openAll());
    this.closeAllBtn.addEventListener('click', () =>  this.closeAll());

    this.targetEl.appendChild(this.addBtn);
    this.targetEl.appendChild(this.openAllBtn);
    this.targetEl.appendChild(this.closeAllBtn);
  }

  addSelect() {
    const options = this.requestOptions();
    const selectWrapper = document.createElement('div');

    const select = new Select(selectWrapper, options);

    this.selects.push(select);
    this.targetEl.appendChild(selectWrapper);
  }

  openAll() {
    this.selects.forEach((select) => select.open());
  }

  closeAll() {
    this.selects.forEach((select) => select.close());
  }

  requestOptions() {
    const options = [];
    let option = prompt('Enter option', '');

    while(option && option.length > 0) {
      options.push(option);
      option = prompt('Enter option', '');
    }

    return options;
  }
}