var button = document.getElementById("fetch");
var promise = fetch("https://provinces.open-api.vn/api/?depth=3", {
  method: "GET",
  ContentType: "application/json",
});
var Result = [];
button.addEventListener("click", function () {
  promise
    .then((response) => response.json())
    .then((data) => {
      //console.log(data);
      data.forEach((city) => {
        let districts = city.districts;
        districts.forEach((district) => {
          let wards = district.wards;
          wards.forEach((ward) => {
            let obj = {};
            obj.CityID = city.code;
            obj.DistrictID = district.code;
            obj.WardID = ward.code;
            obj.CityName = city.name;
            obj.DistrictName = district.name;
            obj.WardName = ward.name;
            Result.push(JSON.stringify(obj));
          });
        });
      });
    })
    .catch(() => {
      alert("error");
    });
});

window.setInterval(function () {
  notifyMe();
}, 5000);
function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    var data = [];
    data["title"] = "notification's title";
    data["body"] = "notification's body";
    var notification = new Notification(data["title"], {
      body: data["body"],
    });
    notification.onclick = function (event) {
      window.open("https://www.example.com/", "_blank");
    };
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("really");
      }
    });
  }
}
