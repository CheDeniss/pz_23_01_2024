const culturalEventsArray = [
    // Фільми
    {
        id: 1,
        comments: [],
        name: 'Невидимий гость',
        type: 'Фільм',
        date: '2024-02-15',
        time: '18:00',
        details: 'Ексклюзивний показ нового фільму "Невидимий гость"',
        briefInfo: 'Трилер, режисер: Оріол Паоло',
        isFavorite: false
    },
    {
        id: 2,
        comments: [],
        name: 'Життя Пі',
        type: 'Фільм',
        date: '2024-03-10',
        time: '20:30',
        details: 'Прем\'єра фільму "Життя Пі" за романом Яна Мартеля',
        briefInfo: 'Драма, режисер: Анг Лі',
        isFavorite: false
    },
    {
        id: 3,
        comments: [],
        name: 'Шоу Трумана',
        type: 'Фільм',
        date: '2024-04-22',
        time: '19:15',
        details: 'Показ ретрофільму "Шоу Трумана"',
        briefInfo: 'Комедія-драма, режисер: Пітер Вір',
        isFavorite: false
    },
    {
        id: 4,
        comments: [],
        name: 'Великий Гетсбі',
        type: 'Фільм',
        date: '2024-05-12',
        time: '21:00',
        details: 'Спеціальний показ фільму "Великий Гетсбі" за романом Френсіса Скотта Фітцджеральда',
        briefInfo: 'Драма, режисер: Баз Лурман',
        isFavorite: false
    },
    {
        id: 5,
        comments: [],
        name: 'Фільмовий вечір "Супергерої Marvel"',
        type: 'Фільм',
        date: '2024-06-18',
        time: '22:30',
        details: 'Фільмовий вечір "Супергерої Marvel"',
        briefInfo: 'Показ трьох блокбастерів у великому форматі',
        isFavorite: false
    },
    {
        id: 6,
        comments: [],
        name: 'Планета Земля II',
        type: 'Фільм',
        date: '2024-07-30',
        time: '20:00',
        details: 'Прем\'єра документального фільму "Планета Земля II"',
        briefInfo: 'Документальний, режисер: Девід Аттенборо',
        isFavorite: false
    },

    // Спектаклі
    {
        id: 7,
        comments: [],
        name: 'Нескінченна коміка',
        type: 'Спектакль',
        date: '2024-03-05',
        time: '19:30',
        details: 'Прем\'єра комедійного спектаклю "Нескінченна коміка"',
        briefInfo: 'Комедія, режисер: Іван Франко',
        isFavorite: false
    },
    {
        id: 8,
        comments: [],
        name: 'Ромео і Джульєтта',
        type: 'Спектакль',
        date: '2024-04-18',
        time: '18:45',
        details: 'Вистава "Ромео і Джульєтта" за п\'єсою Вільяма Шекспіра',
        briefInfo: 'Трагедія, режисер: Ольга Степанченко',
        isFavorite: false
    },
    {
        id: 9,
        comments: [],
        name: 'Король Лев',
        type: 'Спектакль',
        date: '2024-05-25',
        time: '20:00',
        details: 'Мюзикл "Король Лев"',
        briefInfo: 'Мюзикл, режисер: Джулі Теймор',
        isFavorite: false
    },
    {
        id: 10,
        comments: [],
        name: 'Відьмак. Востаннє на сцені',
        type: 'Спектакль',
        date: '2024-06-14',
        time: '21:15',
        details: 'Трагікомедія "Відьмак. Востаннє на сцені"',
        briefInfo: 'Трагікомедія, режисер: Марія Шевченко',
        isFavorite: false
    },
    {
        id: 11,
        comments: [],
        name: 'Гамлет',
        type: 'Спектакль',
        date: '2024-07-22',
        time: '19:00',
        details: 'Вистава "Гамлет" за твором Вільяма Шекспіра',
        briefInfo: 'Трагедія, режисер: Василь Петренко',
        isFavorite: false
    },
    {
        id: 12,
        comments: [],
        name: 'Мастер і Маргарита',
        type: 'Спектакль',
        date: '2024-08-10',
        time: '18:30',
        details: 'Постановка "Мастер і Маргарита"',
        briefInfo: 'Фантастична драма, режисер: Софія Кравченко',
        isFavorite: false
    },
    {
        id: 13,
        comments: [],
        name: 'Маскарад',
        type: 'Спектакль',
        date: '2024-09-05',
        time: '20:45',
        details: 'Вечірка "Маскарад"',
        briefInfo: 'Драма, режисер: Ігор Жуков',
        isFavorite: false
    },

    // Концерти
    {
        id: 14,
        comments: [],
        name: 'Imagine Dragons',
        type: 'Концерт',
        date: '2024-04-12',
        time: '20:00',
        details: 'Концерт групи "Imagine Dragons"',
        briefInfo: 'Рок-концерт, локація: Національний стадіон',
        isFavorite: true
    },
    {
        id: 15,
        comments: [],
        name: 'Бетховен: Симфонія №9',
        type: 'Концерт',
        date: '2024-05-30',
        time: '19:45',
        details: 'Симфонічний концерт "Бетховен: Симфонія №9"',
        briefInfo: 'Симфонічний, диригент: Іван Козлов',
        isFavorite: false
    },
    {
        id: 16,
        comments: [],
        name: 'Techno City',
        type: 'Концерт',
        date: '2024-06-28',
        time: '21:30',
        details: 'Електронний музичний фестиваль "Techno City"',
        briefInfo: 'Електронна музика, локація: Клуб "Бітова Експлозія"',
        isFavorite: true
    },
    {
        id: 17,
        comments: [],
        name: 'Queen: Live at Wembley Stadium',
        type: 'Концерт',
        date: '2024-07-18',
        time: '22:15',
        details: 'Легендарний концерт "Queen: Live at Wembley Stadium"',
        briefInfo: 'Рок-концерт, локація: Великий стадіон',
        isFavorite: false
    },
    {
        id: 18,
        comments: [],
        name: 'Miles Davis: Kind of Blue',
        type: 'Концерт',
        date: '2024-08-08',
        time: '19:00',
        details: 'Джазовий вечір "Miles Davis: Kind of Blue"',
        briefInfo: 'Джазовий концерт, локація: Джаз-клуб "Синя ніч"',
        isFavorite: true
    },
];

export default culturalEventsArray;
