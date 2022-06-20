var orangeRed = [];
var deepPink = [];
var aliceBlue = [];

function getJson() {
  fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((user) => {
      var o = "Group Name : OrangeRed <br>";
      var a = "Group Name : AliceBlue <br>";
      var d = "Group Name : DeepPink <br>";

      user.forEach((element) => {
        if (element.group == "OrangeRed") {
          orangeRed.push(element);
          o += `
        <br>
        <div>
            ${element.id} -
            ${element.name} 
        </div>
        <hr>
        ` 
          if(element.assistant){
           o += `
           <br>
           <div>
           Group assistant : 
               ${element.name} 
           </div>
           <hr>
           ` 
          }
        ;
        
        } else if (element.group == "DeepPink") {
          deepPink.push(element);
          d += `
        <br>
        <div>
            ${element.id} -
            ${element.name} 
        </div>
        <hr>

        `
        if(element.assistant){
          d += `
          <br>
          <div>
          Group assistant : 
              ${element.name} 
          </div>
          <hr>
          ` 
         };
        } else {
          aliceBlue.push(element);
          a += `
        <br>
        <div>
            ${element.id} -
            ${element.name} 
        </div>
        <hr>

        `
        if(element.assistant){
          a += `
          <br>
          <div>
          Group assistant : 
              ${element.name} 
          </div>
          <hr>
          ` 
         };
        }
      });
      document.querySelector("#orangeRed").innerHTML = o;
      document.querySelector("#deepPink").innerHTML = d;
      document.querySelector("#aliceBlue").innerHTML = a;
    });
}

getJson();
