// function readMore(text, en) {
//     var currentText = document.getElementById('read_more_text' + text);
//     var btnText = document.querySelector('.btn_more_text' + text);
//     var arrow = document.getElementById('arrow' + text);
//     if(currentText.className.includes('read-more-text')) {
//         currentText.classList.remove('read-more-text');
//         btnText.textContent = 'згорнути';
//         arrow.classList.add('read-more-text')
//     } else {
//         currentText.classList.add('read-more-text');
//         btnText.textContent = 'читати далі';
//         arrow.classList.remove('read-more-text')
//     } 
// }


window.onscroll = function() {
    var header = document.getElementById("header");

    if (window.pageYOffset > 1) {
        header.classList.add("scroll-head");
    } else {
        header.classList.remove("scroll-head");
    }
};

// window.onload = function() {
//     if(window.location.href === 'http://165.22.83.157:1400/authors' || window.location.href === 'http://localhost:1400/authors') {
//         document.querySelector('.body_bg').classList.add("authors");
//     }
// };

document.querySelector('#contacts-item').addEventListener('click', function() {
    window.scrollTo(0, document.body.scrollHeight);
})

function addHover(nameLink) {
    document.querySelector('#' + nameLink + ' a').classList.add("white");
    document.querySelector('#' + nameLink + '-item').classList.add('white-li');
}
function removeHover(nameLink) {
    document.querySelector('#' + nameLink + ' a').classList.remove("white");
    document.querySelector('#' + nameLink + '-item').classList.remove('white-li');
}


var uri = window.location.toString();
if (uri.indexOf("?") > 0) {
  var clean_uri = uri.substring(0, uri.indexOf("?"));
  window.history.replaceState({}, document.title, clean_uri);
}


function changeAuthor(id) {
    var authors = [
        { id: 1, img: "andersen.jpg", text: "Ганс Крістіан Андерсен народився в Оденсе — місті на данському острові Фюн. Його батько — Ганс Андерсен (1782—1816) був бідним шевцем, мати — Ганна Марі Андерсдаттер (1775—1833) — прачкою (вона походила з бідної сім'ї, у дитинстві мусила жебракувати, її поховали на кладовищі для бідних)."},
        { id: 2, img: "suhomlunsky.jpg", text: "Василь Сухомлинський народився 28 вересня 1918 року в селі Василівці Василівської волості Олександрійського повіту Херсонської губернії (нині Онуфріївський район Кіровоградської області) у незаможній селянській родині." },
        { id: 3, img: "anna.jpg", text: "Народилася 13 липня 1982 р. у Львові, де зараз і проживає. Вищу освіту отримала в Львівському національному університеті імені Івана Франка. За освітою етнолог і соціолог." },
        { id: 4, img: "symonenko.jpg", text: "Поет з'явився на світ 8 січня 1935 року в старій хаті над річкою Удай, що у селі Біївці на Лубенщині Полтавської області. Зараз в цьому будинку розташований сільський музей Симоненка." },
        { id: 5, img: "nestayko.jpg", text: "Всеволод Зіновійович Нестайко народився 30 січня 1930 року у місті Бердичів Житомирської області, що входило, на той час, до складу Української СРР СРСР в сім'ї службовця та вчительки." },
    ]
    var author = authors.filter(author => {
        return author.id === id;
    })
    document.getElementById('author_info').innerHTML = `<div class="p_athor_info"><p>${author[0].text}</p></div>
    <div><img height="400px" src="../images/home_images/${author[0].img}" alt=""></div>`
}
