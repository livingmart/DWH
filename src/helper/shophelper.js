import shop from "../data/shop/shop.json";
import category from '../data/shop/category.json';
import tags from '../data/shop/tags.json';
// Get Category
function getCategories(items) {
    var elems = category.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Tags
function getTags(items) {
    var elems = tags.filter((item) => {
        return items.includes(item.id)
    });
    return elems;
}
// Count Category
function setCategoriesCount() {
    for (let i = 0; i < category.length; i++) {
        var count = shop.filter(product => { return product.category.includes(parseInt(category[i].id)) });
        count = count.length;
        category[i].count = count;
    }
}
setCategoriesCount();
// product details
function getProduct(id) {
    return shop.filter(product => { return product.id === parseInt(id) })[0];
}
// Social Share
const pageUrl = window.location.href;
function getSocialShare(title) {
    var socialIcons = [
        {
            title: "facebook",
            iconClass: "fab fa-facebook-f",
            link: "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "twitter",
            iconClass: "fab fa-twitter",
            link: "http://twitter.com/intent/tweet?text=" + encodeURIComponent(title) + "&" + encodeURIComponent(pageUrl) + ""
        },
        {
            title: "linkedin",
            iconClass: "fab fa-linkedin-in",
            link: "https://www.linkedin.com/shareArticle?mini=true&url=" + encodeURIComponent(pageUrl) + "&title=" + encodeURIComponent(title) + ""
        },
        {
            title: "pinterest",
            iconClass: "fab fa-pinterest-p",
            link: "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(pageUrl) + ""
        }
    ];
    return socialIcons;
}
// Filter
function getFilteredproducts(products, filter = { cat: '', tag: '', searchQuery: '', priceFilter: [] }) {
    var catgoryFilter = filter.cat !== undefined && filter.cat !== null && filter.cat !== '';
    var tagFilter = filter.tag !== undefined && filter.tag !== null && filter.tag !== '';
    var priceFilterValue = filter.priceFilter[0] !== undefined && filter.priceFilter[1] !== undefined && filter.priceFilter[0] !== null && filter.priceFilter[1] != null && filter.priceFilter[0] !== '' && filter.priceFilter[1] !== '';
    //var authorFilter = filter.author !== undefined && filter.author !== null && filter.author !== '';
    var searchFilter = filter.searchQuery !== undefined && filter.searchQuery !== null && filter.searchQuery !== '';
    // Category filter
    if (catgoryFilter) {
        products = products.filter(product => {
            return (product.category !== undefined && product.category !== null) && product.category.includes(parseInt(filter.cat))
        })
    }
    // Tag filter
    else if (tagFilter) {
        products = products.filter(product => {
            return (product.tags !== undefined && product.tags !== null) && product.tags.includes(parseInt(filter.tag))
        })
    }
    // Author filter
    // if (authorFilter) {
    //     products = products.filter(product => {
    //         return (product.author !== undefined && product.author !== null) && product.author.includes(parseInt(filter.author))
    //     })
    // }
    // Search Filter
    else if (searchFilter) {
        products = products.filter(product => {
            return (product.title !== undefined && product.title !== null) && product.title.toLowerCase().includes(filter.searchQuery.toLowerCase())
        })
    }
    else if (priceFilterValue) {
        products = products.filter(product => {
            return (product.price !== undefined && product.price !== null) && product.price > filter.priceFilter[0] && product.price <= filter.priceFilter[1]
        })
    }
    return products;
}
export { getProduct, getCategories, getTags, getFilteredproducts, getSocialShare };