let products = [
    {
      "id": 1,
      "siteName": "After School Club",
      "subject": "English",
      "location": "Langley",
      "price": 50,
      "path": "images/English.png",
      "space": 5,
    },
    {
      "id": 2,
      "siteName": "After School Club",
      "subject": "Math",
      "location": "Iver",
      "price": "50",
      "path": "images/Math.jpg",
      "space": 5,
    },
    {
      "id": 3,
      "siteName": "After School Club",
      "subject": "Science",
      "location": "Burnham",
      "price": "80",
      "path": "images/science.jpg",
      "space": 5,
    },
    {
      "id": 4,
      "siteName": "After School Club",
      "subject": "History",
      "location": "Taplow",
      "price": 60,
      "path": "images/history.jpg",
      "space": 5,
    },
    {
      "id": 5,
      "siteName": "After School Club",
      "subject": "Geography",
      "location": "Reading",
      "price": 60,
      "path": "images/geography.jpg",
      "space": 5,
    },
    {
      "id": 6,
      "siteName": "After School Club",
      "subject": "Music1",
      "location": "London",
      "price": 80,
      "path": "images/music1.jpg",
      "space": 5,
    },
    {
      "id": 7,
      "siteName": "After School Club",
      "subject": "Music2",
      "location": "London",
      "price": 80,
      "path": "images/music2.jpg",
      "space": 5,
    },
  
    {
      id: 8,
      siteName: "After School Club",
      subject: "Irish Dancing",
      location: "Slough",
      price: 30,
      path: "images/irishdancing.jpg",
      space: 5,
    },
    {
      id: 9,
      siteName: "After School Club",
      subject: "Art",
      location: "Hounslow",
      price: 80,
      path: "images/art.jpg",
      space: 5,
    },
    {
      id: 10,
      siteName: "After School Club",
      subject: "Chemistry",
      location: "Brentford",
      price: 50,
      path: "images/chemistry.jpg",
      space: 5,
    },
  ];
  
    function numbersOnly(input) {
    var number = /[^0-9]/gi;
    input.value = input.value.replace(number, "");
  }
  
  function checkInput() {
    const inputName = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    if ((inputName && phone) === "") {
      document.getElementById("checkOut").disabled = true;
    } else {
      document.getElementById("checkOut").disabled = false;
    }
  }