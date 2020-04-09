var a = 0;

var b = 3;

var olderEntries = document.getElementById("next-page")

var newerEntries = document.getElementById("last-page")

var nextButton = document.getElementById("next-button")

var backButton = document.getElementById("back-button")

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var response = JSON.parse(xhttp.responseText);
      var posts = response.articleData;
      document.getElementById("blog-preview").innerHTML = `
      ${posts.map(postPreview).slice(a, b)}
      `;

      nextButton.addEventListener("click", pageUp);

      function pageUp () {
        document.getElementById("blog-preview").innerHTML = `
        ${posts.map(postPreview).slice((a += 3), (b += 3))}
        `;
        newerEntries.style.visibility = "visible";

        if (b >= response.articleData.length) {
          olderEntries.style.visibility = "hidden";

        };

        $(document).ready(function() {
            // get the anchor link buttons
            const menuBtn = $("nextButton");
              // when each button is clicked
            menuBtn.click(()=>{
              // set a short timeout before taking action
              // so as to allow hash to be set
            setTimeout(()=>{
              // call removeHash function after set timeout
              removeHash();
            }, 5); // 5 millisecond timeout in this case
        });

        function removeHash(){
          history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }

      };

      backButton.addEventListener("click",pageDown);

      function pageDown () {
        document.getElementById("blog-preview").innerHTML = `
        ${posts.map(postPreview).slice((a -= 3), (b -= 3))}
        `;

        if (b <= 3) {
          newerEntries.style.visibility = "hidden";

        };

        if (b <= response.articleData.length) {
          olderEntries.style.visibility = "visible";
        }

        function removeHash(){
          history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }

      };

      if (b <= 3) {
        newerEntries.style.visibility = "hidden";

      };

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
