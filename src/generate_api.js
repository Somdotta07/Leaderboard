/* eslint-disable linebreak-style */

const gameScoreUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Qc8Crttfp6u4HrkOhxwH/scores';
// GET to get a list of scores for the given game
const getScore = async () => {
  const scores = await fetch(gameScoreUrl, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return scores.json();
};
// POST to create a new score for the given game
const postScore = async (userPoints) => {
  const postScores = await fetch(gameScoreUrl, {
    method: 'POST',
    body: JSON.stringify(userPoints),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return postScores.json();
};

export { getScore, postScore };