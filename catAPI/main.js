const imageElement = document.getElementById("cat-image")

fetch("https://api.thecatapi.com/v1/images/search")
  .then((res) => {
     return res.json();
  })
  .then((data) => {
     imageElement.src = data[0].url;
  });