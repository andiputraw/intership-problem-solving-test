function dense_ranking({ player, player_score, gits_play, gits_score }) {
  let current_score = player_score[0];
  let current_rank = 1;

  let ranks = [];

  for (let i = 0; i < player; i++) {
    if (player_score[i] == current_score) {
      ranks.push([current_score, current_rank]);
    } else {
      current_rank++;
      current_score = player_score[i];
      ranks.push([current_score, current_rank]);
    }
  }

  let gits_ranks = [];

  for (let i = 0; i < gits_play; i++) {
    let y = 0;
    let score = 0;
    for (let y = 0; y < player; y++) {
      if (gits_score[i] == ranks[y][0]) {
        if (score == 1) {
          score = 1;
        }
        score = ranks[y][1];
        break;
      }
      if (gits_score[i] > ranks[y][0]) {
        score = ranks[y][1];
        break;
      }
    }
    score = score || ranks[ranks.length - 1][1] + 1;
    gits_ranks.push([gits_score[i], score]);
  }

  return gits_ranks.map((v) => v[1]).join(" ");
}

const input1 = {
  player: 7,
  player_score: [100, 100, 50, 40, 40, 20, 10],
  gits_play: 4,
  gits_score: [5, 25, 50, 120],
};

console.log(dense_ranking(input1));

const input2 = {
  player: 10,
  player_score: [100, 100, 80, 50, 45, 40, 40, 25, 20, 10],
  gits_play: 4,
  gits_score: [10, 30, 80, 90],
};

console.log(dense_ranking(input2));

const input3 = {
  player: 5,
  player_score: [60, 40, 40, 20, 10],
  gits_play: 5,
  gits_score: [70, 40, 20, 5, 1],
};

console.log(dense_ranking(input3));
