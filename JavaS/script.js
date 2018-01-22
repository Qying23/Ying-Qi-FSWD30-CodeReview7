class Person {

  constructor( name, surname, age, gender, height, weight, img, rating, like, inRelation) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.img = img;
    this.rating = rating;
    this.like = 0;
    this.inRelation = inRelation;
  }

 
  render(i) {
    let msg ='';
     msg+= `
  
      <div class="pers class="col-lg-3 col-md-6 col-sm-12 col-xs-12">
        <div class="pic">
          <img src="${this.img}">
        </div>
        <div class="text">
          <p> Name: <h4>${this.name}</h4></p>
          <p> Surname: <h4>${this.surname}</h4></p>
          <p> Gender: ${this.gender}</p>
          <p> Age: ${this.age}</p>
          <p> ${this.height}, ${this.weight}</p>
          <button onclick="like(`+ i +`)">Like</button>
          <span class="like" id="like`+ i +`">${this.like} </span><img src="img/like.png">
        </div>
      </div>
      `;
    return msg;
  }
}

function like (index){
  persAll[index].like=persAll[index].like+1;
  document.getElementById('like' + index).innerHTML=persAll[index].like;
           }

var persAll = [
  new Person("Vivian", "Dawson", 33, "male", "189 cm", "95 kg", "imgP/vivian.jpg"),
  new Person("Jane", "Doe", 26,  "female", "167 cm", "55 kg", "imgP/girl2.jpg"),  
  new Person("Marina", "Ohr", 26,"female", "179 cm", "72 kg", "imgP/girl1.jpg"),
  new Person("Seung Heon", " Song", 41, "male", "179 cm", "70 kg", "imgP/song.jpg"),
  new Person("Dennis", "O'Neil", 36, "male", "185 cm", "74 kg", "imgP/dennis.jpg"),
  new Person("Janet", "Doering", 35,  "female", "160 cm", "57 kg", "imgP/02.jpg"),  
  new Person("Mina", "Muster", 26,"female", "180 cm", "79 kg", "imgP/03.jpg"),
  new Person("Tobias", "Musta", 19, "male", "159 cm", "49 kg", "imgP/01.jpg"),  
  new Person("Sebastian", "Kraut", 25, "male", "181 cm", "69 kg", "imgP/m1.jpg"),
  new Person("Olivia", "Heming", 20,  "female", "171 cm", "58 kg", "imgP/f6.jpeg"),  
  new Person("Owen", "Herr", 22, "male", "175 cm", "74 kg", "imgP/boy1.jpg"),
  new Person("Eveyln", "Chen", 21,  "female", "167 cm", "55 kg", "imgP/f7.jpg"),  
  new Person("Irene", "Kraus", 26,"female", "185 cm", "70 kg", "imgP/f9.jpg"),
  new Person("Alois", "Kozar", 25, "male", "184 cm", "75 kg", "imgP/alois.jpg"),  
  new Person("Günther", "Birnbaum", 20, "male", "183 cm", "75 kg", "imgP/boy2.jpg"),
  new Person("Agnes", "Rot", 25,  "female", "167 cm", "55 kg", "imgP/f8.jpg",),  
  new Person("Michaela", "Michl", 26,"female", "185 cm", "70 kg", "imgP/f5.jpg"),
  new Person("Robert", "Back", 25, "male", "163 cm", "48 kg", "imgP/m5.jpg"),  
  new Person("John", "Doe", 29, "male", "183 cm", "75 kg", "imgP/m8.jpeg"),
  new Person("Barbara", "Rich", 21,  "female", "167 cm", "55 kg", "imgP/f4.jpg"),  
  new Person("Bernd", "Schmä", 25, "male", "183 cm", "75 kg", "imgP/m9.jpg"),
  new Person("Martina", "Gold", 31,  "female", "167 cm", "55 kg", "imgP/6.jpg"),  
  new Person("Ivana", "Candic", 26,"female", "185 cm", "70 kg", "imgP/f3.jpg"),
  new Person("Johnny", "Soth", 30, "male", "163 cm", "48 kg", "imgP/m4.jpg"),  
  new Person("Danue", "Young", 26, "male", "183 cm", "75 kg", "imgP/m6.jpg"),
  new Person("Katharina", "Schah", 32,  "female", "167 cm", "55 kg", "imgP/07.jpg"),  
  new Person("Lisa", "Rock", 24,"female", "185 cm", "70 kg", "imgP/f1.jpg"),
  new Person("Theodor", "Einstein", 33, "male", "163 cm", "48 kg", "imgP/m3.jpg"),  
  new Person("Hung", "Ary", 28, "male", "183 cm", "75 kg", "imgP/m7.jpg"),
  new Person("Charlotte", "North", 27,  "female", "167 cm", "55 kg", "imgP/f2.jpg")
  ];


//Funktionen für index.html - Seite

function allList() {
  let allList = document.getElementById("allPerson");
  for (var i = 0; i < persAll.length; i++) {

    allList.innerHTML += persAll[i].render(i);
  }
}

//Funktionen für men.html - Seite

function onlyMen() {
  let allList = document.getElementById("men");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "male") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}

//Funktionen für women.html - Seite

function onlyWomen() {
  let allList = document.getElementById("women");
  for (var i = 0; i < persAll.length; i++) {
       if (persAll[i].gender == "female") {
    allList.innerHTML += persAll[i].render(i);
  }
}
}
