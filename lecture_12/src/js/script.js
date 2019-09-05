function Massive(val) { // конструктор массива

    this.id = val + 1; // id 
    this.title = 'Title' + (val + 1); // title

    let ratings = [];
    let i = 0

    do {
        ratings.push(Math.floor(Math.random() * (1000 - 0) + 0));
        i++;
    }
    while (i <= 10);
    this.ratings = randomelems(ratings, Math.random() * (10 - 10) + 10); // рейтинг (10 оценок)

    let average = 0;
    ratings.forEach(function (item, i, array) {
        average += ratings[i];
    });
    this.ratingsaverage = ((average / ratings.length) / 100).toFixed(1); // рейтинг (среднее значение)

    let topics = ["topics1", "topics2", "topics3", "topics4",
        "topics5", "topics6", "topics7", "topics8", "topics9", "topics10",
        "topics11", "topics12", "topics13", "topics14", "topics15", "topics16",
        "topics17", "topics18", "topics19", "topics20"];
    this.topic = randomelems(topics, Math.random() * (20 - 0) + 0); // теги
}

function CreateMassive(myLength) { //конструктор создания массива

    this.blogElement = new Array(myLength).fill(null).map(function (current, i) {
        return new Massive(i);
    })
    this.blogElement.sort(function (a, b) {
        return b.ratingsaverage - a.ratingsaverage;
    })
}

CreateMassive.prototype.render = function (LengthContainer, n) { //метод рендер

    let wrapper = document.querySelector('.blog-elements' + n);

    this.blogElement.forEach(function (item, i, array) {

        if (i < LengthContainer) {

            wrapper.querySelectorAll('.block__wrapper--title')[i].textContent = item.title;
            wrapper.querySelectorAll('.ratings')[i].textContent += item.ratingsaverage;

            let n = 0;
            do {
                wrapper.querySelectorAll('.block__wrapper--tags')[i].innerHTML += '<p class="tag">' + item.topic[n] + '</p>';
                n++;
            }
            while (n < item.topic.length);

            wrapper.querySelectorAll('.min-star')[i].style.width = item.ratingsaverage * 2 + 'px';
        }
    });
}

let blog = new CreateMassive(30);
let blog1 = new CreateMassive(30);

blog.render(3, 0);
blog1.render(3, 1);

function randomelems(arr, count) {
    let len = arr.length;
    let lookup = {};
    let tmp = [];

    if (count > len)
        count = len;

    for (let i = 0; i < count; i++) {
        let index;
        do {
            index = Math.floor(Math.random() * len);
        }
        while (index in lookup);
        lookup[index] = null;
        tmp.push(arr[index]);
    }
    return tmp;
}


