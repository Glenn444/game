export const wordPaths = [
  {
    start_word: 'LIGHT',
    target_word: 'DREAM',
    theme: 'Illumination to Creativity',
    choices: [
      [
        { word: 'SHADOW', type: 'green', points: 100 },
        { word: 'LAMP', type: 'yellow', points: 75 },
        { word: 'BULB', type: 'red', points: 50 },
      ],
      [
        { word: 'DARKNESS', type: 'green', points: 100 },
        { word: 'NIGHT', type: 'yellow', points: 75 },
        { word: 'DIM', type: 'red', points: 50 },
      ],
      [
        { word: 'SLEEP', type: 'green', points: 100 },
        { word: 'REST', type: 'yellow', points: 75 },
        { word: 'TIRED', type: 'red', points: 50 },
      ],
      [
        { word: 'DREAM', type: 'green', points: 100 },
        { word: 'VISION', type: 'yellow', points: 75 },
        { word: 'FANTASY', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'A result of light is...',
      2: 'A type of light absence is...',
      3: 'Often happens after being...',
      4: 'Occurs during...',
    },
    explanations: [
      'Light creates shadows.',
      'A shadow is a form of darkness.',
      'Darkness is often associated with sleep.',
      'Dreams occur during sleep.',
    ],
  },
  {
    start_word: 'CITY',
    target_word: 'VIBRATION',
    theme: 'Urban to Natural Forces',
    choices: [
      [
        { word: 'TRAFFIC', type: 'green', points: 100 },
        { word: 'BUILDING', type: 'yellow', points: 75 },
        { word: 'STREET', type: 'red', points: 50 },
      ],
      [
        { word: 'HORN', type: 'green', points: 100 },
        { word: 'CAR', type: 'yellow', points: 75 },
        { word: 'ROAD', type: 'red', points: 50 },
      ],
      [
        { word: 'SOUND', type: 'green', points: 100 },
        { word: 'NOISE', type: 'yellow', points: 75 },
        { word: 'BEEP', type: 'red', points: 50 },
      ],
      [
        { word: 'VIBRATION', type: 'green', points: 100 },
        { word: 'WAVE', type: 'yellow', points: 75 },
        { word: 'MUSIC', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'City often has...',
      2: 'Common sound in traffic is...',
      3: 'A type of sensory perception is...',
      4: 'A physical wave of movement is...',
    },
    explanations: [
      'Cities often have a lot of traffic.',
      'Car horns are common in traffic.',
      'A horn produces a sound.',
      'Sound is a form of vibration.',
    ],
  },
  {
    start_word: 'WATER',
    target_word: 'WINDOW',
    theme: 'Necessity to Perspective',
    choices: [
      [
        { word: 'THIRST', type: 'green', points: 100 },
        { word: 'BOTTLE', type: 'yellow', points: 75 },
        { word: 'LAKE', type: 'red', points: 50 },
      ],
      [
        { word: 'DRINK', type: 'green', points: 100 },
        { word: 'DRY', type: 'yellow', points: 75 },
        { word: 'WATER', type: 'red', points: 50 },
      ],
      [
        { word: 'GLASS', type: 'green', points: 100 },
        { word: 'CUP', type: 'yellow', points: 75 },
        { word: 'STRAW', type: 'red', points: 50 },
      ],
      [
        { word: 'WINDOW', type: 'green', points: 100 },
        { word: 'MIRROR', type: 'yellow', points: 75 },
        { word: 'BOTTLE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Caused by lack of...',
      2: 'An action involving...',
      3: 'Often made of...',
      4: 'A view is seen through a...',
    },
    explanations: [
      'Lack of water causes thirst.',
      'Thirst makes you want to drink.',
      'Drinks are often served in a glass.',
      'Windows are made of glass.',
    ],
  },
  {
    start_word: 'FOOD',
    target_word: 'WHEEL',
    theme: 'Sustenance to Continuity',
    choices: [
      [
        { word: 'HUNGER', type: 'green', points: 100 },
        { word: 'MEAL', type: 'yellow', points: 75 },
        { word: 'PLATE', type: 'red', points: 50 },
      ],
      [
        { word: 'FARM', type: 'green', points: 100 },
        { word: 'EAT', type: 'yellow', points: 75 },
        { word: 'APPETITE', type: 'red', points: 50 },
      ],
      [
        { word: 'TRACTOR', type: 'green', points: 100 },
        { word: 'FIELD', type: 'yellow', points: 75 },
        { word: 'BARN', type: 'red', points: 50 },
      ],
      [
        { word: 'WHEEL', type: 'green', points: 100 },
        { word: 'ENGINE', type: 'yellow', points: 75 },
        { word: 'FARMER', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Caused by lack of...',
      2: 'A place that produces...',
      3: 'Used on an agricultural location...',
      4: 'A circular component of...',
    },
    explanations: [
      'Lack of food causes hunger.',
      'Farms produce food.',
      'Tractors are used on farms.',
      'A tractor has wheels.',
    ],
  },
  {
    start_word: 'MONEY',
    target_word: 'FIELD',
    theme: 'Value to Nature',
    choices: [
      [
        { word: 'WALLET', type: 'green', points: 100 },
        { word: 'BANK', type: 'yellow', points: 75 },
        { word: 'COIN', type: 'red', points: 50 },
      ],
      [
        { word: 'LEATHER', type: 'green', points: 100 },
        { word: 'POCKET', type: 'yellow', points: 75 },
        { word: 'CARD', type: 'red', points: 50 },
      ],
      [
        { word: 'COW', type: 'green', points: 100 },
        { word: 'BELT', type: 'yellow', points: 75 },
        { word: 'SHOE', type: 'red', points: 50 },
      ],
      [
        { word: 'FIELD', type: 'green', points: 100 },
        { word: 'MILK', type: 'yellow', points: 75 },
        { word: 'FARM', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Often kept in a...',
      2: 'Material often used for...',
      3: 'A source of leather is a...',
      4: 'Where cows graze is a...',
    },
    explanations: [
      'Money is often kept in a wallet.',
      'Wallets are often made of leather.',
      'Leather comes from cows.',
      'Cows graze in fields.',
    ],
  },
  {
    start_word: 'STORY',
    target_word: 'MATHEMATICS',
    theme: 'Narrative to Challenge',
    choices: [
      [
        { word: 'PAGE', type: 'green', points: 100 },
        { word: 'BOOK', type: 'yellow', points: 75 },
        { word: 'PLOT', type: 'red', points: 50 },
      ],
      [
        { word: 'NUMBER', type: 'green', points: 100 },
        { word: 'TEXT', type: 'yellow', points: 75 },
        { word: 'PAPER', type: 'red', points: 50 },
      ],
      [
        { word: 'COUNTING', type: 'green', points: 100 },
        { word: 'DIGIT', type: 'yellow', points: 75 },
        { word: 'AMOUNT', type: 'red', points: 50 },
      ],
      [
        { word: 'MATHEMATICS', type: 'green', points: 100 },
        { word: 'ADDING', type: 'yellow', points: 75 },
        { word: 'SEQUENCE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'A part of a book is a...',
      2: 'A key element of text is...',
      3: 'A basic mathematical action is...',
      4: 'A field of numerical reasoning is...',
    },
    explanations: [
      'A story is written on pages.',
      'Pages are usually numbered.',
      'Numbers are used for counting.',
      'Counting is a basic concept in mathematics.',
    ],
  },
  {
    start_word: 'WIND',
    target_word: 'WAVE',
    theme: 'Elements to Recreation',
    choices: [
      [
        { word: 'SAIL', type: 'green', points: 100 },
        { word: 'KITE', type: 'yellow', points: 75 },
        { word: 'BREEZE', type: 'red', points: 50 },
      ],
      [
        { word: 'BOAT', type: 'green', points: 100 },
        { word: 'CANVAS', type: 'yellow', points: 75 },
        { word: 'YACHT', type: 'red', points: 50 },
      ],
      [
        { word: 'SEA', type: 'green', points: 100 },
        { word: 'SHIP', type: 'yellow', points: 75 },
        { word: 'OARS', type: 'red', points: 50 },
      ],
      [
        { word: 'WAVE', type: 'green', points: 100 },
        { word: 'OCEAN', type: 'yellow', points: 75 },
        { word: 'SALT', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Used for powering...',
      2: 'A mode of water transportation is...',
      3: 'A large body of water is...',
      4: 'A movement of water is a...',
    },
    explanations: [
      'Wind can power a sail.',
      'Sails are used on boats.',
      'Boats travel on the sea.',
      'The sea has waves.',
    ],
  },
  {
    start_word: 'ART',
    target_word: 'HEAD',
    theme: 'Creation to Cognition',
    choices: [
      [
        { word: 'PAINT', type: 'green', points: 100 },
        { word: 'CANVAS', type: 'yellow', points: 75 },
        { word: 'DRAWING', type: 'red', points: 50 },
      ],
      [
        { word: 'BRUSH', type: 'green', points: 100 },
        { word: 'COLOR', type: 'yellow', points: 75 },
        { word: 'ARTIST', type: 'red', points: 50 },
      ],
      [
        { word: 'HAIR', type: 'green', points: 100 },
        { word: 'BRISTLE', type: 'yellow', points: 75 },
        { word: 'HANDLE', type: 'red', points: 50 },
      ],
      [
        { word: 'HEAD', type: 'green', points: 100 },
        { word: 'COMB', type: 'yellow', points: 75 },
        { word: 'FACE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'A tool for creating art is...',
      2: 'Used for applying color is...',
      3: 'A material used in brushes is...',
      4: 'Where hair grows is...',
    },
    explanations: [
      'Paint is used to create art.',
      'A brush is used to apply paint.',
      'Brushes often have bristles made of hair or synthetic material.',
      'Hair grows on the head.',
    ],
  },
  {
    start_word: 'COLD',
    target_word: 'FOOT',
    theme: 'Sensation to Motion',
    choices: [
      [
        { word: 'ICE', type: 'green', points: 100 },
        { word: 'SNOW', type: 'yellow', points: 75 },
        { word: 'WINTER', type: 'red', points: 50 },
      ],
      [
        { word: 'SKATE', type: 'green', points: 100 },
        { word: 'FROZEN', type: 'yellow', points: 75 },
        { word: 'SLIPPERY', type: 'red', points: 50 },
      ],
      [
        { word: 'SHOE', type: 'green', points: 100 },
        { word: 'BLADE', type: 'yellow', points: 75 },
        { word: 'RINK', type: 'red', points: 50 },
      ],
      [
        { word: 'FOOT', type: 'green', points: 100 },
        { word: 'LACE', type: 'yellow', points: 75 },
        { word: 'LEATHER', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'A solid form of water is...',
      2: 'An activity on ice is...',
      3: 'Worn on the body',
      4: 'A body part used for walking is...',
    },
    explanations: [
      'Cold temperatures can turn water into ice.',
      'People skate on ice.',
      'Skates are attached to shoes.',
      'Shoes are worn on the foot.',
    ],
  },
  {
    start_word: 'MUSIC',
    target_word: 'COMMUNICATION',
    theme: 'Sound to Communication',
    choices: [
      [
        { word: 'SOUND', type: 'green', points: 100 },
        { word: 'SONG', type: 'yellow', points: 75 },
        { word: 'NOTE', type: 'red', points: 50 },
      ],
      [
        { word: 'EAR', type: 'green', points: 100 },
        { word: 'NOISE', type: 'yellow', points: 75 },
        { word: 'WAVE', type: 'red', points: 50 },
      ],
      [
        { word: 'HEARING', type: 'green', points: 100 },
        { word: 'LISTEN', type: 'yellow', points: 75 },
        { word: 'DRUM', type: 'red', points: 50 },
      ],
      [
        { word: 'COMMUNICATION', type: 'green', points: 100 },
        { word: 'SENSE', type: 'yellow', points: 75 },
        { word: 'DEAF', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'A fundamental element of music is...',
      2: 'A body part that perceives sound is...',
      3: 'A sensory perception of sound is...',
      4: 'A way of exchanging information is...',
    },
    explanations: [
      'Music is made of sounds.',
      'We hear sounds with our ears.',
      'Hearing is the sense of perceiving sound.',
      'Hearing is essential for spoken communication.',
    ],
  }
];