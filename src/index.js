/* eslint-disable linebreak-style */
import './style.css';
import { scoreList, updateList } from './scorelist.js';

const scoreBoard = document.getElementById('scoreboard');

updateList(scoreList, scoreBoard);