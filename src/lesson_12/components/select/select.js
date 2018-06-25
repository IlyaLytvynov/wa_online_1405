import './select.scss';

const TARGET_CLASS_NAME = 'select';
const TITLE_CLASS_NAME = `${TARGET_CLASS_NAME}__title`;
const OPTION_CLASS_NAME = `${TARGET_CLASS_NAME}__option`;
const OPTION_SELECTED_CLASS_NAME = `${TARGET_CLASS_NAME}__option_selected`;
const OPTIONS_CLASS_NAME = `${TARGET_CLASS_NAME}__options`;
const LIST_CONTROL_CLASS_NAME = `${TARGET_CLASS_NAME}__control`;
const EXPAND_CLASS_NAME = `${TARGET_CLASS_NAME}_expand`;

export function select(targetEl, optionsList) {
  let title;
  let options;
  let isExpand = false;
  let selectedItem;

  function render() {
   renderTitle();
   renderOptions();
    targetEl.classList.add(TARGET_CLASS_NAME);
  }

  function renderTitle() {
    title = document.createElement('button');
    title.classList.add(TITLE_CLASS_NAME);
    title.textContent = 'Please select';
    targetEl.appendChild(title);

    title.addEventListener('click', () => {
      if(isExpand) {
        close();
      } else {
        open();
      }
    });
  }

  function renderOptions() {
    options = document.createElement('ul');
    options.classList.add(OPTIONS_CLASS_NAME);

    optionsList.forEach(function (optionText) {
      const listItem = document.createElement('li');
      const listItemControl =  document.createElement('button');

      listItemControl.classList.add(LIST_CONTROL_CLASS_NAME);
      listItem.classList.add(OPTION_CLASS_NAME);

      listItemControl.textContent = optionText;
      listItemControl.setAttribute('tab-index', '0');
      listItemControl.addEventListener('click', () => {
        title.textContent = optionText;

        if(selectedItem !== undefined) {
          selectedItem.classList.remove(OPTION_SELECTED_CLASS_NAME);
        }

        listItem.classList.add(OPTION_SELECTED_CLASS_NAME);
        selectedItem = listItem;
        close();
      });

      listItem.appendChild(listItemControl);
      options.appendChild(listItem);
    });

    targetEl.appendChild(options);
  }

  function open() {
    targetEl.classList.add(EXPAND_CLASS_NAME);
    isExpand = true;
  }

  function close() {
    targetEl.classList.remove(EXPAND_CLASS_NAME);
    isExpand = false;
  }

  render();
}