// import dotenv from dotenv https://www.npmjs.com/package/dotenv
// make into one funcion w categoryName, categoryDesc, and endpoint
function showHome () {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('news').style.display = 'none';
}
window.onload=function(){
    showHome();
}
function getWeather () {
    let input = document.getElementById("weather_city");
    fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=30980c7da4d8d22a89ed72ffa3b24226', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById("weather_temp").innerText = Math.floor(response.main.temp) + '℉';
        document.getElementById("weather_high").innerText = Math.floor(response.main.temp_max) + '℉';
        document.getElementById("weather_low").innerText = Math.floor(response.main.temp_min) + '℉';
        document.getElementById("weather_desc").innerText = response.weather[0].description;
        document.getElementById("weather_city").value = '';
        console.log(response);
    })
}
function topNews () {
    document.getElementById('news-title').innerText = 'Top Stories';
    document.getElementById('news-desc').innerText = 'Your daily rundown: the most important news stories of the day';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        // document.getElementById('news-img').src = response.articles[1].urlToImage;
        // document.getElementById('article-title').innerText = response.articles[1].title;
        // document.getElementById('article-auth').innerText = response.articles[1].author;
        // document.getElementById('article-src').innerText = response.articles[1].source.name;
        // document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        // document.getElementById('article-desc').innerText = response.articles[1].description;
        // document.getElementById('article-url').innerText = response.articles[1].url;
        for(let i = 0 ; i< response.articles.length; i++){
            renderArticleTemplate(response.articles[i]);
        }
    })
}
//global news : http://newsapi.org/v2/top-headlines?language=en&apikey=b9e7d883cff44ecea7551d1729518768
// add date to data fetched
// add logic to onliy show if !null && !undefined

function sportsNews () {
    document.getElementById('news-title').innerText = 'Sports News';
    document.getElementById('news-desc').innerText = 'Shoot through the latest sports headlines.';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    document.getElementById('article-container').innerHTML = '';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        // document.getElementById('news-img').src = response.articles[1].urlToImage;
        // document.getElementById('article-title').innerText = response.articles[1].title;
        // document.getElementById('article-auth').innerText = response.articles[1].author;
        // document.getElementById('article-src').innerText = response.articles[1].source.name;
        // document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        // document.getElementById('article-desc').innerText = response.articles[1].description;
        // document.getElementById('article-url').innerText = response.articles[1].url;
        // console.log(response);
        for(let i = 0 ; i< response.articles.length; i++){
            renderArticleTemplate(response.articles[i]);
        }
    })
}

function techNews () {
    document.getElementById('news-title').innerText = 'Tech News';
    document.getElementById('news-desc').innerText = 'Updates on the latest tech trends, software, hardware, and games.';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    document.getElementById('article-container').innerHTML = '';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=technology&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        // document.getElementById('news-img').src = response.articles[1].urlToImage;
        // document.getElementById('article-title').innerText = response.articles[1].title;
        // document.getElementById('article-auth').innerText = response.articles[1].author;
        // document.getElementById('article-src').innerText = response.articles[1].source.name;
        // document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        // document.getElementById('article-desc').innerText = response.articles[1].description;
        // document.getElementById('article-url').innerText = response.articles[1].url;
        for(let i = 0 ; i< response.articles.length; i++){
            renderArticleTemplate(response.articles[i]);
        }
    })
}

function entNews () {
    document.getElementById('news-title').innerText = 'Entertainment News';
    document.getElementById('news-desc').innerText = 'The juiciest stories on all your fave celebs.';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    document.getElementById('article-container').innerHTML = '';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        // document.getElementById('news-img').src = response.articles[1].urlToImage;
        // document.getElementById('article-title').innerText = response.articles[1].title;
        // document.getElementById('article-auth').innerText = response.articles[1].author;
        // document.getElementById('article-src').innerText = response.articles[1].source.name;
        // document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        // document.getElementById('article-desc').innerText = response.articles[1].description;
        // document.getElementById('article-url').innerText = response.articles[1].url;
        for(let i = 0 ; i< response.articles.length; i++){
            renderArticleTemplate(response.articles[i]);
        }
    })
}

function healthNews () {
    document.getElementById('news-title').innerText = 'Health News';
    document.getElementById('news-desc').innerText = 'Power up with the latest medical discoveries, breakthroughs and reports.';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    document.getElementById('article-container').innerHTML = '';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=health&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        // document.getElementById('news-img').src = response.articles[1].urlToImage;
        // document.getElementById('article-title').innerText = response.articles[1].title;
        // document.getElementById('article-auth').innerText = response.articles[1].author;
        // document.getElementById('article-src').innerText = response.articles[1].source.name;
        // document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        // document.getElementById('article-desc').innerText = response.articles[1].description;
        // document.getElementById('article-url').innerText = response.articles[1].url;
        // create a template for displaying one item... with all the same elements ^...
        // function that returns the template with the variable value in it

        for(let i = 0 ; i< response.articles.length; i++){
            renderArticleTemplate(response.articles[i]);
        }

        // for(let i = 0 ; i< response.articles.length; i++){
            // parent container is news div
            // rest we will define here in js
        //     document.getElementById('tech').innerHTML += "<div style = 'padding-top:20px;'><img style ='float:left;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"<h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href='"+response.articles[i].url+"' target = '_blank'>"+response.articles[i].url+"</a></div>";
        // }
    })
}

function getAdvice () {
    fetch('https://api.adviceslip.com/advice')
    .then(a => a.json())
    .then(response =>{
        document.getElementById("advice").innerText = response.slip.advice;
    })
}

const renderArticleTemplate = (article) => {
            // return 
    //    `<div class="container-fluid padding">
    //         <div class="row welcome text-center">
    //             <div class="col-12">
    //                 <h1 class="display-4" id="news-title"></h1>
    //             </div>
    //             <hr>
    //             <div class="col-12">
    //                 <p class="lead" id="news-desc"></p>
    //             </div>
    //         </div>
    //     </div>
        let articleDetails = `<!-- Two Column Section -->
    <div class="container-fluid padding">
        <div class="row padding">
                <div class="col-md-12 col-lg-6">
                    <h2 class="for-news" id="article-title">${article.title ? article.title : ""}</h2>
                    <p class="for-news" id="article-auth">${article.author ? article.author : ""}</p>
                    <p class="for-news" id="article-src">${article.source.name ? article.source.name : ""}</p>
                    <p class="for-news" id="article-date">${article.publishedAt ? article.publishedAt : ""}</p>
                    <p class="for-news" id="article-desc">${article.description ? article.description : ""}</p>
                    <p class="for-news" id="article-url"><a href="${article.url ? article.url : ""}" target="_blank">Read Article</a></p>
                    <br>
                </div>
                <div class="col-lg-6">
                    <img src="${article.urlToImage ? article.urlToImage : "img/news_default.png"}" alt="image" class="img-fluid" id="news-img">
                </div>
        </div>
        <hr class="my-4">
    </div>`;

    if(article) article.title ? article.title : ""

    document.getElementById("article-container").innerHTML += articleDetails;
}

// let newsContainer = document.getElementById('news');

// for(let i = 0 ; i< response.articles.length; i++){
//     newsContainer.appendChild(renderArticleTemplate(response.articles[i]));
// }

// blue open part isnt showing up anymore :(
// hamburger menu not working
// need to make weather form responsive on different screen sizes
// change fa weather icon based on weather desc?

// make another function for creating the divs for the responses from api (image, url, etc) 
