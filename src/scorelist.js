/* eslint-disable linebreak-style */
// const scoreList = [
//   { name: 'Eva', score: 85 },
//   { name: 'Ada', score: 92 },
//   { name: 'Jim', score: 100 },
//   { name: 'Ana', score: 75 },
//   { name: 'Rob', score: 79 },
// ];

export default function updateList(list, listContainer) {
  let scoreBoardContainer = '';
  list.forEach((element) => {
    const { name, score } = element;
    scoreBoardContainer += `<li>
      <p>${name} :${score}</p>
      </li>`;
  });
  listContainer.innerHTML = scoreBoardContainer;
}

// export { updateList };