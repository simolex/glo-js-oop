const cityArr = {
  rus: [
    "Москва",
    "Санк-Петербург",
    "Новосибирск",
    "Екатеринбург",
    "Нижний Новгород",
    "Казань",
    "Челябинск",
  ],
  uk: ["Киев", "Харьков", "Одесса", "Днепр", "Донецк", "Запорожье", "Львов"],
  bel: ["Минск", "Гомель", "Могилёв", "Витебск", "Гродно", "Брест"],
  jap: ["Токио", "Киото", "Осака", "Иокогама"],
};

const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("city");
const result = document.querySelector(".result");

countrySelect.addEventListener("change", (e) => {
  citySelect.style.display = "block";
  citySelect.innerHTML = `<option value=>Выберите город</option> `;
  result.textContent = "";

  cityArr[e.target.value].forEach((city, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = city;
    citySelect.append(option);
  });
});

citySelect.addEventListener("change", (e) => {
  result.textContent = `${countrySelect.options[countrySelect.selectedIndex].innerText} ${
    e.target.options[e.target.selectedIndex].innerText
  }`;
});
