/*
id: game no.
name: string (folder name (lower case only))
title: string
description: string
phaserVersion: string
isPlayable: boolean
screenshots: array
references: array
tags: array (lowercase except particular name)
inspirations: array
demos: array (game play and video)
*/

var games = [
  {
    id: 1,
    name: "run",
    title: "Run",
    description: "Um jogo para se fugir dos obstaculos",
    isPlayable: true,
    screenshots: ["run.jpg"],
    tags: [],
    inspirations: [],
    demos: ["run/index.html"],
  },
  {
    id: 2,
    name: "box-jump",
    title: "Box Jump",
    description: "Um jogo de plataformas onde controlas uma caixa que salta.",
    isPlayable: true,
    screenshots: ["box-jump.jpg"],
    tags: [],
    inspirations: [],
    demos: ["box-jump/index.html"],
  },
  {
    id: 3,
    name: "man-vs-penguins",
    title: "Man vs Penguins",
    description:
      "Um jogo divertido onde tens de evitar pinguins que caem do céu.",
    isPlayable: true,
    screenshots: ["man-vs-penguins.jpg"],
    tags: [],
    inspirations: [],
    demos: ["man-vs-penguins/index.html"],
  },
  {
    id: 4,
    name: "connected",
    title: "Connected",
    description: "Um puzzle onde tens de conectar todos os pontos.",
    isPlayable: false,
    screenshots: ["connected.jpg"],
    tags: [],
    inspirations: [],
    demos: ["connected/index.html"],
  },
  {
    id: 5,
    name: "crazy-snake",
    title: "Crazy Snake",
    description: "Um jogo clássico da cobra com um toque moderno.",
    isPlayable: true,
    screenshots: ["crazy-snake.jpg"],
    tags: [],
    inspirations: [],
    demos: ["crazy-snake/index.html"],
  },
];

function debugGameObject() {
  var nGames = games.length;
  var i = 0;

  console.log("nGames", nGames);
  for (i = 0; i < nGames; i++) {
    var text = `i: ${i}, id: ${games[i].id}, ${games[i].name}`;
    console.log(text);
  }
}

debugGameObject();
