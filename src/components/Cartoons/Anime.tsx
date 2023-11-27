
const Anime = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/a/a9/Death_Note_Manga_Cover_Russian.jpg" alt="Тетрадь смерти"/>
        <h2 className="p-1 text-center">Цугуми Обы</h2>
        <h3 className="p-1 text-center">Тетрадь смерти</h3>
        <span className="p-1">«Тетрадь смерти» (яп. デスノート Дэсу Но:то, англ. Death Note) — манга автора Цугуми Обы,
            проиллюстрированная Такэси Обатой, выпускавшаяся в журнале Weekly Shonen Jump с 1 декабря 2003 года по 15 мая 2006 года.
            Согласно опросу, проведённому в 2007 году министерством культуры Японии, занимает 10-е место среди лучшей манги всех времён.
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/4/4f/Y%C5%8Dkoso_Jitsuryoku.jpg" alt="Класс превосходства"/>
        <h2 className="p-1 text-center">Сёго Кинугаса </h2>
        <h3 className="p-1 text-center">Класс превосходства</h3>
        <span className="p-1">Classroom of the Elite (яп. ようこそ実力至上主義の教室へ Ёкосо Дзицурёку Сидзё Сюги Но Кёсицу Хэ,
              «Добро пожаловать в класс для особо одарённых») — серия ранобэ японского писателя Сёго Кинугаса с иллюстрациями
              Сюнсаку Томосэ, издававшаяся с мая 2015 по сентябрь 2019 года под издательством Media Factory MF Bunko J.
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjhf8nefKHFV793CbHRR1Z1GDktUcnBooD6A&usqp=CAU" alt="Ван-Пис"/>
        <h2 className="p-1 text-center"> Эйитиро Ода</h2>
        <h3 className="p-1 text-center">Ван-Пис</h3>
        <span className="p-1">Манга входит в число наиболее успешных изданий компании Shueisha за всю историю.
          С момента своего выпуска One Piece стал самой популярной мангой в Японии и одной из наиболее популярных манг по всему миру.
          На момент выхода 67-го тома, первый тираж которого составил 4 050 000 экземпляров — самый большой первый тираж манги в Японии и в мире.
          </span>
      </div>
    </div>
  );
};

export default Anime;