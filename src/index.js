/* eslint-disable linebreak-style */
import './style.css';
import { scoreList, updateList } from './scorelist.js';
import { getScore, postScore } from './generate_api.js';

const scoreBoard = document.getElementById('scoreboard');
const refreshBtn = document.getElementById('refresh-btn');
const submitBtn = document.getElementById('submit-btn');
const userName = document.getElementById('name');
const score = document.getElementById('score');

async function updateScore() {
  const fetchAPI = await getScore();
  const updatedList = scoreList(fetchAPI.result);
  updateList(updatedList, scoreBoard);
}
refreshBtn.addEventListener('click', async () => {
  await updateScore();
});

submitBtn.addEventListener('submit', async (event) => {
  event.preventDefault();
  const playerName = userName.value;
  const playerScore = score.value;
  await postScore({ playerName, playerScore });
  userName.value = '';
  score.value = '';
  await updateScore();
});

window.onload = async () => {
  await updateScore();
};