import './select.scss';

const TARGET_CLASS_NAME = 'select';
const TITLE_CLASS_NAME = `${TARGET_CLASS_NAME}__title`;
const OPTION_CLASS_NAME = `${TARGET_CLASS_NAME}__option`;
const OPTION_SELECTED_CLASS_NAME = `${TARGET_CLASS_NAME}__option_selected`;
const OPTIONS_CLASS_NAME = `${TARGET_CLASS_NAME}__options`;
const LIST_CONTROL_CLASS_NAME = `${TARGET_CLASS_NAME}__control`;
const EXPAND_CLASS_NAME = `${TARGET_CLASS_NAME}_expand`;

export class Select {
  /**
   * @param targetEl HTMLElement
   * @param optionsList Array<string>
   * */
  constructor(targetEl, optionsList) {
    this.targetEl = targetEl;
    this.options = optionsList;
    this.isExpand = false;

    this.titleEl = null;
    this.ul = null;
    this.selectedItem = null;
    this.render();
  }

  render() {
    this.renderTitle();
    this.renderOptions();
    this.targetEl.classList.add(TARGET_CLASS_NAME);
  }

  renderTitle() {
    this.titleEl = document.createElement('button');
    this.titleEl.classList.add(TITLE_CLASS_NAME);
    this.titleEl.textContent = 'Please select';

    this.targetEl.appendChild(this.titleEl);

    this.titleEl.addEventListener('click', () => {
      if (this.isExpand) {
        this.close();
      } else {
        this.open();
      }
    });
  }

  renderOptions() {
    this.ul = document.createElement('ul');
    this.ul.classList.add(OPTIONS_CLASS_NAME);

    this.options.forEach((optionText) => {
      const listItem = document.createElement('li');
      const listItemControl = document.createElement('button');

      listItemControl.classList.add(LIST_CONTROL_CLASS_NAME);
      listItem.classList.add(OPTION_CLASS_NAME);

      listItemControl.textContent = optionText;
      listItemControl.setAttribute('tab-index', '0');

      listItemControl.addEventListener('click', () => {
        this.titleEl.textContent = optionText;

        if (this.selectedItem) {
          this.selectedItem.classList.remove(OPTION_SELECTED_CLASS_NAME);
        }

        listItem.classList.add(OPTION_SELECTED_CLASS_NAME);
        this.selectedItem = listItem;
        this.close();
      });

      listItem.appendChild(listItemControl);
      this.ul.appendChild(listItem);
    });

    this.targetEl.appendChild(this.ul);
  }

  open() {
    this.targetEl.classList.add(EXPAND_CLASS_NAME);
    this.isExpand = true;
  }

  close() {
    this.targetEl.classList.remove(EXPAND_CLASS_NAME);
    this.isExpand = false;
  }

}