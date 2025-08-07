const data = document.querySelector('#inputData');
const contentItem = document.querySelector('#content');
const wrapper = document.querySelector('.wrapper');

    document.body.addEventListener('mousemove', (e) => {
      // Move the wrapper to follow the cursor
      wrapper.style.left = e.pageX + 'px';
      wrapper.style.top = e.pageY + 'px';
      wrapper.style.pointerEvents = 'none'; // ignore
      wrapper.style.pointerEvents = 'auto'; // allow interaction

    });


const addItem =()=>{
  if(data.value){
 const listItem = document.createElement('li');
  listItem.innerHTML = `${data.value}
  <i class="fa-solid fa-xmark"></>`;

  data.value = '';

  listItem.addEventListener('click',()=>{
    listItem.classList.toggle('done');
  });

  listItem.querySelector('i').addEventListener('click',()=>{
    e.stopPropogation(); 
    listItem.remove();
  })

  contentItem.prepend(listItem);
 }
};

data.addEventListener('keydown',(e)=>{
  if(e.key === 'Enter'){
    addItem();
  }
});

  
document.addEventListener('keydown', (e) => {
  if (e.key === 'Delete') {
    const allItems = contentItem.querySelectorAll('li');
    const lastItem = allItems[0]; 
    if (lastItem) {
      lastItem.remove();
    }
  }
});