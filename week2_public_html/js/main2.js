'use strict';
const url = 'http://localhost:3000'; // change url when uploading to server

// select existing html elements
const addForm = document.querySelector('#addCatForm');
const modForm = document.querySelector('#modCatForm');
const ul = document.querySelector('ul');
const userLists = document.querySelectorAll('.add-owner');

// create cat cards
const createCatCards = (cats) => {
  // clear ul
  ul.innerHTML = '';
  cats.forEach((cat) => {
    // create li with DOM methods
    const img = document.createElement('img');
    img.src = url + '/' + cat.filename;
    img.alt = cat.name;
    img.classList.add('resp');

    const figure = document.createElement('figure').appendChild(img);

    const h2 = document.createElement('h2');
    h2.innerHTML = cat.name;

    const p1 = document.createElement('p');
    p1.innerHTML = `Age: ${cat.age}`;

    const p2 = document.createElement('p');
    p2.innerHTML = `Weight: ${cat.weight}kg`;

    const p3 = document.createElement('p');
    p3.innerHTML = `Owner: ${cat.ownername}`;

    // add selected cat's values to modify form
    const modButton = document.createElement('button');
    modButton.innerHTML = 'Modify';
    modButton.addEventListener('click', () => {
      const inputs = modForm.querySelectorAll('input');
      inputs[0].value = cat.name;
      inputs[1].value = cat.age;
      inputs[2].value = cat.weight;
      inputs[3].value = cat.cat_id;
      modForm.querySelector('select').value = cat.owner;
    });

    // delete selected cat
    const delButton = document.createElement('button');
    delButton.innerHTML = 'Delete';
    delButton.addEventListener('click', async () => {
      const fetchOptions = {
        method: 'DELETE',
      };
      try {
        const response = await fetch(url + '/cat/' + cat.cat_id, fetchOptions);
        const json = await response.json();
        console.log('delete response', json);
        getCat();
      }
      catch (e) {
        console.log(e.message());
      }
    });

    const li = document.createElement('li');
    li.classList.add('light-border');

    li.appendChild(h2);
    li.appendChild(figure);
    li.appendChild(p1);
    li.appendChild(p2);
    li.appendChild(p3);
    li.appendChild(modButton);
    li.appendChild(delButton);
    ul.appendChild(li);
  });
};

// AJAX call
const getCat = async () => {
  try {
    const response = await fetch(url + '/cat');
    const cats = await response.json();
    createCatCards(cats);
  }
  catch (e) {
    console.log(e.message);
  }
};
getCat();

// create user options to <select>
const createUserOptions = (users) => {
  userLists.forEach((list) => {
    // clear user list
    list.innerHTML = '';
    users.forEach((user) => {
      // create options with DOM methods
      const option = document.createElement('option');
      option.value = user.user_id;
      option.innerHTML = user.name;
      option.classList.add('light-border');
      list.appendChild(option);
    });
  });
};

// get users to form options
const getUsers = async () => {
  try {
    const response = await fetch(url + '/user');
    const users = await response.json();
    createUserOptions(users);
  }
  catch (e) {
    console.log(e.message);
  }
};
getUsers();

// submit add cat form
addForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const fd = new FormData(addForm);
  const fetchOptions = {
    method: 'POST',
    body: fd,
  };
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  console.log('add response', json);
  getCat();
});

// submit modify form
modForm.addEventListener('submit', async (evt) => {
  evt.preventDefault();
  const data = serializeJson(modForm);
  const fetchOptions = {
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  };

  console.log(fetchOptions);
  const response = await fetch(url + '/cat', fetchOptions);
  const json = await response.json();
  console.log('modify response', json);
  getCat();
});
