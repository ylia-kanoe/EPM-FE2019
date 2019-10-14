interface Renderable {
    render(): void;
}

class serviceApi {
    processingRequest(url: string) {
        return fetch(url)
            .then(response => response.json())
            .catch(err => console.error('Fetch error: ', err))
    }
}

abstract class AbstractRenderer implements Renderable {
    render(): void {
        throw new Error("Method not implemented.");
    }
    createElement(wrapper: any, tag: string, content: any, i: number): any {
        wrapper.querySelectorAll(tag)[i].textContent = content;
    }
}

class BlogRenderer extends AbstractRenderer {
    render() {
        return new serviceApi().processingRequest("https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/posts").then(data => {
            data.sort((a: any, b: any) => {
                return b.ratingsaverage - a.ratingsaverage;
            })
            data.forEach((item: any, i: number, array: any[]) => {
                let wrapper: any = document.querySelector('.blog-elements' + 0);
                if (i < 3) {
                    super.createElement(wrapper, '.block__wrapper--title', item.title, i);
                    super.createElement(wrapper, '.ratings', item.ratingsaverage, i);
                    wrapper.querySelectorAll('.min-star')[i].style.width += item.ratingsaverage * 2 + 'px';
                    super.createElement(wrapper, '.block__wrapper--tags', item.topic , i);
                }
            })
        })
    }
}

const a = new BlogRenderer();
a.render();

