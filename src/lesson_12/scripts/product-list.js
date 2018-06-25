export function list(target, items) {
  const ul = document.createElement('ul');

  ul.classList.add('product-list');

  items.forEach(item =>  {
    const li = document.createElement('li');

    li.classList.add('product-list__item');

    li.textContent = item;

    li.addEventListener('click', () => {
      console.log('CLICKED ON ELEMENT',  li);
    });

    ul.appendChild(li);
  });

  target.appendChild(ul);

}