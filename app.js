let body = document.getElementById("content")

for(let i=0; i<20; i++){

  body.innerHTML += `<div class="card" style="width: 18rem;">
  <img class="card-img-top" src="${fake_users[i].picture.thumbnail}" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">${fake_users[i].name.first}</h5>
    <p class="card-text">I am </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">Cras justo odio</li>
    <li class="list-group-item">Dapibus ac facilisis in</li>
    <li class="list-group-item">Vestibulum at eros</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>`


}
