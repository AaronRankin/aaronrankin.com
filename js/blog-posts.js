const articleData = [
  {
    featuredImage: "https://aaronrankin.com/images/uk-lockdown.png",
    postTitle: "The Inevitable Lockdown Has Arrived But We Can Get Through This",
    postDate: "24th March 2020",
    postBlurb: "Going forward we face a huge disruption to our everyday lives. Our personal freedom will be curtailed in a way that will be utterly alien to us but remember it is temporary.",
    postLink: "https://aaronrankin.com/the-inevitable-lockdown-has-arrived-but-we-can-get-through-this",
  },
  {
    featuredImage: "https://aaronrankin.com/images/dup-brexit-u-turn.png",
    postTitle: "The DUP’s Brexit U-Turn Is Too Little Too Late",
    postDate: "9th March 2020",
    postBlurb: "Whilst this is a welcome development from the province’s largest unionist party it however rings rather hollow as they haven’t exactly been bystanders in the whole Brexit process.",
    postLink: "https://aaronrankin.com/the-dups-brexit-u-turn-is-too-little-too-late",
  },
  {
    featuredImage: "https://aaronrankin.com/images/neg-mandate-graphic.png",
    postTitle: "The Trade Talks Have Begun But Is There Much Scope For A Deal?",
    postDate: "2nd March 2020",
    postBlurb: "This week the UK-EU trade talks start in earnest and with the end of the transition period less than nine months away it’s not a moment too soon.",
    postLink: "https://aaronrankin.com/the-trade-talks-have-begun-but-is-there-much-scope-for-a-deal",
  },
  {
    featuredImage: "https://aaronrankin.com/images/david-frost-speech.png",
    postTitle: "The UK’s Negotiating Position Is Crystal Clear",
    postDate: "24th February 2020",
    postBlurb: "Last week the UK’s Chief Negotiator for the EU trade talks gave a lecture in Brussels outlining the government’s approach going forward. He sought to give not just an economic rationale but also try to explain the philosophical foundations of the UK’s outlook.",
    postLink: "https://aaronrankin.com/the-uks-negotiating-position-is-crystal-clear",
  },
  {
    featuredImage: "https://aaronrankin.com/images/immigration-announcement.png",
    postTitle: "An Australian Style Immigration System Is Just What This Country Needs",
    postDate: "20th February 2020",
    postBlurb: "Now that the totality of immigration will come under our purview they have decided to treat EU and non-EU nationals equally with an emphasis on attracting only the highest skilled migrants via a points system similar to Australia.",
    postLink: "https://aaronrankin.com/an-australian-style-immigration-system-is-just-what-this-country-needs",
  },
  {
    featuredImage: "https://aaronrankin.com/images/sinn-fein-win.png",
    postTitle: "Despite The Sinn Fein Surge A United Ireland Is As Far Away As It’s Always Been",
    postDate: "10th February 2020",
    postBlurb: "As is traditional with any electoral success for Sinn Fein (no matter how small) is always painted as another inevitable step towards a United Ireland, frequently this no more than hyperbole and this instance is no different.",
    postLink: "https://aaronrankin.com/despite-the-sinn-fein-surge-a-united-ireland-is-as-far-away-as-its-always-been",
  },
  {
    featuredImage: "https://aaronrankin.com/images/newsletter-card.png",
    postTitle: "Brexit Gives Northern Ireland Opportunities From 1st February, So Let’s Seize Them",
    postDate: "30th January 2020",
    postBlurb: "Hidden amongst Barnier’s false economic evangelism was a more telling point about NI, that everything the PM has been saying up to this point was correct.",
    postLink: "https://aaronrankin.com/brexit-gives-northern-ireland-opportunities-from-1st-february-so-lets-seize-them",
  },
  {
    featuredImage: "https://aaronrankin.com/images/stormont-brexit-post.png",
    postTitle: "Despite The Sinn Fein Surge A United Ireland Is As Far Away As It’s Always Been",
    postDate: "20th January 2020",
    postBlurb: "While the assembly members got to feel important denouncing the PM and “English Nationalism” the same problems that beset Northern Ireland, that they let fester for three years, remain.",
    postLink: "https://aaronrankin.com/ignore-the-united-front-in-belfast-its-all-for-show",
  },
];

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


if (getElementById("page-one")) {
  document.getElementById("page-one").innerHTML = `
  ${articleData.map(postPreview).slice(0, 3)}
  `;

} else if (getElementById("page-two")) {

  document.getElementById("page-two").innerHTML = `
  ${articleData.map(postPreview).slice(3, 6)}
  `;

} else if (getElementById("page-three")) {

  document.getElementById("page-three").innerHTML = `
  ${articleData.map(postPreview).slice(6, 9)}
  `;

} else if (getElementById("page-four")) {

  document.getElementById("page-four").innerHTML = `
  ${articleData.map(postPreview).slice(9, 12)}
  `;

}
