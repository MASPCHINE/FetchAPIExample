//JSON Dosyası Icerisini Okuma
let readFile = async function (groupTag, name) {
  let data = await fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((item) => {
      return item;
    });

  getGroup(data, groupTag);
  getGroupTagAssistant(data, name);
};

// Gönderilen Grupta Olan Üyeler
let getGroup = function (data, groupTag) {
  data.forEach((members) => {
    if (members.group == groupTag) {
      //console.log(members);
    }
  });
};

//Gönderdiğimiz Assistanin Grup Adini Öğrenmek
let getGroupTagAssistant = function (data, name) {
  data.forEach((members) => {
    if (members.name == name && members.assistant) {
      return (assistantGroupTag = members.group);
    }
  });
  getGroupForAssistant(data, assistantGroupTag);
};

//Asistanin Grup Adina Göre Üyeleri Siralama
let getGroupForAssistant = function (data, assistantGroupTag) {
  data.forEach((members) => {
    if (members.group == assistantGroupTag) {
      console.log(members);
    }
  });
};

readFile("OrangeRed", "Derya");
