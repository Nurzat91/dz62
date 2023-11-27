
const Books = () => {
  return (
    <div className="d-flex justify-content-between">
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/8/83/One_Hundred_Years_of_Solitude.jpg" alt="Сто лет одиночества"/>
        <h2 className="p-1 text-center"> Габриэля Гарсиа Маркеса</h2>
        <h3 className="p-1 text-center">Сто лет одиночества</h3>
        <span className="p-1">Роман «Сто лет одиночества» был написан Гарсиа Маркесом в течение 18 месяцев,
          между 1965 и 1966 годами в Мехико. Оригинальная идея этого произведения появилась в 1952 году,
          когда автор посетил свою родную деревню Аракатака в компании матери.
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/8/82/%D0%91%D1%80%D0%B0%D1%82%D1%81%D1%82%D0%B2%D0%BE_%D0%9A%D0%BE%D0%BB%D1%8C%D1%86%D0%B0.gif" alt="Властели́н коле́ц"/>
        <h2 className="p-1 text-center">Дж. Р. Р. Толкин</h2>
        <h3 className="p-1 text-center">Властели́н коле́ц</h3>
        <span className="p-1">«Властели́н коле́ц» (англ. The Lord of the Rings) — роман-эпопея английского писателя
          Дж. Р. Р. Толкина, одно из самых известных произведений жанра фэнтези. «Властелин колец»
          был написан как единая книга, но из-за объёма при первом издании его разделили на три части — «Братство Кольца»,
          «Две крепости» и «Возвращение короля».
        </span>
      </div>
      <div className="card mt-3" style={{width: "30%"}}>
        <img style={{width: "388px", height:"500px"}} src="https://upload.wikimedia.org/wikipedia/ru/thumb/5/50/Oldman_and_the_sea.jpg/406px-Oldman_and_the_sea.jpg" alt="Стари́к и мо́ре"/>
        <h2 className="p-1 text-center">	Эрнест Хемингуэй</h2>
        <h3 className="p-1 text-center">Стари́к и мо́ре</h3>
        <span className="p-1">«Стари́к и мо́ре» (англ. The Old Man and the Sea) — повесть американского писателя Эрнеста Хемингуэя,
          написанная в Бимини (Багамские острова) и вышедшая в 1952 году. Последнее известное художественное произведение Хемингуэя,
          опубликованное при его жизни.
        </span>
      </div>
    </div>
  );
};

export default Books;