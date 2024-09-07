
const dados = [
  // Console da Atari
    {
      titulo: "Pong",
      descricao: "Um dos primeiros jogos eletrônicos, simula o jogo de tênis de mesa com dois jogadores controlando paletas para rebater uma bola, visando marcar pontos contra o adversário.",
      genero: "Esporte",
      dataLancamento: "1972-11-29",
      link: "https://en.wikipedia.org/wiki/Pong",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Space Invaders",
      descricao: "Um jogo de tiro clássico onde o jogador controla uma nave espacial que deve defender a Terra de uma invasão de alienígenas que descem lentamente em direção à sua base.",
      genero: "Tiro",
      dataLancamento: "1980-01-01",
      link: "https://en.wikipedia.org/wiki/Space_Invaders",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Pac-Man",
      descricao: "Um dos jogos de arcade mais icônicos, onde o jogador controla Pac-Man, um personagem amarelo que deve comer todas as bolinhas em um labirinto enquanto evita ser capturado por fantasmas.",
      genero: "Ação",
      dataLancamento: "1982-01-01",
      link: "https://en.wikipedia.org/wiki/Pac-Man",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Asteroids",
      descricao: "Um jogo de tiro em que o jogador controla uma nave espacial em um campo de asteroides, tentando destruir os asteroides e naves inimigas enquanto evita colisões.",
      genero: "Tiro",
      dataLancamento: "1981-01-01",
      link: "https://en.wikipedia.org/wiki/Asteroids_(video_game)",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Centipede",
      descricao: "Um jogo de tiro onde o jogador deve destruir um centopeia que desce pela tela, além de lidar com outros inimigos e obstáculos que aparecem.",
      genero: "Tiro",
      dataLancamento: "1982-01-01",
      link: "https://en.wikipedia.org/wiki/Centipede_(video_game)",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Missile Command",
      descricao: "Um jogo de defesa onde o jogador deve proteger cidades de ataques de mísseis, usando um sistema de defesa de mísseis para interceptar e destruir os mísseis inimigos antes que atinjam seus alvos.",
      genero: "Ação",
      dataLancamento: "1980-01-01",
      link: "https://en.wikipedia.org/wiki/Missile_Command",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Pitfall!",
      descricao: "Um jogo de plataforma que segue as aventuras de Pitfall Harry enquanto ele navega por uma selva cheia de perigos, incluindo buracos, cobras e crocodilos, em busca de tesouros.",
      genero: "Plataforma",
      dataLancamento: "1982-04-30",
      link: "https://en.wikipedia.org/wiki/Pitfall!_(video_game)",
      plataforma: "Atari 2600"
    },
    {
      titulo: "Xevious",
      descricao: "Um jogo de tiro vertical onde o jogador controla uma nave que deve destruir inimigos terrestres e aéreos, com uma série de níveis desafiadores e gráficos detalhados para a época.",
      genero: "Tiro",
      dataLancamento: "1983-01-01",
      link: "https://en.wikipedia.org/wiki/Xevious",
      plataforma: "Atari 5200"
    },
    {
      titulo: "Galaxian",
      descricao: "Um jogo de tiro no estilo espacial onde o jogador deve combater ondas de inimigos alienígenas em um campo de batalha, com uma mecânica de tiro e defesa envolvente.",
      genero: "Tiro",
      dataLancamento: "1983-01-01",
      link: "https://en.wikipedia.org/wiki/Galaxian",
      plataforma: "Atari 5200"
    },
    {
      titulo: "Asteroids Deluxe",
      descricao: "Uma sequência de Asteroids com gráficos aprimorados e novas mecânicas, onde o jogador deve destruir asteroides e naves inimigas em um ambiente espacial.",
      genero: "Tiro",
      dataLancamento: "1981-01-01",
      link: "https://en.wikipedia.org/wiki/Asteroids_Deluxe",
      plataforma: "Atari 7800"
    },
    {
      titulo: "Pole Position II",
      descricao: "Um jogo de corrida onde os jogadores competem em um circuito de Fórmula 1, com gráficos detalhados e um sistema de controle que simula a experiência de corrida.",
      genero: "Corrida",
      dataLancamento: "1987-01-01",
      link: "https://en.wikipedia.org/wiki/Pole_Position_II",
      plataforma: "Atari 7800"
    },
    {
      titulo: "Ballblazer",
      descricao: "Um jogo de esportes futurista que combina elementos de futebol e hóquei em um ambiente tridimensional, onde os jogadores competem em partidas rápidas e dinâmicas.",
      genero: "Esportes",
      dataLancamento: "1987-01-01",
      link: "https://en.wikipedia.org/wiki/Ballblazer",
      plataforma: "Atari 7800"
    },
  // Consoles da Nitendo
    {
      titulo: "Super Mario Bros.",
      descricao: "Mario embarca em uma missão para salvar a Princesa Peach do maligno Bowser.",
      genero: "Plataforma",
      dataLancamento: "1985-09-13",
      link: "https://www.nintendo.com/super-mario-bros",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "The Legend of Zelda",
      descricao: "Link explora o mundo de Hyrule para coletar os fragmentos da Triforce e salvar a Princesa Zelda de Ganon.",
      genero: "Ação/Aventura",
      dataLancamento: "1986-02-21",
      link: "https://www.nintendo.com/legend-of-zelda",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Metroid",
      descricao: "Samus Aran deve destruir os Piratas Espaciais e a ameaça dos Metroids no planeta Zebes.",
      genero: "Ação/Aventura, Metroidvania",
      dataLancamento: "1986-08-06",
      link: "https://www.nintendo.com/metroid",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Mega Man 2",
      descricao: "Mega Man luta contra o Dr. Wily e seus Robot Masters para salvar o mundo.",
      genero: "Ação/Plataforma",
      dataLancamento: "1988-12-24",
      link: "https://www.capcom.com/mega-man-2",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Castlevania",
      descricao: "Simon Belmont deve derrotar o Conde Drácula e seus monstros usando seu poderoso chicote.",
      genero: "Ação/Plataforma",
      dataLancamento: "1986-09-26",
      link: "https://www.konami.com/castlevania",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Contra",
      descricao: "Bill Rizer e Lance Bean enfrentam um exército alienígena em um jogo de tiro side-scrolling cheio de ação.",
      genero: "Ação, Tiro",
      dataLancamento: "1987-02-20",
      link: "https://www.konami.com/contra",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Punch-Out!!",
      descricao: "Little Mac compete em combates de boxe, enfrentando adversários cada vez mais desafiadores até lutar contra Mike Tyson.",
      genero: "Esporte, Luta",
      dataLancamento: "1987-10-18",
      link: "https://www.nintendo.com/punch-out",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Duck Hunt",
      descricao: "Usando a pistola Zapper, os jogadores atiram em patos que aparecem na tela enquanto são acompanhados por um cão de caça.",
      genero: "Tiro",
      dataLancamento: "1984-04-21",
      link: "https://www.nintendo.com/duck-hunt",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Excitebike",
      descricao: "Um jogo de corrida de motocicletas onde o jogador compete em pistas com saltos e obstáculos.",
      genero: "Corrida",
      dataLancamento: "1984-11-30",
      link: "https://www.nintendo.com/excitebike",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Final Fantasy",
      descricao: "Um grupo de guerreiros deve salvar o mundo em um jogo de RPG que se tornou a base de uma das maiores franquias de jogos.",
      genero: "RPG",
      dataLancamento: "1987-12-18",
      link: "https://www.square-enix.com/final-fantasy",
      plataforma: "Nintendo Entertainment System (NES)"
    },
    {
      titulo: "Super Mario World",
      descricao: "Mario e Luigi partem em uma jornada para salvar a Princesa Peach e derrotar Bowser em Dinosaur Land.",
      genero: "Plataforma",
      dataLancamento: "1990-11-21",
      link: "https://www.nintendo.com/super-mario-world",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "The Legend of Zelda: A Link to the Past",
      descricao: "Link deve resgatar a Princesa Zelda e impedir o feiticeiro Agahnim de libertar o malvado Ganon no Reino das Sombras.",
      genero: "Ação/Aventura",
      dataLancamento: "1991-11-21",
      link: "https://www.nintendo.com/legend-of-zelda-link-to-the-past",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Super Metroid",
      descricao: "Samus Aran parte em uma missão para recuperar a última larva de Metroid roubada pelos Piratas Espaciais.",
      genero: "Ação/Aventura, Metroidvania",
      dataLancamento: "1994-03-19",
      link: "https://www.nintendo.com/super-metroid",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Chrono Trigger",
      descricao: "Crono e seus amigos viajam pelo tempo para impedir uma catástrofe global que destruirá o mundo no futuro.",
      genero: "RPG",
      dataLancamento: "1995-03-11",
      link: "https://www.nintendo.com/chrono-trigger",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Donkey Kong Country",
      descricao: "Donkey Kong e Diddy Kong embarcam em uma jornada para recuperar as bananas roubadas pelos Kremlings.",
      genero: "Plataforma",
      dataLancamento: "1994-11-18",
      link: "https://www.nintendo.com/donkey-kong-country",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Final Fantasy VI",
      descricao: "Um grupo de heróis luta contra o império maligno liderado pelo vilão Kefka para salvar o mundo.",
      genero: "RPG",
      dataLancamento: "1994-04-02",
      link: "https://www.nintendo.com/final-fantasy-vi",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "EarthBound",
      descricao: "Ness e seus amigos devem salvar o mundo de uma ameaça alienígena conhecida como Giygas.",
      genero: "RPG",
      dataLancamento: "1994-08-27",
      link: "https://www.nintendo.com/earthbound",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Super Mario Kart",
      descricao: "Personagens do universo Mario competem em corridas de kart em pistas cheias de obstáculos e itens especiais.",
      genero: "Corrida",
      dataLancamento: "1992-08-27",
      link: "https://www.nintendo.com/super-mario-kart",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Street Fighter II: The World Warrior",
      descricao: "Lutadores de todo o mundo competem em um torneio de artes marciais para provar quem é o mais forte.",
      genero: "Luta",
      dataLancamento: "1991-06-10",
      link: "https://www.capcom.com/street-fighter-ii",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Mega Man X",
      descricao: "Mega Man X, um robô Maverick Hunter, luta contra vilões robóticos para salvar a humanidade.",
      genero: "Ação/Plataforma",
      dataLancamento: "1993-12-17",
      link: "https://www.capcom.com/mega-man-x",
      plataforma: "Super Nintendo Entertainment System (SNES)"
    },
    {
      titulo: "Super Mario 64",
      descricao: "Mario embarca em uma aventura 3D para resgatar a Princesa Peach, coletando Power Stars em vastos mundos.",
      genero: "Plataforma",
      dataLancamento: "1996-06-23",
      link: "https://www.nintendo.com/super-mario-64",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "The Legend of Zelda: Ocarina of Time",
      descricao: "Link deve salvar o reino de Hyrule, viajando no tempo e derrotando o malvado Ganondorf.",
      genero: "Ação/Aventura",
      dataLancamento: "1998-11-21",
      link: "https://www.nintendo.com/legend-of-zelda-ocarina-of-time",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "GoldenEye 007",
      descricao: "Assuma o papel de James Bond em missões de espionagem e ação em primeira pessoa, baseadas no filme GoldenEye.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "1997-08-25",
      link: "https://www.nintendo.com/goldeneye-007",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Mario Kart 64",
      descricao: "Corridas emocionantes com personagens de Mario, agora em gráficos 3D e com modos multiplayer divertidos.",
      genero: "Corrida",
      dataLancamento: "1996-12-14",
      link: "https://www.nintendo.com/mario-kart-64",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Super Smash Bros.",
      descricao: "Personagens da Nintendo lutam em uma arena, usando ataques especiais e itens em batalhas multiplayer.",
      genero: "Luta, Party",
      dataLancamento: "1999-01-21",
      link: "https://www.nintendo.com/super-smash-bros",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Banjo-Kazooie",
      descricao: "Banjo e sua amiga Kazooie embarcam em uma aventura para resgatar a irmã de Banjo, sequestrada pela bruxa Gruntilda.",
      genero: "Plataforma, Aventura",
      dataLancamento: "1998-06-29",
      link: "https://www.rare.co.uk/banjo-kazooie",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Star Fox 64",
      descricao: "Fox McCloud lidera a equipe Star Fox em batalhas espaciais para salvar o sistema Lylat do maligno Andross.",
      genero: "Tiro em Terceira Pessoa, Aventura Espacial",
      dataLancamento: "1997-04-27",
      link: "https://www.nintendo.com/star-fox-64",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Donkey Kong 64",
      descricao: "Donkey Kong e seus amigos embarcam em uma aventura para deter o maligno King K. Rool e salvar suas bananas.",
      genero: "Plataforma, Aventura",
      dataLancamento: "1999-11-22",
      link: "https://www.nintendo.com/donkey-kong-64",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Paper Mario",
      descricao: "Mario, em estilo de papel, embarca em uma aventura RPG para resgatar a Princesa Peach das garras de Bowser.",
      genero: "RPG",
      dataLancamento: "2000-08-11",
      link: "https://www.nintendo.com/paper-mario",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Perfect Dark",
      descricao: "Joanna Dark, uma agente especial, se infiltra em instalações e combate uma conspiração alienígena em um jogo de tiro futurista.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2000-05-22",
      link: "https://www.rare.co.uk/perfect-dark",
      plataforma: "Nintendo 64"
    },
    {
      titulo: "Tetris",
      descricao: "Um dos puzzles mais icônicos de todos os tempos, onde você deve organizar blocos caindo para completar linhas e evitar que o espaço se preencha.",
      genero: "Puzzle",
      dataLancamento: "1989-06-14",
      link: "https://www.nintendo.com/tetris",
      plataforma: "Game Boy"
    },
    {
      titulo: "The Legend of Zelda: Link's Awakening",
      descricao: "Link acorda em uma ilha misteriosa e deve explorar masmorras e coletar itens para encontrar uma forma de voltar para casa.",
      genero: "Ação/Aventura",
      dataLancamento: "1993-06-06",
      link: "https://www.nintendo.com/legend-of-zelda-links-awakening",
      plataforma: "Game Boy"
    },
    {
      titulo: "Pokémon Red and Blue",
      descricao: "Captura e treine Pokémon para se tornar o campeão da Liga Pokémon, enfrentando adversários e desafiando líderes de ginásio.",
      genero: "RPG",
      dataLancamento: "1996-02-27",
      link: "https://www.pokemon.com/pokemon-red-blue",
      plataforma: "Game Boy"
    },
    {
      titulo: "Super Mario Land",
      descricao: "Mario viaja para o reino de Sarasaland para resgatar a Princesa Daisy das garras do alienígena Tatanga.",
      genero: "Plataforma",
      dataLancamento: "1989-04-21",
      link: "https://www.nintendo.com/super-mario-land",
      plataforma: "Game Boy"
    },
    {
      titulo: "Donkey Kong",
      descricao: "Uma versão portátil do clássico arcade, onde Mario deve salvar a sua namorada, Pauline, das garras do gorila Donkey Kong.",
      genero: "Plataforma",
      dataLancamento: "1994-11-21",
      link: "https://www.nintendo.com/donkey-kong",
      plataforma: "Game Boy"
    },
    {
      titulo: "Kirby's Dream Land",
      descricao: "Kirby explora Dream Land, engole inimigos e usa suas habilidades para restaurar a paz no reino.",
      genero: "Plataforma",
      dataLancamento: "1992-04-27",
      link: "https://www.nintendo.com/kirbys-dream-land",
      plataforma: "Game Boy"
    },
    {
      titulo: "Metroid II: Return of Samus",
      descricao: "Samus Aran retorna para o planeta SR388 para caçar e eliminar a ameaça Metroid restante.",
      genero: "Ação/Aventura, Metroidvania",
      dataLancamento: "1991-11-15",
      link: "https://www.nintendo.com/metroid-ii-return-of-samus",
      plataforma: "Game Boy"
    },
    {
      titulo: "Wario Land: Super Mario Land 3",
      descricao: "Wario embarca em uma nova aventura para recuperar seu tesouro roubado e derrotar seus rivais.",
      genero: "Plataforma",
      dataLancamento: "1994-03-21",
      link: "https://www.nintendo.com/wario-land-super-mario-land-3",
      plataforma: "Game Boy"
    },
    {
      titulo: "Gargoyle's Quest",
      descricao: "Um jogo de ação e RPG onde você controla Firebrand, um demônio que deve salvar seu reino de uma ameaça destrutiva.",
      genero: "Ação/RPG",
      dataLancamento: "1990-11-16",
      link: "https://www.capcom.com/gargoyles-quest",
      plataforma: "Game Boy"
    },
    {
      titulo: "Dr. Mario",
      descricao: "Um jogo de puzzle onde você deve eliminar vírus usando cápsulas coloridas, combinando cores para limpar o campo.",
      genero: "Puzzle",
      dataLancamento: "1990-07-27",
      link: "https://www.nintendo.com/dr-mario",
      plataforma: "Game Boy"
    },
    {
      titulo: "The Legend of Zelda: A Link to the Past & Four Swords",
      descricao: "Uma versão aprimorada do clássico 'A Link to the Past' com um novo modo multiplayer cooperativo chamado Four Swords.",
      genero: "Ação/Aventura",
      dataLancamento: "2002-12-02",
      link: "https://www.nintendo.com/the-legend-of-zelda-a-link-to-the-past-four-swords",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Pokémon FireRed and LeafGreen",
      descricao: "Remakes dos clássicos Pokémon Red e Blue, com gráficos melhorados e novas funcionalidades para capturar e treinar Pokémon.",
      genero: "RPG",
      dataLancamento: "2004-09-09",
      link: "https://www.pokemon.com/fire-red-leaf-green",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Super Mario Advance",
      descricao: "Uma versão para o Game Boy Advance do clássico Super Mario Bros. 2, com gráficos atualizados e novos recursos.",
      genero: "Plataforma",
      dataLancamento: "2001-03-21",
      link: "https://www.nintendo.com/super-mario-advance",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Metroid Fusion",
      descricao: "Samus Aran explora uma estação espacial em uma missão para eliminar uma ameaça alienígena e desvendar mistérios ocultos.",
      genero: "Ação/Aventura, Metroidvania",
      dataLancamento: "2002-11-17",
      link: "https://www.nintendo.com/metroid-fusion",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Castlevania: Aria of Sorrow",
      descricao: "Um RPG de ação onde você controla Soma Cruz em sua luta contra Drácula e outros inimigos no castelo de Drácula.",
      genero: "Ação/RPG",
      dataLancamento: "2003-05-06",
      link: "https://www.konami.com/castlevania-aria-of-sorrow",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Advance Wars",
      descricao: "Um jogo de estratégia por turnos onde você comanda unidades de combate e usa táticas para vencer batalhas e campanhas.",
      genero: "Estratégia em Tempo Real",
      dataLancamento: "2001-09-10",
      link: "https://www.nintendo.com/advance-wars",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Fire Emblem",
      descricao: "Um RPG tático onde você lidera um exército em batalhas estratégicas, desenvolvendo personagens e histórias ao longo do caminho.",
      genero: "RPG Tático",
      dataLancamento: "2003-05-19",
      link: "https://www.nintendo.com/fire-emblem",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Mario Kart: Super Circuit",
      descricao: "Corridas emocionantes com os personagens do universo Mario, agora em uma nova perspectiva 2D e com uma grande variedade de pistas e itens.",
      genero: "Corrida",
      dataLancamento: "2001-07-21",
      link: "https://www.nintendo.com/mario-kart-super-circuit",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "WarioWare, Inc.: Mega Microgame$!",
      descricao: "Uma coleção de microjogos rápidos e loucos que desafiam o jogador a completar tarefas em segundos.",
      genero: "Party",
      dataLancamento: "2003-03-21",
      link: "https://www.nintendo.com/wario-ware-inc-mega-microgame",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "The Legend of Zelda: The Minish Cap",
      descricao: "Link deve explorar um mundo pequeno e misterioso para restaurar a ordem e salvar a princesa Zelda da maldição do bruxo Vaati.",
      genero: "Ação/Aventura",
      dataLancamento: "2004-11-04",
      link: "https://www.nintendo.com/the-legend-of-zelda-the-minish-cap",
      plataforma: "Game Boy Advance"
    },
    {
      titulo: "Super Smash Bros. Melee",
      descricao: "Um jogo de luta que reúne personagens icônicos da Nintendo em batalhas frenéticas.",
      genero: "Luta, Party",
      dataLancamento: "2001-11-21",
      link: "https://www.nintendo.com/super-smash-bros-melee",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "The Legend of Zelda: The Wind Waker",
      descricao: "Link navega pelos mares em uma aventura para salvar sua irmã e derrotar o malvado Ganondorf.",
      genero: "Ação/Aventura",
      dataLancamento: "2002-12-13",
      link: "https://www.nintendo.com/legend-of-zelda-the-wind-waker",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Metroid Prime",
      descricao: "Samus Aran explora um planeta alienígena em um jogo que combina tiro em primeira pessoa com elementos de aventura.",
      genero: "Ação/Aventura, FPS",
      dataLancamento: "2002-11-17",
      link: "https://www.nintendo.com/metroid-prime",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Resident Evil 4",
      descricao: "Leon S. Kennedy embarca em uma missão para resgatar a filha do presidente em uma vila infestada por inimigos.",
      genero: "Ação, Survival Horror",
      dataLancamento: "2005-01-11",
      link: "https://www.residentevil.com/4",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Mario Kart: Double Dash!!",
      descricao: "Corridas emocionantes com personagens de Mario, onde dois pilotos compartilham o mesmo kart.",
      genero: "Corrida",
      dataLancamento: "2003-11-07",
      link: "https://www.nintendo.com/mario-kart-double-dash",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Luigi's Mansion",
      descricao: "Luigi explora uma mansão assombrada para resgatar Mario usando um aspirador de fantasmas.",
      genero: "Ação/Aventura, Puzzle",
      dataLancamento: "2001-09-14",
      link: "https://www.nintendo.com/luigis-mansion",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Pikmin",
      descricao: "O capitão Olimar comanda criaturas chamadas Pikmin para explorar um planeta misterioso e reparar sua nave.",
      genero: "Estratégia, Puzzle",
      dataLancamento: "2001-10-26",
      link: "https://www.nintendo.com/pikmin",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Super Mario Sunshine",
      descricao: "Mario tenta limpar a Ilha Delfino e resolver o mistério de quem está causando o caos.",
      genero: "Plataforma",
      dataLancamento: "2002-07-19",
      link: "https://www.nintendo.com/super-mario-sunshine",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Paper Mario: The Thousand-Year Door",
      descricao: "Mario embarca em uma aventura em estilo RPG com gráficos de papel para derrotar uma antiga ameaça.",
      genero: "RPG",
      dataLancamento: "2004-07-22",
      link: "https://www.nintendo.com/paper-mario-thousand-year-door",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Fire Emblem: Path of Radiance",
      descricao: "Ike lidera um grupo de mercenários para proteger seu reino em batalhas táticas e épicas.",
      genero: "RPG Tático",
      dataLancamento: "2005-04-20",
      link: "https://www.nintendo.com/fire-emblem-path-of-radiance",
      plataforma: "Nintendo GameCube"
    },
    {
      titulo: "Wii Sports",
      descricao: "Um jogo esportivo que inclui cinco modalidades: tênis, boliche, golfe, boxe e beisebol, projetado para utilizar os controles de movimento do Wii.",
      genero: "Esporte, Party",
      dataLancamento: "2006-11-19",
      link: "https://www.nintendo.com/wii-sports",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "The Legend of Zelda: Twilight Princess",
      descricao: "Link tenta impedir que Hyrule seja consumido por um reino das sombras, embarcando em uma aventura épica.",
      genero: "Ação/Aventura",
      dataLancamento: "2006-11-19",
      link: "https://www.nintendo.com/legend-of-zelda-twilight-princess",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Super Mario Galaxy",
      descricao: "Mario viaja pelo espaço em mundos gravidade-zero para salvar a Princesa Peach de Bowser.",
      genero: "Plataforma, Aventura",
      dataLancamento: "2007-11-12",
      link: "https://www.nintendo.com/super-mario-galaxy",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Mario Kart Wii",
      descricao: "Corridas emocionantes com os personagens de Mario, agora com suporte para controle de movimento e corridas online.",
      genero: "Corrida",
      dataLancamento: "2008-04-10",
      link: "https://www.nintendo.com/mario-kart-wii",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Super Smash Bros. Brawl",
      descricao: "Personagens da Nintendo e de outras franquias icônicas lutam em uma arena em batalhas frenéticas.",
      genero: "Luta, Party",
      dataLancamento: "2008-01-31",
      link: "https://www.nintendo.com/super-smash-bros-brawl",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Donkey Kong Country Returns",
      descricao: "Donkey Kong e Diddy Kong embarcam em uma aventura para recuperar suas bananas roubadas por novos inimigos.",
      genero: "Plataforma, Aventura",
      dataLancamento: "2010-11-21",
      link: "https://www.nintendo.com/donkey-kong-country-returns",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Metroid Prime 3: Corruption",
      descricao: "Samus Aran deve lutar contra o vírus Phazon e os Piratas Espaciais em uma aventura de tiro em primeira pessoa.",
      genero: "Ação/Aventura, FPS",
      dataLancamento: "2007-08-27",
      link: "https://www.nintendo.com/metroid-prime-3-corruption",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "New Super Mario Bros. Wii",
      descricao: "Mario, Luigi, e amigos embarcam em uma aventura cooperativa para salvar a Princesa Peach de Bowser.",
      genero: "Plataforma",
      dataLancamento: "2009-11-12",
      link: "https://www.nintendo.com/new-super-mario-bros-wii",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Xenoblade Chronicles",
      descricao: "Um épico RPG de ação onde Shulk e seus aliados lutam para salvar o mundo da invasão de criaturas mecânicas.",
      genero: "RPG",
      dataLancamento: "2010-06-10",
      link: "https://www.nintendo.com/xenoblade-chronicles",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "The Legend of Zelda: Skyward Sword",
      descricao: "Link embarca em uma jornada para forjar a Master Sword e salvar a deusa Hylia de uma antiga ameaça.",
      genero: "Ação/Aventura",
      dataLancamento: "2011-11-18",
      link: "https://www.nintendo.com/legend-of-zelda-skyward-sword",
      plataforma: "Nintendo Wii"
    },
    {
      titulo: "Super Mario 3D World",
      descricao: "Mario, Luigi, Peach e Toad embarcam em uma aventura em um mundo tridimensional, com novos poderes e desafios cooperativos.",
      genero: "Plataforma",
      dataLancamento: "2013-11-21",
      link: "https://www.nintendo.com/super-mario-3d-world",
      plataforma: "Wii U"
    },
    {
      titulo: "Mario Kart 8",
      descricao: "A clássica corrida de kart com personagens do universo Mario, agora com antigravidade, novos itens e modos de corrida online.",
      genero: "Corrida",
      dataLancamento: "2014-05-29",
      link: "https://www.nintendo.com/mario-kart-8",
      plataforma: "Wii U"
    },
    {
      titulo: "The Legend of Zelda: Breath of the Wild",
      descricao: "Link desperta em um vasto mundo aberto e precisa resgatar Hyrule de Ganon em uma jornada épica e não-linear.",
      genero: "Ação/Aventura",
      dataLancamento: "2017-03-03",
      link: "https://www.nintendo.com/legend-of-zelda-breath-of-the-wild",
      plataforma: "Wii U"
    },
    {
      titulo: "Splatoon",
      descricao: "Um jogo de tiro em terceira pessoa, onde jogadores controlam personagens que atiram tinta para dominar territórios.",
      genero: "Tiro em Terceira Pessoa",
      dataLancamento: "2015-05-28",
      link: "https://www.nintendo.com/splatoon",
      plataforma: "Wii U"
    },
    {
      titulo: "Super Smash Bros. for Wii U",
      descricao: "Os personagens mais icônicos da Nintendo e de outras franquias se enfrentam em intensas batalhas multiplayer.",
      genero: "Luta, Party",
      dataLancamento: "2014-11-21",
      link: "https://www.nintendo.com/super-smash-bros-wii-u",
      plataforma: "Wii U"
    },
    {
      titulo: "Donkey Kong Country: Tropical Freeze",
      descricao: "Donkey Kong e sua família enfrentam novos inimigos em uma aventura desafiadora repleta de ação e plataformas.",
      genero: "Plataforma, Aventura",
      dataLancamento: "2014-02-21",
      link: "https://www.nintendo.com/donkey-kong-country-tropical-freeze",
      plataforma: "Wii U"
    },
    {
      titulo: "Bayonetta 2",
      descricao: "Bayonetta enfrenta hordas de inimigos celestiais e infernais em combates rápidos e estilizados.",
      genero: "Ação, Hack and Slash",
      dataLancamento: "2014-09-20",
      link: "https://www.nintendo.com/bayonetta-2",
      plataforma: "Wii U"
    },
    {
      titulo: "Pikmin 3",
      descricao: "Comande um exército de Pikmins e explore um planeta alienígena para encontrar recursos e sobreviver.",
      genero: "Estratégia em Tempo Real",
      dataLancamento: "2013-07-13",
      link: "https://www.nintendo.com/pikmin-3",
      plataforma: "Wii U"
    },
    {
      titulo: "New Super Mario Bros. U",
      descricao: "Mario e seus amigos embarcam em uma nova aventura 2D para salvar a Princesa Peach, com suporte para até quatro jogadores.",
      genero: "Plataforma",
      dataLancamento: "2012-11-18",
      link: "https://www.nintendo.com/new-super-mario-bros-u",
      plataforma: "Wii U"
    },
    {
      titulo: "The Wonderful 101",
      descricao: "Lidere um grupo de super-heróis para salvar o mundo de uma invasão alienígena em batalhas intensas e criativas.",
      genero: "Ação, Estratégia",
      dataLancamento: "2013-08-23",
      link: "https://www.nintendo.com/the-wonderful-101",
      plataforma: "Wii U"
    },
    {
      titulo: "New Super Mario Bros.",
      descricao: "Uma nova aventura em 2D com Mario, com jogabilidade clássica e gráficos atualizados para o Nintendo DS.",
      genero: "Plataforma",
      dataLancamento: "2006-05-15",
      link: "https://www.nintendo.com/new-super-mario-bros",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Pokémon Diamond and Pearl",
      descricao: "Captura e treine Pokémon na região de Sinnoh, desafie líderes de ginásio e participe da Liga Pokémon.",
      genero: "RPG",
      dataLancamento: "2007-04-22",
      link: "https://www.pokemon.com/pokemon-diamond-pearl",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "The Legend of Zelda: Phantom Hourglass",
      descricao: "Link embarca em uma nova jornada através dos mares em busca da Princesa Zelda, usando a tela sensível ao toque para resolver quebra-cabeças.",
      genero: "Ação/Aventura",
      dataLancamento: "2007-10-01",
      link: "https://www.nintendo.com/the-legend-of-zelda-phantom-hourglass",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Mario Kart DS",
      descricao: "Corridas emocionantes com personagens do universo Mario, incluindo a possibilidade de competir online e com novos itens.",
      genero: "Corrida",
      dataLancamento: "2005-11-14",
      link: "https://www.nintendo.com/mario-kart-ds",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Animal Crossing: Wild World",
      descricao: "Um simulador de vida onde você vive em uma vila com animais antropomórficos, personalizando sua casa e participando de atividades diárias.",
      genero: "Simulação",
      dataLancamento: "2005-11-23",
      link: "https://www.nintendo.com/animal-crossing-wild-world",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Castlevania: Dawn of Sorrow",
      descricao: "Uma sequência de 'Castlevania: Aria of Sorrow', onde Soma Cruz deve enfrentar novos desafios e inimigos no castelo de Drácula.",
      genero: "Ação/RPG",
      dataLancamento: "2005-10-04",
      link: "https://www.konami.com/castlevania-dawn-of-sorrow",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Professor Layton and the Curious Village",
      descricao: "Resolva enigmas e quebra-cabeças em uma vila misteriosa enquanto investiga um enigma envolvendo uma antiga relíquia.",
      genero: "Quebra-Cabeça, Aventura",
      dataLancamento: "2007-02-10",
      link: "https://www.level5.com/professor-layton-and-the-curious-village",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Nintendogs",
      descricao: "Um simulador de animais de estimação onde você cuida, treina e interage com seus cachorrinhos usando a tela sensível ao toque.",
      genero: "Simulação",
      dataLancamento: "2005-04-26",
      link: "https://www.nintendo.com/nintendogs",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "Advance Wars: Days of Ruin",
      descricao: "Um jogo de estratégia por turnos com uma nova história e personagens, onde você comanda tropas em batalhas táticas.",
      genero: "Estratégia em Tempo Real",
      dataLancamento: "2008-01-21",
      link: "https://www.nintendo.com/advance-wars-days-of-ruin",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "The Legend of Zelda: Spirit Tracks",
      descricao: "Uma nova aventura de Zelda onde Link viaja por um mundo ferroviário, resolvendo quebra-cabeças e lutando contra inimigos.",
      genero: "Ação/Aventura",
      dataLancamento: "2009-12-07",
      link: "https://www.nintendo.com/the-legend-of-zelda-spirit-tracks",
      plataforma: "Nintendo DS"
    },
    {
      titulo: "The Legend of Zelda: Ocarina of Time 3D",
      descricao: "Uma versão remasterizada em 3D do clássico jogo de ação e aventura de Zelda, com gráficos aprimorados e controles melhorados.",
      genero: "Ação/Aventura",
      dataLancamento: "2011-06-19",
      link: "https://www.nintendo.com/the-legend-of-zelda-ocarina-of-time-3d",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Pokémon X and Y",
      descricao: "Explore a nova região de Kalos, capture e treine Pokémon, e desafie líderes de ginásio em uma nova jornada Pokémon com gráficos em 3D.",
      genero: "RPG",
      dataLancamento: "2013-10-12",
      link: "https://www.pokemon.com/pokemon-x-y",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Animal Crossing: New Leaf",
      descricao: "Assuma o papel de prefeito de uma nova vila e personalize o ambiente, interaja com os moradores e participe de várias atividades diárias.",
      genero: "Simulação",
      dataLancamento: "2013-06-09",
      link: "https://www.nintendo.com/animal-crossing-new-leaf",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Super Mario 3D Land",
      descricao: "Uma nova aventura em 3D com Mario, apresentando níveis desafiadores e uma mistura de jogabilidade em 2D e 3D.",
      genero: "Plataforma",
      dataLancamento: "2011-11-13",
      link: "https://www.nintendo.com/super-mario-3d-land",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Mario Kart 7",
      descricao: "Corridas emocionantes com os personagens do universo Mario, agora com novos karts, pistas e a capacidade de voar e nadar.",
      genero: "Corrida",
      dataLancamento: "2011-12-04",
      link: "https://www.nintendo.com/mario-kart-7",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Fire Emblem: Awakening",
      descricao: "Um RPG tático onde você lidera um exército em batalhas estratégicas e toma decisões que afetam a história e o desenvolvimento dos personagens.",
      genero: "RPG Tático",
      dataLancamento: "2013-02-04",
      link: "https://www.nintendo.com/fire-emblem-awakening",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "The Legend of Zelda: A Link Between Worlds",
      descricao: "Uma nova aventura em Hyrule e Lorule com a habilidade de Link de se transformar em um desenho para explorar novas dimensões e resolver quebra-cabeças.",
      genero: "Ação/Aventura",
      dataLancamento: "2013-11-22",
      link: "https://www.nintendo.com/the-legend-of-zelda-a-link-between-worlds",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Pokémon Sun and Moon",
      descricao: "Explore a nova região de Alola, descubra novos Pokémon e participe de uma nova história com várias mudanças na jogabilidade e mecânicas.",
      genero: "RPG",
      dataLancamento: "2016-11-18",
      link: "https://www.pokemon.com/pokemon-sun-moon",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Luigi's Mansion: Dark Moon",
      descricao: "Ajude Luigi a capturar fantasmas e restaurar a mansão em um jogo de ação e aventura com novos desafios e um ambiente em 3D.",
      genero: "Ação/Aventura",
      dataLancamento: "2013-03-24",
      link: "https://www.nintendo.com/luigis-mansion-dark-moon",
      plataforma: "Nintendo 3DS"
    },
    {
      titulo: "Pokémon Omega Ruby and Alpha Sapphire",
      descricao: "Remakes dos clássicos Pokémon Ruby e Sapphire com gráficos melhorados e novas funcionalidades para capturar e treinar Pokémon.",
      genero: "RPG",
      dataLancamento: "2014-11-21",
      link: "https://www.pokemon.com/pokemon-omega-ruby-alpha-sapphire",
      plataforma: "Nintendo 3DS"
    },
// Consoles da SNK
    {
      titulo: "Metal Slug",
      descricao: "Um jogo de ação e tiro em que os jogadores enfrentam inimigos em um cenário militar com uma variedade de armas e veículos.",
      genero: "Ação, Tiro",
      dataLancamento: "1996-04-01",
      link: "https://www.snkplaymore.co.jp/us/games/metal_slug/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "King of Fighters '98",
      descricao: "Um dos jogos mais icônicos da série King of Fighters, conhecido por seu extenso elenco de personagens e mecânicas de combate refinadas.",
      genero: "Luta",
      dataLancamento: "1998-07-23",
      link: "https://www.snkplaymore.co.jp/us/games/kof98/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Samurai Shodown",
      descricao: "Um jogo de luta baseado em combates com espadas e samurais, conhecido por sua jogabilidade estratégica e gráficos impressionantes para a época.",
      genero: "Luta",
      dataLancamento: "1993-07-07",
      link: "https://www.snkplaymore.co.jp/us/games/samurai_shodown/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Fatal Fury: King of Fighters",
      descricao: "Um jogo de luta que introduziu a série Fatal Fury, apresentando uma variedade de personagens e um sistema de combate inovador.",
      genero: "Luta",
      dataLancamento: "1991-11-11",
      link: "https://www.snkplaymore.co.jp/us/games/fatal_fury/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Puzzle Bobble",
      descricao: "Um jogo de puzzle onde os jogadores atiram bolhas coloridas para formar grupos e eliminar bolhas da tela.",
      genero: "Puzzle",
      dataLancamento: "1994-07-01",
      link: "https://www.taito.co.jp/en/games/puzzle-bobble",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Blazing Star",
      descricao: "Um jogo de tiro vertical no estilo 'shoot 'em up', com gráficos vibrantes e uma variedade de naves e armas para escolher.",
      genero: "Tiro",
      dataLancamento: "1998-01-29",
      link: "https://www.snkplaymore.co.jp/us/games/blazing_star/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Aero Fighters 2",
      descricao: "Um jogo de tiro vertical no qual os jogadores pilotam aviões e enfrentam hordas de inimigos e chefes desafiadores.",
      genero: "Tiro",
      dataLancamento: "1994-03-30",
      link: "https://www.snkplaymore.co.jp/us/games/aero_fighters_2/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "KOF XIII",
      descricao: "Uma das últimas edições da série King of Fighters, com um elenco ampliado e gráficos melhorados em comparação com os títulos anteriores.",
      genero: "Luta",
      dataLancamento: "2010-08-25",
      link: "https://www.snkplaymore.co.jp/us/games/kof13/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Windjammers",
      descricao: "Um jogo de esportes com uma mecânica de frisbee onde os jogadores competem para marcar pontos arremessando um disco em uma área de gol.",
      genero: "Esportes",
      dataLancamento: "1994-12-22",
      link: "https://www.snkplaymore.co.jp/us/games/windjammers/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Last Blade",
      descricao: "Um jogo de luta que se passa no Japão feudal, com um sistema de combate baseado em espadas e uma história envolvente.",
      genero: "Luta",
      dataLancamento: "1998-01-29",
      link: "https://www.snkplaymore.co.jp/us/games/last_blade/",
      plataforma: "Neo Geo"
    },
    {
      titulo: "Metal Slug",
      descricao: "Um jogo de ação e tiro em que os jogadores enfrentam inimigos em um cenário militar, com uma variedade de armas e veículos.",
      genero: "Ação, Tiro",
      dataLancamento: "1996-04-01",
      link: "https://www.snkplaymore.co.jp/us/games/metal_slug/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "King of Fighters '98",
      descricao: "Um dos jogos mais icônicos da série King of Fighters, conhecido por seu extenso elenco de personagens e mecânicas de combate refinadas.",
      genero: "Luta",
      dataLancamento: "1998-07-23",
      link: "https://www.snkplaymore.co.jp/us/games/kof98/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Samurai Shodown IV: Amakusa's Revenge",
      descricao: "Um jogo de luta baseado em combates com espadas e samurais, com novos personagens e modos de jogo adicionados.",
      genero: "Luta",
      dataLancamento: "1996-12-05",
      link: "https://www.snkplaymore.co.jp/us/games/samurai_shodown_iv/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Fatal Fury Special",
      descricao: "Uma versão aprimorada de Fatal Fury com novos personagens e movimentos especiais, mantendo a jogabilidade clássica de luta.",
      genero: "Luta",
      dataLancamento: "1994-01-01",
      link: "https://www.snkplaymore.co.jp/us/games/fatal_fury_special/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Last Blade 2",
      descricao: "Um jogo de luta ambientado no Japão feudal, com uma variedade de personagens e um sistema de combate baseado em espadas.",
      genero: "Luta",
      dataLancamento: "1998-04-01",
      link: "https://www.snkplaymore.co.jp/us/games/last_blade_2/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Windjammers",
      descricao: "Um jogo de esportes com uma mecânica de frisbee onde os jogadores competem para marcar pontos arremessando um disco em uma área de gol.",
      genero: "Esportes",
      dataLancamento: "1994-12-22",
      link: "https://www.snkplaymore.co.jp/us/games/windjammers/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Aero Fighters 2",
      descricao: "Um jogo de tiro vertical no qual os jogadores pilotam aviões e enfrentam hordas de inimigos e chefes desafiadores.",
      genero: "Tiro",
      dataLancamento: "1994-03-30",
      link: "https://www.snkplaymore.co.jp/us/games/aero_fighters_2/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Puzzle Bobble",
      descricao: "Um jogo de puzzle onde os jogadores atiram bolhas coloridas para formar grupos e eliminar bolhas da tela.",
      genero: "Puzzle",
      dataLancamento: "1996-11-01",
      link: "https://www.taito.co.jp/en/games/puzzle-bobble",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Rage of the Dragons",
      descricao: "Um jogo de luta que apresenta um elenco de personagens diversificado e um sistema de combate profundo e complexo.",
      genero: "Luta",
      dataLancamento: "2002-10-01",
      link: "https://www.snkplaymore.co.jp/us/games/rage_of_the_dragons/",
      plataforma: "Neo Geo CD"
    },
    {
      titulo: "Ninja Masters",
      descricao: "Um jogo de luta com temas de ninjas, oferecendo uma variedade de movimentos especiais e estilos de combate baseados em artes marciais.",
      genero: "Luta",
      dataLancamento: "1991-10-01",
      link: "https://www.snkplaymore.co.jp/us/games/ninja_masters/",
      plataforma: "Neo Geo CD"
    },
// Consoles da Sega
    {
      titulo: "Sonic the Hedgehog",
      descricao: "Aventura de plataforma onde Sonic corre para derrotar o Dr. Robotnik e salvar seus amigos, conhecido por sua velocidade e design inovador.",
      genero: "Plataforma",
      dataLancamento: "1991-06-23",
      link: "https://www.sega.com/games/sonic-the-hedgehog",
      plataforma: "Master System"
    },
    {
      titulo: "Alex Kidd in Miracle World",
      descricao: "Um jogo de plataforma e ação onde Alex Kidd deve enfrentar inimigos e superar desafios para resgatar seu irmão e salvar seu reino.",
      genero: "Plataforma",
      dataLancamento: "1986-12-01",
      link: "https://www.sega.com/games/alex-kidd-in-miracle-world",
      plataforma: "Master System"
    },
    {
      titulo: "Castle of Illusion Starring Mickey Mouse",
      descricao: "Um jogo de plataforma com Mickey Mouse como protagonista, onde ele deve enfrentar desafios e inimigos em um castelo encantado para salvar a Minnie.",
      genero: "Plataforma",
      dataLancamento: "1990-11-01",
      link: "https://www.sega.com/games/castle-of-illusion-starring-mickey-mouse",
      plataforma: "Master System"
    },
    {
      titulo: "Shinobi",
      descricao: "Um jogo de ação e luta onde o jogador controla um ninja para resgatar reféns e derrotar inimigos usando habilidades de combate e shurikens.",
      genero: "Ação",
      dataLancamento: "1989-11-01",
      link: "https://www.sega.com/games/shinobi",
      plataforma: "Master System"
    },
    {
      titulo: "Wonder Boy III: The Dragon's Trap",
      descricao: "Um jogo de plataforma e ação onde o jogador deve explorar um mundo mágico e enfrentar inimigos enquanto busca uma maneira de reverter uma maldição.",
      genero: "Plataforma, Ação",
      dataLancamento: "1989-05-01",
      link: "https://www.sega.com/games/wonder-boy-iii-the-dragons-trap",
      plataforma: "Master System"
    },
    {
      titulo: "R-Type",
      descricao: "Um jogo de tiro em que o jogador pilota uma nave espacial para enfrentar ondas de inimigos e chefes em um ambiente espacial desafiador.",
      genero: "Tiro",
      dataLancamento: "1988-01-01",
      link: "https://www.sega.com/games/r-type",
      plataforma: "Master System"
    },
    {
      titulo: "Double Dragon",
      descricao: "Um jogo de ação em que os jogadores lutam contra gangues em um cenário urbano para resgatar a namorada sequestrada de um dos protagonistas.",
      genero: "Ação, Luta",
      dataLancamento: "1988-11-01",
      link: "https://www.sega.com/games/double-dragon",
      plataforma: "Master System"
    },
    {
      titulo: "Tales of the Unknown: Volume I",
      descricao: "Um RPG onde os jogadores exploram masmorras e enfrentam monstros enquanto buscam tesouros e completam missões.",
      genero: "RPG",
      dataLancamento: "1991-05-01",
      link: "https://www.sega.com/games/tales-of-the-unknown-volume-i",
      plataforma: "Master System"
    },
    {
      titulo: "Kung-Fu Master",
      descricao: "Um jogo de luta baseado em artes marciais onde o jogador enfrenta ondas de inimigos para resgatar a sua namorada sequestrada.",
      genero: "Ação, Luta",
      dataLancamento: "1987-10-01",
      link: "https://www.sega.com/games/kung-fu-master",
      plataforma: "Master System"
    },
    {
      titulo: "Zillion",
      descricao: "Um jogo de ação e aventura baseado em uma série de TV japonesa, onde o jogador deve explorar uma estação espacial e enfrentar inimigos para completar missões.",
      genero: "Ação, Aventura",
      dataLancamento: "1987-01-01",
      link: "https://www.sega.com/games/zillion",
      plataforma: "Master System"
    },
    {
      titulo: "Sonic the Hedgehog",
      descricao: "Aventura de plataforma com o ouriço Sonic, conhecido por sua velocidade e design inovador, enfrentando o Dr. Robotnik para salvar seus amigos.",
      genero: "Plataforma",
      dataLancamento: "1991-06-23",
      link: "https://www.sega.com/games/sonic-the-hedgehog",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Streets of Rage II",
      descricao: "Um jogo de luta em que os jogadores enfrentam gangues em uma cidade para limpar as ruas do crime, com um sistema de combate cooperativo.",
      genero: "Ação, Luta",
      dataLancamento: "1992-12-20",
      link: "https://www.sega.com/games/streets-of-rage-ii",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Golden Axe",
      descricao: "Um jogo de ação e aventura com uma temática de fantasia, onde os jogadores escolhem entre diferentes personagens para derrotar um tirano e seus seguidores.",
      genero: "Ação, Aventura",
      dataLancamento: "1989-07-14",
      link: "https://www.sega.com/games/golden-axe",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Gunstar Heroes",
      descricao: "Um jogo de tiro e ação com gráficos vibrantes e um estilo de jogabilidade cooperativo, onde os jogadores enfrentam inimigos em um cenário de ficção científica.",
      genero: "Tiro, Ação",
      dataLancamento: "1993-03-30",
      link: "https://www.sega.com/games/gunstar-heroes",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Altered Beast",
      descricao: "Um jogo de ação onde o jogador assume o papel de um guerreiro ressuscitado que deve enfrentar monstros e deuses mitológicos para salvar a filha de Zeus.",
      genero: "Ação",
      dataLancamento: "1988-08-01",
      link: "https://www.sega.com/games/altered-beast",
      plataforma: "Mega Drive"
    },
    {
      titulo: "ToeJam & Earl",
      descricao: "Um jogo de ação e aventura com uma perspectiva isométrica, onde jogadores controlam dois alienígenas que precisam recuperar partes de sua nave em uma Terra estranha.",
      genero: "Ação, Aventura",
      dataLancamento: "1991-10-01",
      link: "https://www.sega.com/games/toejam-earl",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Phantasy Star IV",
      descricao: "Um RPG clássico com uma história épica, personagens profundos e um sistema de combate por turnos ambientado em um universo de ficção científica.",
      genero: "RPG",
      dataLancamento: "1993-01-01",
      link: "https://www.sega.com/games/phantasy-star-iv",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Castle of Illusion Starring Mickey Mouse",
      descricao: "Um jogo de plataforma com Mickey Mouse como protagonista, onde ele deve enfrentar desafios e inimigos em um castelo encantado para salvar Minnie.",
      genero: "Plataforma",
      dataLancamento: "1990-11-01",
      link: "https://www.sega.com/games/castle-of-illusion-starring-mickey-mouse",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Shinobi III: Return of the Ninja Master",
      descricao: "Um jogo de ação e luta onde o jogador controla um ninja com habilidades especiais para enfrentar uma série de inimigos e chefes desafiadores.",
      genero: "Ação",
      dataLancamento: "1993-11-01",
      link: "https://www.sega.com/games/shinobi-iii-return-of-the-ninja-master",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Ecco the Dolphin",
      descricao: "Um jogo de aventura onde os jogadores controlam um golfinho para explorar o oceano, resolver quebra-cabeças e enfrentar perigos marinhos.",
      genero: "Aventura",
      dataLancamento: "1992-10-01",
      link: "https://www.sega.com/games/ecco-the-dolphin",
      plataforma: "Mega Drive"
    },
    {
      titulo: "Sonic the Hedgehog",
      descricao: "Versão portátil do clássico jogo de plataforma com Sonic, onde ele corre para derrotar o Dr. Robotnik e salvar seus amigos.",
      genero: "Plataforma",
      dataLancamento: "1991-12-01",
      link: "https://www.sega.com/games/sonic-the-hedgehog",
      plataforma: "Game Gear"
    },
    {
      titulo: "Castle of Illusion Starring Mickey Mouse",
      descricao: "Jogo de plataforma onde Mickey Mouse deve superar desafios e inimigos em um castelo encantado para resgatar Minnie.",
      genero: "Plataforma",
      dataLancamento: "1992-06-01",
      link: "https://www.sega.com/games/castle-of-illusion-starring-mickey-mouse",
      plataforma: "Game Gear"
    },
    {
      titulo: "Shinobi",
      descricao: "Um jogo de ação e luta onde o jogador assume o papel de um ninja para resgatar reféns e derrotar inimigos usando habilidades especiais.",
      genero: "Ação",
      dataLancamento: "1991-05-01",
      link: "https://www.sega.com/games/shinobi",
      plataforma: "Game Gear"
    },
    {
      titulo: "The Lion King",
      descricao: "Baseado no filme, um jogo de plataforma onde Simba deve superar desafios e inimigos para reclamar seu lugar como rei da savana.",
      genero: "Plataforma",
      dataLancamento: "1994-11-01",
      link: "https://www.sega.com/games/lion-king",
      plataforma: "Game Gear"
    },
    {
      titulo: "Wonder Boy",
      descricao: "Um jogo de plataforma e ação onde o jogador controla um jovem herói em uma missão para resgatar sua namorada e enfrentar inimigos.",
      genero: "Plataforma, Ação",
      dataLancamento: "1991-01-01",
      link: "https://www.sega.com/games/wonder-boy",
      plataforma: "Game Gear"
    },
    {
      titulo: "Tails Adventure",
      descricao: "Aventura de plataforma onde Tails, o amigo de Sonic, explora ilhas misteriosas, resolve quebra-cabeças e enfrenta inimigos para salvar seu mundo.",
      genero: "Aventura, Plataforma",
      dataLancamento: "1995-09-01",
      link: "https://www.sega.com/games/tails-adventure",
      plataforma: "Game Gear"
    },
    {
      titulo: "Puyo Puyo",
      descricao: "Um jogo de puzzle onde jogadores devem combinar peças coloridas para formar grupos e limpar a tela, conhecido por sua jogabilidade viciante.",
      genero: "Puzzle",
      dataLancamento: "1992-11-01",
      link: "https://www.sega.com/games/puyo-puyo",
      plataforma: "Game Gear"
    },
    {
      titulo: "Batman Returns",
      descricao: "Jogo de ação baseado no filme, onde o jogador controla Batman em uma missão para derrotar vilões e salvar Gotham City.",
      genero: "Ação",
      dataLancamento: "1993-11-01",
      link: "https://www.sega.com/games/batman-returns",
      plataforma: "Game Gear"
    },
    {
      titulo: "Mortal Kombat",
      descricao: "Versão portátil do famoso jogo de luta, com batalhas intensas e movimentos especiais únicos dos personagens.",
      genero: "Luta",
      dataLancamento: "1995-02-01",
      link: "https://www.sega.com/games/mortal-kombat",
      plataforma: "Game Gear"
    },
    {
      titulo: "Aerial Assault",
      descricao: "Um jogo de tiro de rolagem lateral onde o jogador pilota um avião de combate, enfrentando ondas de inimigos e chefes desafiadores.",
      genero: "Tiro",
      dataLancamento: "1992-05-01",
      link: "https://www.sega.com/games/aerial-assault",
      plataforma: "Game Gear"
    },
    {
      titulo: "Bubble Bobble",
      descricao: "Um jogo de puzzle e ação onde os jogadores controlam dois dragões que criam bolhas para capturar inimigos e completar níveis.",
      genero: "Puzzle, Ação",
      dataLancamento: "1992-08-01",
      link: "https://www.sega.com/games/bubble-bobble",
      plataforma: "Game Gear"
    },
    {
      titulo: "Sonic the Hedgehog CD",
      descricao: "Um jogo de plataforma com Sonic, que introduz o conceito de viajar no tempo e conta com novos personagens e mecânicas de jogo.",
      genero: "Plataforma",
      dataLancamento: "1993-09-23",
      link: "https://www.sega.com/games/sonic-the-hedgehog-cd",
      plataforma: "Sega CD"
    },
    {
      titulo: "Nights into Dreams",
      descricao: "Um jogo de ação e aventura em um mundo onírico, onde os jogadores controlam um personagem voador em um ambiente tridimensional para completar várias missões.",
      genero: "Ação, Aventura",
      dataLancamento: "1996-03-01",
      link: "https://www.sega.com/games/nights-into-dreams",
      plataforma: "Sega CD"
    },
    {
      titulo: "Lunar: Silver Star Story Complete",
      descricao: "Um RPG clássico com uma narrativa rica e personagens profundos, onde o jogador embarca em uma jornada épica em um mundo fantástico.",
      genero: "RPG",
      dataLancamento: "1993-09-01",
      link: "https://www.gamefaqs.gamespot.com/psx/198477-lunar-silver-star-story-complete",
      plataforma: "Sega CD"
    },
    {
      titulo: "Shining Force CD",
      descricao: "Um RPG tático com uma história envolvente e batalhas estratégicas, que continua a saga da série Shining Force com novas aventuras e personagens.",
      genero: "RPG Tático",
      dataLancamento: "1994-12-01",
      link: "https://www.gamefaqs.gamespot.com/sgcd/563108-shining-force-cd",
      plataforma: "Sega CD"
    },
    {
      titulo: "Sonic CD",
      descricao: "Um jogo de plataforma com o ouriço Sonic, destacando a viagem no tempo e novos mundos, com gráficos melhorados e uma nova trilha sonora.",
      genero: "Plataforma",
      dataLancamento: "1993-09-23",
      link: "https://www.sega.com/games/sonic-cd",
      plataforma: "Sega CD"
    },
    {
      titulo: "Earthworm Jim: Special Edition",
      descricao: "Um jogo de plataforma baseado no personagem Earthworm Jim, com gráficos aprimorados e novas fases exclusivas para a versão Sega CD.",
      genero: "Plataforma",
      dataLancamento: "1995-11-01",
      link: "https://www.sega.com/games/earthworm-jim-special-edition",
      plataforma: "Sega CD"
    },
    {
      titulo: "Prize Fighter",
      descricao: "Um jogo de boxe com gráficos em FMV (full-motion video) onde os jogadores podem lutar em várias categorias e modos de combate.",
      genero: "Esportes",
      dataLancamento: "1993-06-01",
      link: "https://www.sega.com/games/prize-fighter",
      plataforma: "Sega CD"
    },
    {
      titulo: "Vay",
      descricao: "Um RPG japonês com uma história envolvente e um sistema de combate baseado em turnos, oferecendo uma experiência rica e detalhada.",
      genero: "RPG",
      dataLancamento: "1993-11-01",
      link: "https://www.gamefaqs.gamespot.com/sgcd/563087-vay",
      plataforma: "Sega CD"
    },
    {
      titulo: "Decap Attack",
      descricao: "Um jogo de plataforma e ação onde o jogador controla um múmia em uma missão para derrotar inimigos e superar desafios.",
      genero: "Plataforma, Ação",
      dataLancamento: "1993-03-01",
      link: "https://www.sega.com/games/decap-attack",
      plataforma: "Sega CD"
    },
    {
      titulo: "Road Avenger",
      descricao: "Um jogo de corrida e ação com gráficos em FMV onde o jogador participa de perseguições em alta velocidade e combate contra inimigos.",
      genero: "Corrida, Ação",
      dataLancamento: "1991-12-01",
      link: "https://www.sega.com/games/road-avenger",
      plataforma: "Sega CD"
    },
    {
      titulo: "Night Trap",
      descricao: "Um jogo de aventura e interação em FMV, onde o jogador deve proteger uma casa de uma invasão de vampiros enquanto toma decisões críticas.",
      genero: "Aventura",
      dataLancamento: "1992-08-01",
      link: "https://www.sega.com/games/night-trap",
      plataforma: "Sega CD"
    },
    {
      titulo: "Nights into Dreams",
      descricao: "Um jogo de ação e aventura em um mundo onírico, onde os jogadores controlam um personagem voador em um ambiente tridimensional para completar várias missões.",
      genero: "Ação, Aventura",
      dataLancamento: "1996-03-01",
      link: "https://www.sega.com/games/nights-into-dreams",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Shining Force III",
      descricao: "Um RPG tático com uma narrativa envolvente e batalhas estratégicas, que continua a saga da série Shining Force com novas aventuras e personagens.",
      genero: "RPG Tático",
      dataLancamento: "1997-02-01",
      link: "https://www.gamefaqs.gamespot.com/saturn/197424-shining-force-iii",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Virtua Fighter 2",
      descricao: "Um jogo de luta 3D com um elenco variado de personagens e mecânicas de combate refinadas, conhecido por suas batalhas rápidas e gráficas avançadas.",
      genero: "Luta",
      dataLancamento: "1995-12-01",
      link: "https://www.sega.com/games/virtua-fighter-2",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Sonic 3D Blast",
      descricao: "Um jogo de plataforma com gráficos em 3D onde Sonic deve coletar anéis e enfrentar inimigos em um mundo tridimensional cheio de desafios.",
      genero: "Plataforma",
      dataLancamento: "1996-11-01",
      link: "https://www.sega.com/games/sonic-3d-blast",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Panzer Dragoon Saga",
      descricao: "Um RPG com uma história rica e um sistema de combate baseado em turnos, ambientado em um mundo de fantasia com dragões e batalhas épicas.",
      genero: "RPG",
      dataLancamento: "1998-02-01",
      link: "https://www.gamefaqs.gamespot.com/saturn/198448-panzer-dragoon-saga",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Street Fighter Alpha 3",
      descricao: "Um jogo de luta que apresenta uma grande variedade de personagens e movimentos especiais, com gráficos melhorados e jogabilidade refinada.",
      genero: "Luta",
      dataLancamento: "1998-06-01",
      link: "https://www.sega.com/games/street-fighter-alpha-3",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Radiant Silvergun",
      descricao: "Um jogo de tiro em que os jogadores enfrentam hordas de inimigos com uma variedade de armas e power-ups, conhecido por sua jogabilidade desafiadora e design visual impressionante.",
      genero: "Tiro",
      dataLancamento: "1998-01-01",
      link: "https://www.gamefaqs.gamespot.com/saturn/577323-radiant-silvergun",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Albert Odyssey: Legend of Eldean",
      descricao: "Um RPG com gráficos coloridos e uma história envolvente, onde os jogadores exploram um mundo mágico e enfrentam monstros em batalhas por turnos.",
      genero: "RPG",
      dataLancamento: "1997-10-01",
      link: "https://www.gamefaqs.gamespot.com/saturn/577361-albert-odyssey-legend-of-eldean",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Dark Savior",
      descricao: "Um RPG de ação e aventura onde os jogadores enfrentam desafios em uma ilha cheia de monstros e segredos, com um sistema de combate dinâmico e exploração não linear.",
      genero: "RPG, Ação",
      dataLancamento: "1996-11-01",
      link: "https://www.gamefaqs.gamespot.com/saturn/577258-dark-savior",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Duke Nukem 3D",
      descricao: "Um jogo de tiro em primeira pessoa com humor irreverente e ação intensa, onde o jogador assume o papel de Duke Nukem em uma batalha contra alienígenas e monstros.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "1997-09-01",
      link: "https://www.sega.com/games/duke-nukem-3d",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Virtua Cop 2",
      descricao: "Um jogo de tiro on-rails onde os jogadores assumem o papel de policiais lutando contra criminosos em uma série de missões com ação frenética e gráficos impressionantes.",
      genero: "Tiro",
      dataLancamento: "1996-09-01",
      link: "https://www.sega.com/games/virtua-cop-2",
      plataforma: "Sega Saturn"
    },
    {
      titulo: "Sonic Adventure",
      descricao: "Um jogo de plataforma 3D com Sonic e seus amigos, onde os jogadores exploram mundos vibrantes e enfrentam inimigos em uma missão para salvar o planeta.",
      genero: "Plataforma",
      dataLancamento: "1999-09-09",
      link: "https://www.sega.com/games/sonic-adventure",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Shenmue",
      descricao: "Um RPG de ação e aventura com uma narrativa rica e um mundo aberto detalhado, onde os jogadores seguem a história de Ryo Hazuki em busca de vingança.",
      genero: "RPG, Ação",
      dataLancamento: "1999-12-29",
      link: "https://www.sega.com/games/shenmue",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Jet Set Radio",
      descricao: "Um jogo de ação e esportes com uma estética de arte de rua e uma trilha sonora única, onde os jogadores controlam skatistas em uma cidade futurista.",
      genero: "Ação, Esportes",
      dataLancamento: "2000-06-29",
      link: "https://www.sega.com/games/jet-set-radio",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Crazy Taxi",
      descricao: "Um jogo de corrida e ação onde os jogadores assumem o papel de taxistas em uma cidade aberta, transportando passageiros e realizando manobras radicais.",
      genero: "Corrida, Ação",
      dataLancamento: "1999-10-24",
      link: "https://www.sega.com/games/crazy-taxi",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Sonic Adventure 2",
      descricao: "A sequência de Sonic Adventure, oferecendo novas aventuras com Sonic, Shadow e outros personagens em um mundo cheio de ação e exploração.",
      genero: "Plataforma",
      dataLancamento: "2001-06-23",
      link: "https://www.sega.com/games/sonic-adventure-2",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Phantasy Star Online",
      descricao: "Um RPG online onde os jogadores exploram um universo futurista, completam missões e enfrentam inimigos em um ambiente de jogo multiplayer.",
      genero: "RPG Online",
      dataLancamento: "2000-01-21",
      link: "https://www.sega.com/games/phantasy-star-online",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Resident Evil Code: Veronica",
      descricao: "Um jogo de survival horror com uma história envolvente e um cenário tenso, onde os jogadores enfrentam criaturas horríveis e resolvem quebra-cabeças para sobreviver.",
      genero: "Survival Horror",
      dataLancamento: "2000-02-03",
      link: "https://www.capcom.com/residentevil/code-veronica",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Soulcalibur",
      descricao: "Um jogo de luta 3D com uma vasta gama de personagens e batalhas épicas, conhecido por sua jogabilidade profunda e gráficos impressionantes.",
      genero: "Luta",
      dataLancamento: "1999-09-09",
      link: "https://www.bandainamcoent.com/soulcalibur",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Skies of Arcadia",
      descricao: "Um RPG de aventura e exploração em um mundo de céu e ilhas flutuantes, com uma história épica e batalhas baseadas em turnos.",
      genero: "RPG",
      dataLancamento: "2000-10-24",
      link: "https://www.sega.com/games/skies-of-arcadia",
      plataforma: "Dreamcast"
    },
    {
      titulo: "Jet Grind Radio",
      descricao: "Versão do Jet Set Radio para o Dreamcast, com uma jogabilidade de skate e uma estética vibrante inspirada na arte urbana.",
      genero: "Ação, Esportes",
      dataLancamento: "2000-06-29",
      link: "https://www.sega.com/games/jet-grind-radio",
      plataforma: "Dreamcast"
    },
// Consoles da Sony
    {
      titulo: "Final Fantasy VII",
      descricao: "Um RPG épico que segue a história de Cloud Strife e seus amigos enquanto eles lutam contra a megacorporação Shinra e o vilão Sephiroth para salvar o planeta.",
      genero: "RPG",
      dataLancamento: "1997-08-15",
      link: "https://www.square-enix.com/finalfantasy/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Metal Gear Solid",
      descricao: "Um jogo de ação e furtividade onde o jogador assume o papel do agente Solid Snake, enfrentando uma ameaça nuclear e um grupo terrorista em uma base militar.",
      genero: "Ação, Furtividade",
      dataLancamento: "1998-10-21",
      link: "https://www.konami.com/games/mgs/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Castlevania: Symphony of the Night",
      descricao: "Um jogo de ação e aventura com uma rica atmosfera gótica e uma combinação de combate e exploração em um castelo repleto de monstros e segredos.",
      genero: "Ação, Aventura",
      dataLancamento: "1997-10-02",
      link: "https://www.konami.com/castlevania/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Gran Turismo",
      descricao: "Um simulador de corrida que oferece uma experiência realista com uma grande variedade de carros e pistas, conhecido por seu detalhamento e física de direção.",
      genero: "Corrida",
      dataLancamento: "1997-12-23",
      link: "https://www.granturismo.com/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Crash Bandicoot",
      descricao: "Um jogo de plataforma onde o jogador controla Crash Bandicoot em sua jornada para derrotar o vilão Dr. Neo Cortex e salvar sua ilha natal.",
      genero: "Plataforma",
      dataLancamento: "1996-09-09",
      link: "https://www.crashbandicoot.com/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Resident Evil",
      descricao: "Um jogo de survival horror onde os jogadores exploram uma mansão cheia de zumbis e criaturas grotescas enquanto tentam descobrir a verdade por trás de uma série de eventos sobrenaturais.",
      genero: "Survival Horror",
      dataLancamento: "1996-03-22",
      link: "https://www.residentevil.com/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Tekken 3",
      descricao: "Um jogo de luta 3D que apresenta um elenco diversificado de personagens e uma jogabilidade refinada, conhecido por suas batalhas rápidas e técnicas.",
      genero: "Luta",
      dataLancamento: "1998-11-02",
      link: "https://www.tekken.com/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Silent Hill",
      descricao: "Um jogo de survival horror com uma atmosfera aterrorizante e uma narrativa profunda, onde os jogadores exploram a cidade de Silent Hill em busca de respostas e sobrevivência.",
      genero: "Survival Horror",
      dataLancamento: "1999-02-23",
      link: "https://www.konami.com/games/silenthill/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Final Fantasy Tactics",
      descricao: "Um RPG tático com um sistema de combate baseado em turnos e uma narrativa envolvente que se passa em um mundo medieval repleto de intrigas e batalhas.",
      genero: "RPG Tático",
      dataLancamento: "1998-06-20",
      link: "https://www.square-enix.com/finalfantasy/tactics/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Spyro the Dragon",
      descricao: "Um jogo de plataforma 3D onde os jogadores controlam Spyro, um dragão jovem em uma missão para resgatar seus amigos e derrotar inimigos em um mundo colorido e vibrante.",
      genero: "Plataforma",
      dataLancamento: "1998-09-10",
      link: "https://www.spyrothedragon.com/",
      plataforma: "PlayStation"
    },
    {
      titulo: "Grand Theft Auto: San Andreas",
      descricao: "Um jogo de ação e aventura em um mundo aberto que segue a história de CJ, um gangster que retorna para sua cidade natal para vingar a morte de sua mãe e restaurar o controle de sua gangue.",
      genero: "Ação, Aventura",
      dataLancamento: "2004-10-26",
      link: "https://www.rockstargames.com/sanandreas",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Metal Gear Solid 2: Sons of Liberty",
      descricao: "Um jogo de ação e furtividade onde os jogadores controlam o agente Snake em uma missão para desmantelar uma nova arma nuclear e lidar com uma organização terrorista.",
      genero: "Ação, Furtividade",
      dataLancamento: "2001-11-13",
      link: "https://www.konami.com/games/mgs2/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Shadow of the Colossus",
      descricao: "Um jogo de ação e aventura em que os jogadores controlam um jovem herói que deve derrotar enormes colossos para trazer sua amada de volta à vida, em um mundo vasto e desolado.",
      genero: "Ação, Aventura",
      dataLancamento: "2005-10-18",
      link: "https://www.playstation.com/en-us/games/shadow-of-the-colossus/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Final Fantasy X",
      descricao: "Um RPG que segue a história de Tidus e Yuna enquanto eles viajam por um mundo fantástico para derrotar uma entidade conhecida como Sin e salvar o mundo de Spira.",
      genero: "RPG",
      dataLancamento: "2001-12-17",
      link: "https://www.finalfantasyx.com/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "God of War",
      descricao: "Um jogo de ação e aventura baseado na mitologia grega, onde os jogadores controlam Kratos, um guerreiro espartano em busca de vingança contra Ares, o deus da guerra.",
      genero: "Ação, Aventura",
      dataLancamento: "2005-03-22",
      link: "https://www.playstation.com/en-us/games/god-of-war/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Tekken 5",
      descricao: "Um jogo de luta com um elenco diversificado de personagens e batalhas rápidas, conhecido por suas mecânicas de combate refinadas e gráficos melhorados.",
      genero: "Luta",
      dataLancamento: "2005-02-24",
      link: "https://www.tekken.com/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Gran Turismo 4",
      descricao: "Um simulador de corrida com uma vasta gama de carros e pistas, oferecendo uma experiência realista e detalhada com gráficos impressionantes e física de direção avançada.",
      genero: "Corrida",
      dataLancamento: "2004-12-28",
      link: "https://www.granturismo.com/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Jak and Daxter: The Precursor Legacy",
      descricao: "Um jogo de plataforma 3D que segue as aventuras de Jak e seu amigo Daxter enquanto exploram um mundo aberto cheio de inimigos e quebra-cabeças.",
      genero: "Plataforma",
      dataLancamento: "2001-12-03",
      link: "https://www.naughtydog.com/jak-and-daxter",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Kingdom Hearts",
      descricao: "Um RPG de ação que mistura personagens e mundos da Disney com os da série Final Fantasy, seguindo a jornada de Sora em sua luta contra as forças das trevas.",
      genero: "RPG de Ação",
      dataLancamento: "2002-03-28",
      link: "https://www.kingdomhearts.com/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Silent Hill 2",
      descricao: "Um jogo de survival horror onde os jogadores exploram a sombria cidade de Silent Hill e enfrentam seus próprios medos e traumas em uma narrativa perturbadora.",
      genero: "Survival Horror",
      dataLancamento: "2001-09-24",
      link: "https://www.konami.com/games/silenthill2/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "Ratchet & Clank",
      descricao: "Um jogo de ação e plataforma onde os jogadores controlam Ratchet e seu robô amigo Clank enquanto viajam por vários planetas e enfrentam inimigos em um mundo cheio de gadgets e armas.",
      genero: "Ação, Plataforma",
      dataLancamento: "2002-11-04",
      link: "https://www.ratchetandclank.com/",
      plataforma: "PlayStation 2"
    },
    {
      titulo: "God of War: Chains of Olympus",
      descricao: "Um jogo de ação e aventura que serve como uma prequela para a série God of War, seguindo Kratos enquanto ele enfrenta desafios mitológicos para proteger o Olimpo.",
      genero: "Ação, Aventura",
      dataLancamento: "2008-03-04",
      link: "https://www.playstation.com/en-us/games/god-of-war-chains-of-olympus/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Persona 3 Portable",
      descricao: "Um RPG de simulação de vida e dungeon crawling onde os jogadores assumem o papel de um estudante que deve combater sombras durante a noite e equilibrar a vida escolar durante o dia.",
      genero: "RPG",
      dataLancamento: "2009-07-06",
      link: "https://www.atlus.com/persona3portable/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Monster Hunter Freedom Unite",
      descricao: "Um jogo de ação e RPG onde os jogadores caçam monstros gigantes em um mundo aberto, coletam recursos e aprimoram suas habilidades e equipamentos.",
      genero: "Ação, RPG",
      dataLancamento: "2009-06-23",
      link: "https://www.monsterhunter.com/freedomunite/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Final Fantasy Tactics: The War of the Lions",
      descricao: "Um RPG tático com um sistema de combate baseado em turnos e uma narrativa rica, ambientado em um mundo medieval repleto de intrigas políticas e batalhas épicas.",
      genero: "RPG Tático",
      dataLancamento: "2007-10-09",
      link: "https://www.square-enix.com/finalfantasy/tactics/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Daxter",
      descricao: "Um jogo de plataforma e ação que segue as aventuras de Daxter, o amigo de Jak, enquanto ele tenta resgatar seu parceiro e derrotar inimigos em um mundo vibrante e dinâmico.",
      genero: "Plataforma, Ação",
      dataLancamento: "2006-03-14",
      link: "https://www.naughtydog.com/daxter/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Metal Gear Solid: Portable Ops",
      descricao: "Um jogo de ação e furtividade onde os jogadores controlam o soldado Naked Snake em uma missão para reunir sua própria unidade de soldados e lidar com ameaças globais.",
      genero: "Ação, Furtividade",
      dataLancamento: "2006-12-12",
      link: "https://www.konami.com/games/mgsportableops/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Ratchet & Clank: Size Matters",
      descricao: "Um jogo de ação e plataforma que continua as aventuras de Ratchet e Clank em uma nova jornada cheia de inimigos, armas e planetas para explorar.",
      genero: "Ação, Plataforma",
      dataLancamento: "2007-02-19",
      link: "https://www.ratchetandclank.com/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Kingdom Hearts: Birth by Sleep",
      descricao: "Um RPG de ação que explora a história prequel da série Kingdom Hearts, seguindo três personagens principais enquanto eles lutam contra as forças das trevas e exploram mundos diversos.",
      genero: "RPG de Ação",
      dataLancamento: "2010-09-07",
      link: "https://www.kingdomhearts.com/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Lumines",
      descricao: "Um jogo de quebra-cabeça e ritmo que combina blocos caindo com uma trilha sonora envolvente, desafiando os jogadores a alinhar peças para criar linhas e marcar pontos.",
      genero: "Quebra-Cabeça",
      dataLancamento: "2005-12-12",
      link: "https://www.lumines.com/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "Killzone: Liberation",
      descricao: "Um jogo de ação tática com uma perspectiva isométrica, onde os jogadores assumem o papel de um soldado em uma missão para combater forças inimigas e completar objetivos estratégicos.",
      genero: "Ação Tática",
      dataLancamento: "2006-10-31",
      link: "https://www.killzone.com/",
      plataforma: "PlayStation Portable"
    },
    {
      titulo: "The Last of Us",
      descricao: "Um jogo de ação e aventura em um mundo pós-apocalíptico onde os jogadores seguem a história de Joel e Ellie enquanto lutam pela sobrevivência e exploram um ambiente devastado.",
      genero: "Ação, Aventura",
      dataLancamento: "2013-06-14",
      link: "https://www.playstation.com/en-us/games/the-last-of-us/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Uncharted 2: Among Thieves",
      descricao: "Um jogo de ação e aventura que segue o caçador de tesouros Nathan Drake em sua busca por um artefato lendário, repleto de sequências de ação, exploração e quebra-cabeças.",
      genero: "Ação, Aventura",
      dataLancamento: "2009-10-13",
      link: "https://www.playstation.com/en-us/games/uncharted-2-among-thieves/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Gran Turismo 5",
      descricao: "Um simulador de corrida com gráficos realistas e uma extensa seleção de carros e pistas, oferecendo uma experiência de condução detalhada e imersiva.",
      genero: "Corrida",
      dataLancamento: "2010-11-24",
      link: "https://www.granturismo.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Metal Gear Solid 4: Guns of the Patriots",
      descricao: "Um jogo de ação e furtividade que encerra a saga de Solid Snake, com uma narrativa complexa e uma mistura de ação intensa e stealth em um futuro distópico.",
      genero: "Ação, Furtividade",
      dataLancamento: "2008-06-12",
      link: "https://www.konami.com/games/mgs4/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Killzone 2",
      descricao: "Um jogo de tiro em primeira pessoa que coloca os jogadores na pele de um soldado lutando contra as forças inimigas em um ambiente de guerra futurista e intenso.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2009-02-27",
      link: "https://www.killzone.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "LittleBigPlanet",
      descricao: "Um jogo de plataforma criativo que permite aos jogadores explorar mundos, resolver quebra-cabeças e criar seus próprios níveis e personagens, com uma abordagem única e personalizável.",
      genero: "Plataforma",
      dataLancamento: "2008-10-27",
      link: "https://www.littlebigplanet.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Journey",
      descricao: "Um jogo de aventura que oferece uma experiência emocional e visualmente impressionante, onde os jogadores exploram um vasto deserto e buscam chegar ao topo de uma montanha distante.",
      genero: "Aventura",
      dataLancamento: "2012-03-13",
      link: "https://www.journeythegame.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Resident Evil 5",
      descricao: "Um jogo de survival horror com uma abordagem mais voltada para a ação, seguindo os protagonistas Chris Redfield e Sheva Alomar enquanto enfrentam uma nova ameaça biológica na África.",
      genero: "Survival Horror",
      dataLancamento: "2009-03-13",
      link: "https://www.residentevil.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Demon's Souls",
      descricao: "Um RPG de ação conhecido por sua dificuldade desafiadora e atmosfera sombria, onde os jogadores exploram um mundo devastado e enfrentam inimigos e chefes implacáveis.",
      genero: "RPG de Ação",
      dataLancamento: "2009-02-05",
      link: "https://www.demons-souls.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Ratchet & Clank Future: Tools of Destruction",
      descricao: "Um jogo de ação e plataforma que segue as aventuras de Ratchet e Clank em uma nova jornada, cheia de armas inovadoras e mundos diversos para explorar.",
      genero: "Ação, Plataforma",
      dataLancamento: "2007-10-23",
      link: "https://www.ratchetandclank.com/",
      plataforma: "PlayStation 3"
    },
    {
      titulo: "Persona 4 Golden",
      descricao: "Uma versão aprimorada do popular RPG Persona 4, com gráficos melhorados, novos eventos e personagens adicionais, mantendo a narrativa envolvente e a jogabilidade estratégica.",
      genero: "RPG",
      dataLancamento: "2012-11-20",
      link: "https://www.atlus.com/persona4golden/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Uncharted: Golden Abyss",
      descricao: "Um jogo de ação e aventura que serve como uma prequela para a série Uncharted, seguindo Nathan Drake em sua jornada para desvendar um antigo mistério em uma aventura repleta de ação e exploração.",
      genero: "Ação, Aventura",
      dataLancamento: "2011-11-15",
      link: "https://www.playstation.com/en-us/games/uncharted-golden-abyss/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Killzone: Mercenary",
      descricao: "Um jogo de tiro em primeira pessoa que oferece uma experiência gráfica impressionante e uma narrativa envolvente, colocando os jogadores no meio de intensas batalhas futuristas.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2013-09-10",
      link: "https://www.killzone.com/mercenary/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Gravity Rush",
      descricao: "Um jogo de ação e aventura que permite aos jogadores manipular a gravidade, oferecendo uma experiência única de exploração e combate em um mundo estilizado e dinâmico.",
      genero: "Ação, Aventura",
      dataLancamento: "2012-02-22",
      link: "https://www.gravityrush.com/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Soul Sacrifice",
      descricao: "Um RPG de ação e combate onde os jogadores enfrentam monstros poderosos e tomam decisões difíceis que afetam a narrativa e o progresso do jogo, com uma abordagem sombria e emocional.",
      genero: "RPG de Ação",
      dataLancamento: "2013-04-30",
      link: "https://www.soulsacrifice.com/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Tearaway",
      descricao: "Um jogo de plataforma e aventura que utiliza as funcionalidades únicas do PS Vita, como a tela de toque e o giroscópio, para criar uma experiência interativa e encantadora no mundo de papel de Tearaway.",
      genero: "Plataforma, Aventura",
      dataLancamento: "2013-11-22",
      link: "https://www.tearawegame.com/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Danganronpa: Trigger Happy Havoc",
      descricao: "Um jogo de mistério e visual novel onde os jogadores investigam assassinatos e participam de julgamentos, com uma narrativa envolvente e personagens cativantes em uma escola cheia de segredos.",
      genero: "Mistério, Visual Novel",
      dataLancamento: "2014-02-11",
      link: "https://www.danganronpa.com/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Virtua Tennis 4",
      descricao: "Um jogo de esportes de tênis com gráficos realistas e uma jogabilidade refinada, oferecendo uma ampla gama de modos de jogo e um elenco de jogadores profissionais.",
      genero: "Esportes",
      dataLancamento: "2012-05-22",
      link: "https://www.sega.com/virtuatennis4/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "LittleBigPlanet PS Vita",
      descricao: "Uma versão para PS Vita do popular jogo de plataforma criativo LittleBigPlanet, aproveitando as funcionalidades do console para permitir aos jogadores criar, compartilhar e explorar níveis únicos.",
      genero: "Plataforma",
      dataLancamento: "2012-09-19",
      link: "https://www.littlebigplanet.com/",
      plataforma: "PlayStation Vita"
    },
    {
      titulo: "Ragnarok Odyssey",
      descricao: "Um RPG de ação onde os jogadores exploram masmorras, enfrentam monstros e completam missões em um mundo fantástico, com um sistema de combate dinâmico e cooperativo.",
      genero: "RPG de Ação",
      dataLancamento: "2012-10-30",
      link: "https://www.ragnarokodyssey.com/",
      plataforma: "PlayStation Vita"
    },
// Consoles da Microsoft
    {
      titulo: "Halo: Combat Evolved",
      descricao: "Um jogo de tiro em primeira pessoa que deu início à icônica série Halo, onde os jogadores assumem o papel do Master Chief e lutam contra uma aliança alienígena em uma guerra intergaláctica.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2001-11-15",
      link: "https://www.halowaypoint.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Fable",
      descricao: "Um RPG de ação que permite aos jogadores moldar seu personagem e suas escolhas ao longo de uma narrativa rica, com um mundo de fantasia e uma série de missões e interações significativas.",
      genero: "RPG de Ação",
      dataLancamento: "2004-09-14",
      link: "https://www.fable.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Star Wars: Knights of the Old Republic",
      descricao: "Um RPG ambientado no universo Star Wars, onde os jogadores exploram uma galáxia antiga e fazem escolhas que afetam o equilíbrio entre o lado luminoso e o lado sombrio da Força.",
      genero: "RPG",
      dataLancamento: "2003-07-16",
      link: "https://www.swkotor.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "The Elder Scrolls III: Morrowind",
      descricao: "Um RPG de mundo aberto com um vasto ambiente para explorar, onde os jogadores assumem o papel de um herói em uma jornada épica para salvar a terra de uma ameaça iminente.",
      genero: "RPG",
      dataLancamento: "2002-05-01",
      link: "https://elderscrolls.bethesda.net/en/morrowind",
      plataforma: "Xbox"
    },
    {
      titulo: "Jet Set Radio Future",
      descricao: "Um jogo de ação e aventura com uma estética vibrante e uma trilha sonora marcante, onde os jogadores controlam skaters em um mundo futurista e colorido, realizando manobras e escapando da polícia.",
      genero: "Ação, Aventura",
      dataLancamento: "2002-02-25",
      link: "https://www.sega.com/jetsetradiofuture/",
      plataforma: "Xbox"
    },
    {
      titulo: "Splinter Cell",
      descricao: "Um jogo de furtividade onde os jogadores assumem o papel de um agente secreto em missões de espionagem e infiltração, utilizando uma variedade de ferramentas e técnicas para completar objetivos sem serem detectados.",
      genero: "Furtividade",
      dataLancamento: "2002-11-18",
      link: "https://www.splintercell.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Crimson Skies: High Road to Revenge",
      descricao: "Um jogo de combate aéreo que mistura ação e história, onde os jogadores pilotam aviões em missões intensas e emocionantes em um cenário de aventura dos anos 1930.",
      genero: "Combate Aéreo",
      dataLancamento: "2003-10-07",
      link: "https://www.crimsonskies.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Brute Force",
      descricao: "Um jogo de tiro em terceira pessoa que foca na ação cooperativa e na estratégia, onde os jogadores controlam um esquadrão de soldados em uma série de missões para salvar a galáxia de ameaças alienígenas.",
      genero: "Tiro em Terceira Pessoa",
      dataLancamento: "2003-05-27",
      link: "https://www.bruteforcegame.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Forza Motorsport",
      descricao: "Um simulador de corrida com uma ampla gama de carros e pistas, oferecendo uma experiência realista e detalhada para os entusiastas de corridas e automobilismo.",
      genero: "Corrida",
      dataLancamento: "2005-05-03",
      link: "https://www.forzamotorsport.net/",
      plataforma: "Xbox"
    },
    {
      titulo: "Halo 2",
      descricao: "A sequência do aclamado Halo: Combat Evolved, com uma história expandida e novas mecânicas de jogo, onde os jogadores continuam a luta contra a ameaça alienígena e exploram novos mundos.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2004-11-09",
      link: "https://www.halowaypoint.com/",
      plataforma: "Xbox"
    },
    {
      titulo: "Halo 3",
      descricao: "O terceiro jogo da série Halo, que continua a épica batalha entre a humanidade e a aliança alienígena Covenant. Os jogadores assumem o papel do Master Chief em uma missão para salvar a galáxia.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2007-09-25",
      link: "https://www.halowaypoint.com/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Gears of War",
      descricao: "Um jogo de tiro em terceira pessoa que segue o soldado Marcus Fenix e seus companheiros na luta contra uma raça de criaturas subterrâneas conhecidas como Locust, com foco em ação tática e cooperação.",
      genero: "Tiro em Terceira Pessoa",
      dataLancamento: "2006-11-07",
      link: "https://www.gearsofwar.com/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "The Elder Scrolls V: Skyrim",
      descricao: "Um RPG de mundo aberto que permite aos jogadores explorar o vasto continente de Skyrim, realizando missões e interagindo com uma rica história e um mundo cheio de magia e aventura.",
      genero: "RPG",
      dataLancamento: "2011-11-11",
      link: "https://elderscrolls.bethesda.net/en/skyrim",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Red Dead Redemption",
      descricao: "Um jogo de ação e aventura ambientado no Velho Oeste, onde os jogadores assumem o papel de John Marston, um ex-foragido que busca capturar antigos companheiros de gangue enquanto explora um mundo aberto e dinâmico.",
      genero: "Ação, Aventura",
      dataLancamento: "2010-05-18",
      link: "https://www.rockstargames.com/reddeadredemption",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Mass Effect",
      descricao: "Um RPG de ação espacial que segue o comandante Shepard enquanto ele explora a galáxia, toma decisões importantes e enfrenta uma ameaça que pode destruir a raça humana e outras espécies.",
      genero: "RPG de Ação",
      dataLancamento: "2007-11-20",
      link: "https://www.masseffect.com/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Forza Motorsport 3",
      descricao: "Um simulador de corrida que oferece uma experiência detalhada e realista, com uma vasta gama de carros e pistas, além de um modo de carreira e várias opções de personalização.",
      genero: "Corrida",
      dataLancamento: "2009-10-27",
      link: "https://www.forzamotorsport.net/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Bioshock",
      descricao: "Um jogo de tiro em primeira pessoa com uma narrativa envolvente, ambientado em uma cidade subaquática decadente chamada Rapture, onde os jogadores enfrentam inimigos e descobrem segredos sombrios.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2007-08-21",
      link: "https://www.2k.com/games/bioshock/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Alan Wake",
      descricao: "Um thriller psicológico que segue o escritor Alan Wake enquanto ele enfrenta seus piores medos e luta contra uma força obscura em uma pequena cidade, com uma narrativa cinematográfica e atmosfera intensa.",
      genero: "Thriller Psicológico",
      dataLancamento: "2010-05-14",
      link: "https://www.alanwake.com/",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Dead Space",
      descricao: "Um jogo de survival horror ambientado no espaço, onde os jogadores enfrentam horrores alienígenas em uma estação espacial, com uma atmosfera tensa e elementos de combate e sobrevivência.",
      genero: "Survival Horror",
      dataLancamento: "2008-10-14",
      link: "https://www.ea.com/games/dead-space",
      plataforma: "Xbox 360"
    },
    {
      titulo: "Halo: Reach",
      descricao: "Um jogo de tiro em primeira pessoa que serve como uma prequela para a série Halo, mostrando a última luta dos Spartans contra a invasão Covenant em um planeta devastado.",
      genero: "Tiro em Primeira Pessoa",
      dataLancamento: "2010-09-14",
      link: "https://www.halowaypoint.com/",
      plataforma: "Xbox 360"
    }
];