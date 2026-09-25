const cards = [

    // ФАКТЫ

    {
        id: 1,
        type: "fact",
        title: "У некоторых грибов есть собственные «часы»",
        text: "У ряда грибов обнаружены циркадные ритмы: их активность и процессы обмена веществ могут меняться в зависимости от времени суток даже при постоянном освещении.",
        extra: "Биология · Микология"
    },

    {
        id: 2,
        type: "fact",
        title: "У акул есть органы, чувствующие электричество",
        text: "Ампулы Лоренцини позволяют акулам воспринимать очень слабые электрические поля. Благодаря этому они могут обнаруживать добычу даже тогда, когда не видят её.",
        extra: "Зоология · Морская биология"
    },

    {
        id: 3,
        type: "fact",
        title: "Некоторые черепахи способны получать кислород через клоаку",
        text: "У некоторых пресноводных черепах существуют участки, через которые они могут поглощать кислород из воды. Это особенно полезно во время длительного пребывания под водой.",
        extra: "Зоология · Адаптация"
    },

    {
        id: 4,
        type: "fact",
        title: "Вороны могут запоминать лица людей",
        text: "Эксперименты показали, что вороны способны различать конкретных людей и связывать их с положительным или отрицательным опытом.",
        extra: "Этология · Поведение животных"
    },

    {
        id: 5,
        type: "fact",
        title: "У некоторых растений температура цветка выше температуры воздуха",
        text: "Некоторые растения способны выделять тепло за счёт усиленного клеточного дыхания. Например, такое явление наблюдается у отдельных растений семейства ароидных.",
        extra: "Ботаника · Термогенез"
    },

    {
        id: 6,
        type: "fact",
        title: "Существуют бактерии, которые используют магнитное поле Земли",
        text: "Магнитотактические бактерии содержат крошечные магнитные частицы — магнитосомы. Они помогают клеткам ориентироваться вдоль магнитного поля планеты.",
        extra: "Микробиология · Магнетизм"
    },

    {
        id: 7,
        type: "fact",
        title: "У морских слизней бывает способность красть хлоропласты",
        text: "Некоторые морские слизни поедают водоросли, но сохраняют внутри своих клеток их хлоропласты. Благодаря этому они некоторое время могут использовать продукты фотосинтеза.",
        extra: "Биология · Фотосинтез"
    },



    // ФИЛЬМЫ


    {
        id: 8,
        type: "movie",
        title: "The Hourglass Sanatorium",
        text: "Сюрреалистический польский фильм, в котором герой оказывается в странном санатории, где время и реальность существуют по собственным правилам.",
        extra: "1973 · Польша · Сюрреализм"
    },

    {
        id: 9,
        type: "movie",
        title: "Hausu",
        text: "Японский хоррор о девушках, приезжающих в старый загородный дом. Фильм сочетает абсурд, психоделику, необычные визуальные эффекты и чёрный юмор.",
        extra: "1977 · Япония · Ужасы"
    },

    {
        id: 10,
        type: "movie",
        title: "The Cremator",
        text: "Мрачный чехословацкий фильм о владельце крематория, чьи взгляды и поступки постепенно становятся всё более пугающими.",
        extra: "1969 · Чехословакия · Психологическая драма"
    },

    {
        id: 11,
        type: "movie",
        title: "The Wolf House",
        text: "Необычный чилийский мультфильм, созданный в технике покадровой анимации. Стены, персонажи и предметы постоянно меняются прямо во время сцен.",
        extra: "2018 · Чили · Экспериментальная анимация"
    },

    {
        id: 12,
        type: "movie",
        title: "The Holy Mountain",
        text: "Психоделическое произведение Алехандро Ходоровского, наполненное символами, странными ритуалами и сюрреалистическими образами.",
        extra: "1973 · Мексика · Сюрреализм"
    },

    {
        id: 13,
        type: "movie",
        title: "Tetsuo: The Iron Man",
        text: "Экспериментальный японский киберпанк о человеке, чьё тело начинает превращаться в нечто механическое. Фильм снят в агрессивной чёрно-белой стилистике.",
        extra: "1989 · Япония · Киберпанк"
    },



    // ЦИТАТЫ


    {
        id: 14,
        type: "quote",
        title: "О творчестве",
        text: "«Вдохновение открывает нам будущее».",
        extra: "Хаяо Миядзаки"
    },

    {
        id: 15,
        type: "quote",
        title: "О сомнениях",
        text: "«Продлить сомнения, значило бы продлить надежду».",
        extra: "Джейн Эир"
    },

    {
        id: 16,
        type: "quote",
        title: "О мыслях",
        text: "«Кто жил и мыслил, тот не может в душе не презирать людей».",
        extra: "Евгений Онегин, А. С. Пушкин"
    },

    {
        id: 17,
        type: "quote",
        title: "О забавах",
        text: "«Только настоящий мужик, который живёт, не оглядываясь на чужие суждения, сможет сесть на спину девушки, чтобы прокатиться на ней!».",
        extra: "Неизвестный автор"
    },

    {
        id: 18,
        type: "quote",
        title: "О странности",
        text: "«Нормальность — это асфальтированная дорога: по ней удобно идти, но цветов на ней не растёт».",
        extra: "Винсент Ван Гог"
    },

    {
        id: 19,
        type: "quote",
        title: "О любопытстве",
        text: "«Любопытно, чего люди больше всего боятся? Нового шага, нового собственного слова они больше всего боятся. А впрочем, я слишком много болтаю. Оттого и ничего не делаю, что болтаю. Пожалуй, впрочем, и так: оттого болтаю, что ничего не делаю».",
        extra: "Родион Раскольников"
    },



    // МЕСТА


    {
        id: 20,
        type: "place",
        title: "Остров Сокотра",
        text: "Остров у берегов Йемена, где из-за длительной изоляции сформировалась необычная флора. Одно из самых узнаваемых растений — драконово дерево с огромной зонтичной кроной.",
        extra: "Йемен · Индийский океан"
    },

    {
        id: 21,
        type: "place",
        title: "Каппадокия под землёй",
        text: "В Каппадокии существуют древние подземные города с многоуровневыми тоннелями, помещениями, вентиляционными шахтами и проходами, уходящими глубоко под землю.",
        extra: "Турция · Каппадокия"
    },

    {
        id: 22,
        type: "place",
        title: "Гора Рорайма",
        text: "Огромная столовая гора на границе Венесуэлы, Гайаны и Бразилии. Её вершина выглядит как гигантское каменное плато, окружённое отвесными стенами.",
        extra: "Венесуэла · Гайана · Бразилия"
    },

    {
        id: 23,
        type: "place",
        title: "Озеро Келимуту",
        text: "На вулкане Келимуту находятся три кратерных озера, которые имеют разные цвета. Их оттенки могут меняться из-за химических процессов в воде.",
        extra: "Индонезия · Остров Флорес"
    },

    {
        id: 24,
        type: "place",
        title: "Вади-эль-Хитан — Долина китов",
        text: "В пустыне Египта находится место, где обнаружены многочисленные окаменелости древних китов. Они показывают, как предки современных китообразных постепенно перешли от жизни на суше к жизни в воде.",
        extra: "Египет · Окаменелости"
    },

    {
        id: 25,
        type: "place",
        title: "Остров Мадагаскар",
        text: "Мадагаскар настолько долго развивался изолированно, что здесь сформировалось множество эндемичных видов. Например, знаменитые баобабы и лемуры встречаются в таком сочетании именно благодаря этой изоляции.",
        extra: "Мадагаскар · Эндемичная природа"
    }

];


