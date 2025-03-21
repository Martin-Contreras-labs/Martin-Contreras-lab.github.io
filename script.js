$(document).ready(function() {
    const apiKey = '9c491f49acfc4a2e8a67b05d4462425c'; 
    const url = `https://newsapi.org/v2/top-headlines?category=sports&apiKey=${apiKey}`;

    $.getJSON(url, function(data) {
        let articles = data.articles.slice(0, 10);
        let htmlContent = "";

        articles.forEach(article => {
            htmlContent += `
                <div class="col-md-4 mb-3">
                    <div class="card">
                        <img src="${article.urlToImage}" class="card-img-top" alt="News Image">
                        <div class="card-body">
                            <h5 class="card-title">${article.title}</h5>
                            <p class="card-text">${article.description}</p>
                            <a href="${article.url}" class="btn btn-primary" target="_blank">Read more</a>
                        </div>
                    </div>
                </div>`;
        });

        $('#news-container').html(htmlContent);
    });
});