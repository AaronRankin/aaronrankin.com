import articleData from 'https://aaronrankin.com/js/articleData.js'

console.log(articleData.articleData)

function postPreview(article) {
  return `
    <div class="blog-post">
      <div class="blog-pic">
        <img src="${article.featuredImage}">
      </div>
      <div class="blog-preview">
        <div class="blog-summary">
          <div class="blog-title">
            <h3><a href="${article.postLink}">${article.postTitle}</a></h3>
            <p>${article.postDate}</p>
          </div>
          <div class="break">
          </div>
          <div class="blog-blurb">
            <p>${article.postBlurb}</p>
          </div>
          <div class="read-more">
            <p><span><a href="${article.postLink}">Read More</a></span></p>
          </div>
        </div>
      </div>
    </div>
  `;

}


if (document.getElementById("page-one")) {
  document.getElementById("page-one").innerHTML = `
  ${articleData.map(postPreview).slice(0, 3)}
  `;

} else if (document.getElementById("page-two")) {

  document.getElementById("page-two").innerHTML = `
  ${articleData.map(postPreview).slice(3, 6)}
  `;

} else if (document.getElementById("page-three")) {

  document.getElementById("page-three").innerHTML = `
  ${articleData.map(postPreview).slice(6, 9)}
  `;

} else if (document.getElementById("page-four")) {

  document.getElementById("page-four").innerHTML = `
  ${articleData.map(postPreview).slice(9, 12)}
  `;

}