const typeNames = {

    fact: "Факт",
    movie: "Фильм",
    quote: "Цитата",
    place: "Место"

};


let currentCard = null;
let shownCount = 0;


/* ИЗБРАННОЕ */

function getFavorites() {

    return JSON.parse(
        localStorage.getItem("favorites") || "[]"
    );

}


function saveFavorites(favorites) {

    localStorage.setItem(
        "favorites",
        JSON.stringify(favorites)
    );

}


/* HTML КАРТОЧКИ */

function cardHTML(card, favorite = false) {

    let button = "";

    if (favorite) {

        button = `
            <button
                class="remove-favorite"
                onclick="removeFavorite(${card.id})">

                Удалить из избранного

            </button>
        `;

    }


    return `
        <article class="card">

            <span class="card-type">
                ${typeNames[card.type]}
            </span>

            <h2>
                ${card.title}
            </h2>

            <p>
                ${card.text}
            </p>

            <p>
                <b>${card.extra}</b>
            </p>

            ${button}

        </article>
    `;

}


/* РУЛЕТКА */

function showRandomCard() {

    const selected =
        [...document.querySelectorAll(
            ".filters input:checked"
        )].map(input => input.value);


    if (selected.length === 0) {

        alert(
            "Выберите хотя бы одну категорию."
        );

        return;

    }


    const available =
        cards.filter(card =>
            selected.includes(card.type)
        );


    currentCard =
        available[
            Math.floor(
                Math.random() * available.length
            )
        ];


    const rouletteCard =
        document.getElementById(
            "rouletteCard"
        );


    rouletteCard.classList.remove(
        "placeholder"
    );


    rouletteCard.innerHTML =
        cardHTML(currentCard);


    document.getElementById(
        "cardActions"
    ).hidden = false;


    shownCount++;


    const counter =
        document.getElementById("counter");


    if (counter) {

        counter.textContent =
            shownCount;

    }


    updateSaveButton();

}


