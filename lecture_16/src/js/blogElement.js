class blogElement {
    render(elements, LengthContainer, n) {
        let wrapper = document.querySelector('.blog-elements' + n);
        elements.sort((a, b) => {
            return b.ratingsaverage - a.ratingsaverage;
        })
        elements.forEach((item, i, array) => {
            if (i < LengthContainer) {
                wrapper.querySelectorAll('.block__wrapper--title')[i].textContent = item.title;
                wrapper.querySelectorAll('.ratings')[i].textContent += item.ratingsaverage;
                let n = 0;
                do {
                    wrapper.querySelectorAll('.block__wrapper--tags')[i].insertAdjacentHTML('afterbegin','<p class="tag">' + item.topic[n] + '</p>')
                    n++;
                }
                while (n < item.topic.length);
                wrapper.querySelectorAll('.min-star')[i].style.width = item.ratingsaverage * 2 + 'px';
            }
        });
    }
}

export default blogElement;
