let request = new XMLHttpRequest();

request.open("GET", "https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/posts", true);
request.send();
request.onreadystatechange = function () {

    if (request.readyState == 4) {
        if (request.status == 200) {
            let blogs = new JobMassive(JSON.parse(request.responseText));
            blogs.render(3, 0);
            blogs.render(3, 1);
        }
        else {
            alert("Ошибка загрузки");
        }
    }
}

function JobMassive(items) { //конструктор массива

    this.blogElement = items;
    this.blogElement.sort(function (a, b) {
        return b.ratingsaverage - a.ratingsaverage;
    })
}

JobMassive.prototype.render = function (LengthContainer, n) {

    let wrapper = document.querySelector('.blog-elements' + n);

    let i = 0;
    while (i < LengthContainer) {

        wrapper.querySelectorAll('.block__wrapper--title')[i].textContent = this.blogElement[i].title;
        wrapper.querySelectorAll('.ratings')[i].textContent += this.blogElement[i].ratingsaverage;

        let n = 0;
        do {
            wrapper.querySelectorAll('.block__wrapper--tags')[i].innerHTML += '<p class="tag">' + this.blogElement[i].topic[n] + '</p>';
            n++;
        }
        while (n < this.blogElement[i].topic.length);

        wrapper.querySelectorAll('.min-star')[i].style.width = this.blogElement[i].ratingsaverage * 2 + 'px';

        i++;
    }
}




