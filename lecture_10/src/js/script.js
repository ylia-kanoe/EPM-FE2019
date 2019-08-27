function massive(val) {

    this.id = val + 1; // id 
    this.title = 'Title' + (val + 1); // title
    
    var ratings = [];
    var i = 0
    do {
        ratings.push(Math.floor(Math.random() * (1000 - 0) + 0));
        i++;
    }
    while (i <= 10);

    this.ratings = randomelems(ratings, Math.random() * (10 - 10) + 10); // рейтинг (10 оценок)

    var average = 0;
    for (var i = 0; i < ratings.length; i++) {
        average += ratings[i];
    }

    this.ratingsaverage = ((average / ratings.length) / 100).toFixed(1); // рейтинг (среднее значение)

    var topics = ["topics1", "topics2", "topics3", "topics4",
        "topics5", "topics6", "topics7", "topics8", "topics9", "topics10",
        "topics11", "topics12", "topics13", "topics14", "topics15", "topics16",
        "topics17", "topics18", "topics19", "topics20"];
    this.topic = randomelems(topics, Math.random() * (20 - 0) + 0); // теги
}

var myLength = 30;
var myMassive = [];
var i = 0;

do {
    myMassive.push(new massive(i));
    myMassive.sort(function (a, b) {
        return b.ratingsaverage - a.ratingsaverage;
    })
    i++;
}
while (i < myLength);

console.log(myMassive);
console.log('hello');

myMassive.forEach(function (item, i, array) {

    document.querySelectorAll('.block__wrapper--title')[i].textContent = item.title;
    document.querySelectorAll('.ratings')[i].textContent += item.ratingsaverage;

    var n = 0;
    do {
        document.querySelectorAll('.block__wrapper--tags')[i].innerHTML += '<p class="tag">' + item.topic[n] + '</p>';
        n++;
    }
    while (n < item.topic.length);

    document.querySelectorAll('.min-star')[i].style.width = item.ratingsaverage * 2 + 'px';
});

function randomelems(arr, count) {
    var len = arr.length;
    var lookup = {};
    var tmp = [];

    if (count > len)
        count = len;

    for (var i = 0; i < count; i++) {
        var index;
        do {
            index = Math.floor(Math.random() * len);
        }
        while (index in lookup);
        lookup[index] = null;
        tmp.push(arr[index]);
    }

    return tmp;
}