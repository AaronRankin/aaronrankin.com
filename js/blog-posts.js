var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var posts = response.articleData;
      if (document.getElementById("page-one")) {
        document.getElementById("page-one").innerHTML = `
        ${posts.map(postPreview).slice(0, 3)}
        `;

      } else if (document.getElementById("page-two")) {

        document.getElementById("page-two").innerHTML = `
        ${posts.map(postPreview).slice(3, 6)}
        `;

      } else if (document.getElementById("page-three")) {

        document.getElementById("page-three").innerHTML = `
        ${posts.map(postPreview).slice(6, 9)}
        `;

      } else if (document.getElementById("page-four")) {

        document.getElementById("page-four").innerHTML = `
        ${posts.map(postPreview).slice(9, 12)}
        `;

      } else if (document.getElementById("page-five")) {

        document.getElementById("page-five").innerHTML = `
        ${posts.map(postPreview).slice(12, 15)}
        `;

      } else if (document.getElementById("page-six")) {

        document.getElementById("page-six").innerHTML = `
        ${posts.map(postPreview).slice(15, 18)}
        `;

      } else if (document.getElementById("page-seven")) {

        document.getElementById("page-seven").innerHTML = `
        ${posts.map(postPreview).slice(18, 21)}
        `;

      } else if (document.getElementById("page-eight")) {

        document.getElementById("page-eight").innerHTML = `
        ${posts.map(postPreview).slice(21, 24)}
        `;

      } else if (document.getElementById("page-nine")) {

        document.getElementById("page-nine").innerHTML = `
        ${posts.map(postPreview).slice(24, 27)}
        `;

      } else if (document.getElementById("page-ten")) {

        document.getElementById("page-ten").innerHTML = `
        ${posts.map(postPreview).slice(27, 30)}
        `;

      }
    }
};
xhttp.open("GET", "https://aaronrankin.com/js/articleData.json", true);
xhttp.send()

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
