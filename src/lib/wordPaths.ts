export const wordPaths = [
  {
    start_word: 'LIGHT',
    target_word: 'IMAGINATION',
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
      [
        { word: 'IMAGINATION', type: 'green', points: 100 },
        { word: 'IDEA', type: 'yellow', points: 75 },
        { word: 'THOUGHT', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Think about what light creates when it hits an object.',
      2: 'What is a shadow considered a form of?',
      3: 'What is often associated with darkness?',
      4: 'What occurs during sleep?',
      5: 'What are dreams a product of?',
    },
    explanations: [
      'Light creates shadows.',
      'A shadow is a form of darkness.',
      'Darkness is often associated with sleep.',
      'Dreams occur during sleep.',
      'Dreams are a product of imagination.',
    ],
  },
  {
    start_word: 'CITY',
    target_word: 'EARTHQUAKE',
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
      [
        { word: 'EARTHQUAKE', type: 'green', points: 100 },
        { word: 'SHAKE', type: 'yellow', points: 75 },
        { word: 'TREMOR', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What do cities often have a lot of?',
      2: 'What is common in traffic?',
      3: 'What does a horn produce?',
      4: 'What form is sound?',
      5: 'What involves ground vibrations?',
    },
    explanations: [
      'Cities often have a lot of traffic.',
      'Car horns are common in traffic.',
      'A horn produces a sound.',
      'Sound is a form of vibration.',
      'Earthquakes involve ground vibrations.',
    ],
  },
  {
    start_word: 'WATER',
    target_word: 'VIEW',
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
      [
        { word: 'VIEW', type: 'green', points: 100 },
        { word: 'FRAME', type: 'yellow', points: 75 },
        { word: 'CURTAIN', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What does lack of water cause?',
      2: 'What does thirst make you want to do?',
      3: 'What are drinks often served in?',
      4: 'What else is made of glass?',
      5: 'What do windows offer?',
    },
    explanations: [
      'Lack of water causes thirst.',
      'Thirst makes you want to drink.',
      'Drinks are often served in a glass.',
      'Windows are made of glass.',
      'Windows offer a view.',
    ],
  },
  {
    start_word: 'FOOD',
    target_word: 'CYCLE',
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
      [
        { word: 'CYCLE', type: 'green', points: 100 },
        { word: 'TIRE', type: 'yellow', points: 75 },
        { word: 'ROUND', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What does lack of food cause?',
      2: 'Where is food produced?',
      3: 'What is used on farms?',
      4: 'What does a tractor have?',
      5: 'What else has wheels?',
    },
    explanations: [
      'Lack of food causes hunger.',
      'Farms produce food.',
      'Tractors are used on farms.',
      'A tractor has wheels.',
      'A cycle has wheels.',
    ],
  },
  {
    start_word: 'MONEY',
    target_word: 'GRASS',
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
      [
        { word: 'GRASS', type: 'green', points: 100 },
        { word: 'CROP', type: 'yellow', points: 75 },
        { word: 'MEADOW', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'Where is money often kept?',
      2: 'What are wallets often made of?',
      3: 'Where does leather come from?',
      4: 'Where do cows graze?',
      5: 'What covers fields?',
    },
    explanations: [
      'Money is often kept in a wallet.',
      'Wallets are often made of leather.',
      'Leather comes from cows.',
      'Cows graze in fields.',
      'Fields are covered in grass.',
    ],
  },
  {
    start_word: 'STORY',
    target_word: 'PROBLEM',
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
      [
        { word: 'PROBLEM', type: 'green', points: 100 },
        { word: 'EQUATION', type: 'yellow', points: 75 },
        { word: 'FORMULA', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What is a story written on?',
      2: 'What do pages usually have?',
      3: 'What are numbers used for?',
      4: 'What field includes counting as a basic concept?',
      5: 'What does mathematics often involve solving?',
    },
    explanations: [
      'A story is written on pages.',
      'Pages are usually numbered.',
      'Numbers are used for counting.',
      'Counting is a basic concept in mathematics.',
      'Mathematics often involves solving problems.',
    ],
  },
  {
    start_word: 'WIND',
    target_word: 'SURFING',
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
      [
        { word: 'SURFING', type: 'green', points: 100 },
        { word: 'CREST', type: 'yellow', points: 75 },
        { word: 'TIDE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What can wind power?',
      2: 'Where are sails used?',
      3: 'Where do boats travel?',
      4: 'What does the sea have?',
      5: 'What do people do on waves?',
    },
    explanations: [
      'Wind can power a sail.',
      'Sails are used on boats.',
      'Boats travel on the sea.',
      'The sea has waves.',
      'People surf on waves.',
    ],
  },
  {
    start_word: 'ART',
    target_word: 'THINKING',
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
      [
        { word: 'THINKING', type: 'green', points: 100 },
        { word: 'BRAIN', type: 'yellow', points: 75 },
        { word: 'MIND', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What is used to create art?',
      2: 'What is used to apply paint?',
      3: 'What are brush bristles made of?',
      4: 'Where does hair grow?',
      5: 'What occurs in the head?',
    },
    explanations: [
      'Paint is used to create art.',
      'A brush is used to apply paint.',
      'Brushes often have bristles made of hair or synthetic material.',
      'Hair grows on the head.',
      'Thinking occurs in the head.',
    ],
  },
  {
    start_word: 'COLD',
    target_word: 'WALK',
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
      [
        { word: 'WALK', type: 'green', points: 100 },
        { word: 'TOE', type: 'yellow', points: 75 },
        { word: 'ANKLE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What can cold temperatures turn water into?',
      2: 'What do people do on ice?',
      3: 'What are skates attached to?',
      4: 'What body part wears shoes?',
      5: 'What do we use our feet for?',
    },
    explanations: [
      'Cold temperatures can turn water into ice.',
      'People skate on ice.',
      'Skates are attached to shoes.',
      'Shoes are worn on the foot.',
      'We use our feet to walk.',
    ],
  },
  {
    start_word: 'MUSIC',
    target_word: 'LANGUAGE',
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
      [
        { word: 'LANGUAGE', type: 'green', points: 100 },
        { word: 'SPEECH', type: 'yellow', points: 75 },
        { word: 'MESSAGE', type: 'red', points: 50 },
      ],
    ],
    hints: {
      1: 'What is music made of?',
      2: 'What body part perceives sound?',
      3: 'What sense involves the ear?',
      4: 'What is hearing essential for?',
      5: 'What is a tool for communication?',
    },
    explanations: [
      'Music is made of sounds.',
      'We hear sounds with our ears.',
      'Hearing is the sense of perceiving sound.',
      'Hearing is essential for spoken communication.',
      'Language is a tool for communication.',
    ],
  },
]
