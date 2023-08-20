
function show() {
    var search = document.querySelector(".search");
    if (search.style.display == "flex") {
      // alert("hello");
      search.style.display = "none";
    } else {
      // alert("by");
      search.style.display = "flex";
    }
  }

  const onSearch = () => {
    const input = document.querySelector("#search");
    const filter = input.value.toUpperCase();

    if (input.value === "") {
      // Call your function here when the input is cleared
      document.getElementById("hello").value = "";
    }

    const list = document.querySelectorAll("#list li");

    list.forEach((el) => {
      const text = el.textContent.toUpperCase();
      el.style.display = text.includes(filter) ? "" : "none";
    });
  };

  const setValue = (event) => {
    var clickedElement = event.target || event.srcElement;
    var value = clickedElement.textContent || clickedElement.innerText;

    var input = document.getElementById("hello");

    input.value = value;

    var search = document.querySelector(".search");
    // alert("hello");
    search.style.display = "none";
  };