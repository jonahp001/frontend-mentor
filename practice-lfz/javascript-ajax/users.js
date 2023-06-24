const userList = document.querySelector('#user-list');
const xhr = new XMLHttpRequest();

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';

xhr.addEventListener('load', () => {
  console.log(xhr.status);
  console.log(xhr.response);
  for (let i = 0; i < xhr.response.length; i++) {
    const newLi = document.createElement('li');
    newLi.textContent = xhr.response[i].name;
    userList.appendChild(newLi);
  }
});

xhr.send();
