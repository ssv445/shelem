const images = {
  spade: {
    '2': require('../images/cards/S_2.png'),
    '3': require('../images/cards/S_3.png'),
    '4': require('../images/cards/S_4.png'),
    '5': require('../images/cards/S_5.png'),
    '6': require('../images/cards/S_6.png'),
    '7': require('../images/cards/S_7.png'),
    '8': require('../images/cards/S_8.png'),
    '9': require('../images/cards/S_9.png'),
    '10': require('../images/cards/S_10.png'),
    'J': require('../images/cards/S_J.png'),
    'Q': require('../images/cards/S_Q.png'),
    'K': require('../images/cards/S_K.png'),
    'A': require('../images/cards/S_A.png'),
  },
  diamond: {
    '2': require('../images/cards/D_2.png'),
    '3': require('../images/cards/D_3.png'),
    '4': require('../images/cards/D_4.png'),
    '5': require('../images/cards/D_5.png'),
    '6': require('../images/cards/D_6.png'),
    '7': require('../images/cards/D_7.png'),
    '8': require('../images/cards/D_8.png'),
    '9': require('../images/cards/D_9.png'),
    '10': require('../images/cards/D_10.png'),
    'J': require('../images/cards/D_J.png'),
    'Q': require('../images/cards/D_Q.png'),
    'K': require('../images/cards/D_K.png'),
    'A': require('../images/cards/D_A.png'),
  },
  club: {
    '2': require('../images/cards/C_2.png'),
    '3': require('../images/cards/C_3.png'),
    '4': require('../images/cards/C_4.png'),
    '5': require('../images/cards/C_5.png'),
    '6': require('../images/cards/C_6.png'),
    '7': require('../images/cards/C_7.png'),
    '8': require('../images/cards/C_8.png'),
    '9': require('../images/cards/C_9.png'),
    '10': require('../images/cards/C_10.png'),
    'J': require('../images/cards/C_J.png'),
    'Q': require('../images/cards/C_Q.png'),
    'K': require('../images/cards/C_K.png'),
    'A': require('../images/cards/C_A.png'),
  },
  heart: {
    '2': require('../images/cards/H_2.png'),
    '3': require('../images/cards/H_3.png'),
    '4': require('../images/cards/H_4.png'),
    '5': require('../images/cards/H_5.png'),
    '6': require('../images/cards/H_6.png'),
    '7': require('../images/cards/H_7.png'),
    '8': require('../images/cards/H_8.png'),
    '9': require('../images/cards/H_9.png'),
    '10': require('../images/cards/H_10.png'),
    'J': require('../images/cards/H_J.png'),
    'Q': require('../images/cards/H_Q.png'),
    'K': require('../images/cards/H_K.png'),
    'A': require('../images/cards/H_A.png'),
  },
}

export function getCardImage(card) {
  return images[card.suit][card.value];
}