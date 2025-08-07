const data = document.querySelector('#inputData');
const contentItem = document.querySelector('#content');
const wrapper = document.querySelector('.wrapper');

// Make wrapper follow the mouse
document.body.addEventListener('mousemove', (e) => {
  wrapper.style.left = e.pageX + 'px';
  wrapper.style.top = e.pageY + 'px';
});

// Function to add item
const addItem = () => {
  if (data.value.trim()) {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      ${data.value}
      <i class="fa-solid fa-xmark"></i>
    `;
    data.value = '';

    // Toggle done state
    listItem.addEventListener('click', () => {
      listItem.classList.toggle('done');
    });

    // Remove item on icon click
    listItem.querySelector('i').addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent toggling .done
      listItem.remove();
    });

    contentItem.prepend(listItem);
  }
};

// 🔑 Trigger addItem on Enter key press
data.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addItem();
  }
});
