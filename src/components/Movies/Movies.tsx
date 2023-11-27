const Movies = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Poster_-_Gone_With_the_Wind_01.jpg/800px-Poster_-_Gone_With_the_Wind_01.jpg" alt="Унесённые ветром"/>
        <h2 className="p-1 text-center">Маргарет Митчелл</h2>
        <h3 className="p-1 text-center">Унесённые ветром</h3>
        <span className="p-1"><strong>Жанр: </strong>	Эпическая историческая романтическая драма</span>
        <span className="p-1">«Унесённые ветром» (англ. Gone with the Wind) — американский художественный фильм 1939 года в жанре
          исторической военной мелодрамы, снятый по одноимённому роману Маргарет Митчелл. Продюсером ленты выступил Дэвид Селзник из
          Selznick International Pictures, а режиссёром — Виктор Флеминг. События фильма разворачиваются на Юге США во время
          Гражданской войны, в центре сюжета — история Скарлетт О’Хары, дочери плантатора из Джорджии.
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/8/86/Pride_%26_Prejudice_2005.jpg" alt="Гордость и предубеждение"/>
        <h2 className="p-1 text-center">Джейн Остин</h2>
        <h3 className="p-1 text-center">Гордость и предубеждение</h3>
        <span><strong>Жанр: </strong>Драма</span>
        <span className="p-1">«Го́рдость и предубежде́ние» (англ. Pride & Prejudice) — фильм 2005 года режиссёра Джо Райта по мотивам,
          одноимённого романа Джейн Остин 1813 года. Главную роль исполняет Кира Найтли.
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/c/c4/Godfather_vhs.jpg" alt="Крёстный отец"/>
        <h2 className="p-1 text-center">Марио Пьюзо</h2>
        <h3 className="p-1 text-center">Крёстный отец</h3>
        <span><strong>Жанр: </strong>Криминальная драма гангстерский фильм</span>
        <span className="p-1">«Крёстный оте́ц» (англ. The Godfather) — американский криминальный драматический фильм 1972 года
          режиссёра Фрэнсиса Форда Копполы, который был соавтором сценария с Марио Пьюзо, основанный на одноимённом романе Пьюзо.
          В главных ролях Марлон Брандо, Аль Пачино, Джеймс Каан, Ричард Кастеллано, Роберт Дюваль, Стерлинг Хэйден, Джон Марли,
          Ричард Конте и Дайан Китон. Это первый фильм одноимённой трилогии, в которой рассказывается о семье Корлеоне при патриархе
          Вито Корлеоне с 1945 по 1955 год.
        </span>
      </div>
    </div>
  );
};

export default Movies;