/* КНОПКА ИЗБРАННОГО */

function updateSaveButton() {

    const button =
        document.getElementById("saveBtn");


    if (!button || !currentCard) {
        return;
    }


    const favorites =
        getFavorites();


    const exists =
        favorites.some(
            card => card.id === currentCard.id
        );


    if (exists) {

        button.textContent =
            "✓ В избранном";

    } else {

        button.textContent =
            "♡ В избранное";

    }

}


/* СОХРАНЕНИЕ */

function addFavorite() {

    if (!currentCard) {
        return;
    }


    const favorites =
        getFavorites();


    if (!favorites.some(
        card => card.id === currentCard.id
    )) {

        favorites.push(currentCard);

        saveFavorites(favorites);

    }


    updateSaveButton();

}


/* УДАЛЕНИЕ ОДНОЙ КАРТОЧКИ */

function removeFavorite(id) {

    let favorites =
        getFavorites();


    favorites =
        favorites.filter(
            card => card.id !== id
        );


    saveFavorites(favorites);

    renderFavorites();

}


/* ИЗБРАННОЕ */

function renderFavorites() {

    const grid =
        document.getElementById(
            "favoritesGrid"
        );


    const empty =
        document.getElementById(
            "emptyFavorites"
        );


    if (!grid) {
        return;
    }


    const favorites =
        getFavorites();


    if (favorites.length === 0) {

        grid.innerHTML = "";

        if (empty) {
            empty.hidden = false;
        }

        return;

    }


    if (empty) {
        empty.hidden = true;
    }


    grid.innerHTML =
        favorites
            .map(card =>
                cardHTML(card, true)
            )
            .join("");

}


/* ГЛАВНАЯ КНОПКА */

const randomButton =
    document.getElementById(
        "randomBtn"
    );


if (randomButton) {

    randomButton.addEventListener(
        "click",
        showRandomCard
    );

}


/* ЕЩЁ */

const nextButton =
    document.getElementById(
        "nextBtn"
    );


if (nextButton) {

    nextButton.addEventListener(
        "click",
        showRandomCard
    );

}


/* СОХРАНИТЬ */

const saveButton =
    document.getElementById(
        "saveBtn"
    );


if (saveButton) {

    saveButton.addEventListener(
        "click",
        addFavorite
    );

}


/* ОЧИСТИТЬ ВСЁ */

const clearButton =
    document.getElementById(
        "clearFavorites"
    );


if (clearButton) {

    clearButton.addEventListener(
        "click",
        () => {

            localStorage.removeItem(
                "favorites"
            );

            renderFavorites();

        }
    );

}


/* ЗАПУСК */

renderFavorites();