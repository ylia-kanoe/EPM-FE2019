"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var serviceApi = /** @class */ (function () {
    function serviceApi() {
    }
    serviceApi.prototype.processingRequest = function (url) {
        return fetch(url)
            .then(function (response) { return response.json(); })
            .catch(function (err) { return console.error('Fetch error: ', err); });
    };
    return serviceApi;
}());
var AbstractRenderer = /** @class */ (function () {
    function AbstractRenderer() {
    }
    AbstractRenderer.prototype.render = function () {
        throw new Error("Method not implemented.");
    };
    AbstractRenderer.prototype.createElement = function (wrapper, tag, content, i) {
        wrapper.querySelectorAll(tag)[i].textContent = content;
    };
    return AbstractRenderer;
}());
var BlogRenderer = /** @class */ (function (_super) {
    __extends(BlogRenderer, _super);
    function BlogRenderer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlogRenderer.prototype.render = function () {
        var _this = this;
        return new serviceApi().processingRequest("https://my-json-server.typicode.com/ylia-kanoe/EPM-FE2019/posts").then(function (data) {
            data.sort(function (a, b) {
                return b.ratingsaverage - a.ratingsaverage;
            });
            data.forEach(function (item, i, array) {
                var wrapper = document.querySelector('.blog-elements' + 0);
                if (i < 3) {
                    _super.prototype.createElement.call(_this, wrapper, '.block__wrapper--title', item.title, i);
                    _super.prototype.createElement.call(_this, wrapper, '.ratings', item.ratingsaverage, i);
                    wrapper.querySelectorAll('.min-star')[i].style.width += item.ratingsaverage * 2 + 'px';
                    _super.prototype.createElement.call(_this, wrapper, '.block__wrapper--tags', item.topic, i);
                }
            });
        });
    };
    return BlogRenderer;
}(AbstractRenderer));
var a = new BlogRenderer();
a.render();
