import serviceApi from './serviceApi.js';
import blogElement from './blogElement.js';

let n = new serviceApi().processingRequest("https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/posts");
n.then(item => {
    const blog = new blogElement();
    blog.render(item, 3, 0);
    blog.render(item, 3, 1);
})
