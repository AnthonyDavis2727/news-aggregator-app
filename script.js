const API_KEY = 'ceb0c7cfb3a74f2aa3f0ae8fea7d46fa';

let currentPage = 1;
let currentCategory = null;
let currentKeyword = null;
let isloading = false;
let lastArticleCount = 0;

function fetchNews(isSearching){
    if (isloading) return;

    isloading = true;
    let url;
    
}