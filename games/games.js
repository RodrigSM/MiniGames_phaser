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
    id: 77,
    name: 'run',
    title: 'Run',
    description: 'Um jogo de corrida interminável onde tens de saltar sobre obstáculos.',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'run.jpg'
    ],
    references: [
      'http://www.lessmilk.com/games/1/'
    ],
    tags: [],
    inspirations: [],
    demos: ['run/index.html']
  },
  {
    id: 9,
    name: 'box-jump',
    title: 'Box Jump',
    description: 'Um jogo de plataformas onde controlas uma caixa que salta.',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'box-jump.jpg'
    ],
    references: [
      'http://www.lessmilk.com/games/3/'
    ],
    tags: [],
    inspirations: [],
    demos: ['box-jump/index.html']
  },
  {
    id: 54,
    name: 'man-vs-penguins',
    title: 'Man vs Penguins',
    description: 'Um jogo divertido onde tens de evitar pinguins que caem do céu.',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'man-vs-penguins.jpg'
    ],
    references: [
      'http://www.lessmilk.com/games/4/'
    ],
    tags: [],
    inspirations: [],
    demos: ['man-vs-penguins/index.html']
  },
  {
    id: 19,
    name: 'connected',
    title: 'Connected',
    description: 'Um puzzle onde tens de conectar todos os pontos.',
    phaserVersion: '2.4.4',
    isPlayable: false,
    screenshots: [
      'connected.jpg'
    ],
    references: [
      'http://www.lessmilk.com/games/7/'
    ],
    tags: [],
    inspirations: [],
    demos: ['connected/index.html']
  },
  {
    id: 21,
    name: 'crazy-snake',
    title: 'Crazy Snake',
    description: 'Um jogo clássico da cobra com um toque moderno.',
    phaserVersion: '2.4.4',
    isPlayable: true,
    screenshots: [
      'crazy-snake.jpg'
    ],
    references: [
      'http://www.lessmilk.com/games/12/'
    ],
    tags: [],
    inspirations: [],
    demos: ['crazy-snake/index.html']
  }
];

function debugGameObject() {
  var nGames = games.length;
  var i = 0;

  console.log('nGames', nGames);
  for (i = 0; i < nGames; i++) {
    var text = `i: ${i}, id: ${games[i].id}, ${games[i].name}`;
    console.log(text);
  }
}

debugGameObject();
