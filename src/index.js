
/* eslint-disable import/extensions */
import './style.css';
import addScore from './form';
import { displayTable } from './request';

const submit = document.querySelector('.submit');
const refresh = document.querySelector('.refresh');

displayTable();

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  document.querySelector('form').reset();
});

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  const tableToDelete = document.querySelector('.list');
  tableToDelete.innerHTML = '';
  displayTable();
});