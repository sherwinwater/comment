// -----jQuery method:------
// getComments();
// function getComments() {
//   $.get("/comments", function(data) {
//     if (!data) {
//       console.log("no data");
//     }
//     console.log("received data");
//     for (let i = 0; i < data.length; i++) {
//       console.log(data[i].name);
//     }
//     showComments(data);
//   });
// }

fetch("/comments")
  .then(function (response) {
    if (!response) {
      console.log("no data");
    }
    console.log("received data");
    return response.json();
  })
  .then(function (myJson) {
    // const data = JSON.stringify(myJson); // convert objects array to string
    showComments(myJson);
  })

function showComments(comments) {
  var commentsSection = document.getElementById("suggestions");
  for (var i = 0; i < comments.length; i++) {
    var section = document.createElement("section");
    // section.className = "suggestion";
    var heading = document.createElement("h3");
    heading.innerHTML = comments[i].name + " " + comments[i].date;
    var comment = document.createElement("p");
    comment.innerHTML = comments[i].comments;
    section.appendChild(heading);
    section.appendChild(comment);
    commentsSection.appendChild(section);
  }
}