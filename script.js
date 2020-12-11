function showHome () {
    document.getElementById('homepage').style.display = 'block';
    document.getElementById('news').style.display = 'none';
}
window.onload=function(){
    showHome();
}
function topNews () {
    document.getElementById('news-title').innerText = 'Top Stories';
    document.getElementById('news-desc').innerText = 'Top Stories Description';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById('news-img').src = response.articles[1].urlToImage;
        document.getElementById('article-title').innerText = response.articles[1].title;
        document.getElementById('article-auth').innerText = response.articles[1].author;
        document.getElementById('article-src').innerText = response.articles[1].source.name;
        document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        document.getElementById('article-desc').innerText = response.articles[1].description;
        document.getElementById('article-url').innerText = response.articles[1].url;
        // for(let i = 0 ; i< response.articles.length; i++){
        //     document.getElementById('top-headlines').innerHTML += "<div style = 'padding-top:20px;'><img style ='float:left;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"<h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href='"+response.articles[i].url+"' target = '_blank'>"+response.articles[i].url+"</a></div>";
        // }
    })
}
//global news : http://newsapi.org/v2/top-headlines?language=en&apikey=b9e7d883cff44ecea7551d1729518768
// add date to data fetched
// add logic to onliy show if !null && !undefined
function techNews () {
    document.getElementById('news-title').innerText = 'Tech News';
    document.getElementById('news-desc').innerText = 'Tech News Description';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=technology&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById('news-img').src = response.articles[1].urlToImage;
        document.getElementById('article-title').innerText = response.articles[1].title;
        document.getElementById('article-auth').innerText = response.articles[1].author;
        document.getElementById('article-src').innerText = response.articles[1].source.name;
        document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        document.getElementById('article-desc').innerText = response.articles[1].description;
        document.getElementById('article-url').innerText = response.articles[1].url;
        // for(let i = 0 ; i< response.articles.length; i++){
        //     document.getElementById('tech').innerHTML += "<div style = 'padding-top:20px;'><img style ='float:left;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"<h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href='"+response.articles[i].url+"' target = '_blank'>"+response.articles[i].url+"</a></div>";
        // }
    })
}
function sportsNews () {
    document.getElementById('news-title').innerText = 'Sports News';
    document.getElementById('news-desc').innerText = 'Sports News Description';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=sports&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById('news-img').src = response.articles[1].urlToImage;
        document.getElementById('article-title').innerText = response.articles[1].title;
        document.getElementById('article-auth').innerText = response.articles[1].author;
        document.getElementById('article-src').innerText = response.articles[1].source.name;
        document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        document.getElementById('article-desc').innerText = response.articles[1].description;
        document.getElementById('article-url').innerText = response.articles[1].url;
        // console.log(response);
        // for(let i = 0 ; i< response.articles.length; i++){
        //     document.getElementById('sports').innerHTML += "<div style = 'padding-top:20px;'><img style ='float:left;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"<h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href='"+response.articles[i].url+"' target = '_blank'>"+response.articles[i].url+"</a></div>";
        // }
    })
}
function entNews () {
    document.getElementById('news-title').innerText = 'Entertainment News';
    document.getElementById('news-desc').innerText = 'Entertainment News Description';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=entertainment&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById('news-img').src = response.articles[1].urlToImage;
        document.getElementById('article-title').innerText = response.articles[1].title;
        document.getElementById('article-auth').innerText = response.articles[1].author;
        document.getElementById('article-src').innerText = response.articles[1].source.name;
        document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        document.getElementById('article-desc').innerText = response.articles[1].description;
        document.getElementById('article-url').innerText = response.articles[1].url;
        // for(let i = 0 ; i< response.articles.length; i++){
        //     document.getElementById('entertainment').innerHTML += "<div style = 'padding-top:20px;'><img style ='float:left;'src='"+response.articles[i].urlToImage+"'><h1>"+response.articles[i].title+"<h1>"+response.articles[i].source.name+"<br>"+response.articles[i].description+"<a href='"+response.articles[i].url+"' target = '_blank'>"+response.articles[i].url+"</a></div>";
        // }
    })
}
function healthNews () {
    document.getElementById('news-title').innerText = 'Health News';
    document.getElementById('news-desc').innerText = 'Health News Description';
    document.getElementById('homepage').style.display = 'none';
    document.getElementById('news').style.display = 'block';
    fetch('https://cors-anywhere.herokuapp.com/http://newsapi.org/v2/top-headlines?country=us&category=health&apikey=b9e7d883cff44ecea7551d1729518768', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById('news-img').src = response.articles[1].urlToImage;
        document.getElementById('article-title').innerText = response.articles[1].title;
        document.getElementById('article-auth').innerText = response.articles[1].author;
        document.getElementById('article-src').innerText = response.articles[1].source.name;
        document.getElementById('article-date').innerText = response.articles[1].publishedAt;
        document.getElementById('article-desc').innerText = response.articles[1].description;
        document.getElementById('article-url').innerText = response.articles[1].url;
        // create a template for displaying one item... with all the same elements ^...
        // function that returns the template with the variable value in it

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

function getWeather () {
    let input = document.getElementById("weather_city");
    fetch('https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=30980c7da4d8d22a89ed72ffa3b24226', {headers:new Headers({"X-Requested-With":"Leesel"})})
    .then(a => a.json())
    .then(response =>{
        document.getElementById("weather_temp").innerText = Math.floor(response.main.temp * 10) + '℃';
        document.getElementById("weather_high").innerText = Math.floor(response.main.temp_max * 10) + '℃';
        document.getElementById("weather_low").innerText = Math.floor(response.main.temp_min * 10) + '℃';
        document.getElementById("weather_desc").innerText = response.weather[0].description;
        document.getElementById("weather_city").value = '';
        console.log(response);
    })
}

// WHAT WEATHER MEASURING UNIT DOES OPENWEATHER GIVE??? SHOULD I USE FARHENHEIT, CELSIUS, ETC ????

// can use the respo [1] for all other needed parts of news div
// for multiple articles, copy the article section but giv them unique id's
// blue open part isnt showing up anymore :(
// hamburger menu not working
// filter out images that dont show up or that dont provide an image? or if there is no image , we make img equal to a temporary image or something.
// need to make weather form responsive on different screen sizes
// change fa weather icon based on weather desc?
// fix weather api problem, chrome update, diff browser versions?, heroku ? outdated protocol? not secure enough?

// make another function for creating the divs for the responses from api (image, url, etc) 
// const renderArticleTemplate = (article) {
//             return 
//        `<div class="container-fluid padding">
//             <div class="row welcome text-center">
//                 <div class="col-12">
//                     <h1 class="display-4" id="news-title"></h1>
//                 </div>
//                 <hr>
//                 <div class="col-12">
//                     <p class="lead" id="news-desc"></p>
//                 </div>
//             </div>
//         </div>
//     <!-- Two Column Section -->
//     <div class="container-fluid padding">
//         <div class="row padding">
//             <div class="col-md-12 col-lg-6">
//                 <h2 class="for-news" id="article-title">${article.title}</h2>
//                 <p class="for-news" id="article-auth">${article.title}</p>
//                 <p class="for-news" id="article-src">${article.title}</p>
//                 <p class="for-news" id="article-date">${article.title}</p>
//                 <p class="for-news" id="article-desc">${article.title}</p>
//                 <p class="for-news" id="article-url">${article.title}</p>
//                 <br>
//             </div>
//             <div class="col-lg-6">
//                 <img src="img/gif/articleloader.gif" alt="image" class="img-fluid" id="news-img">
//             </div>
//         </div>
//         <hr class="my-4">
//     </div>`
// }

// let newsContainer = document.getElementById('news');

// for(let i = 0 ; i< response.articles.length; i++){
//     newsContainer.appendChild(renderArticleTemplate(response.articles[i]));
// }
