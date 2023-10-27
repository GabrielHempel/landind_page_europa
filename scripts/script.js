const buttonForm = document.querySelector("#button-form");
const form = document.querySelector("#form-promotion");

const formContainer = document.querySelector(".form-container");
const modalContainer = document.querySelector(".modal-container");

const toast = document.querySelector(".toast");

function formatPhoneNumber(input) {
  var cleaned = input.value.replace(/\D/g, "");
  var formatted = "";
  for (var i = 0; i < cleaned.length; i++) {
    if (i === 0) {
      formatted += "(" + cleaned[i];
    } else if (i === 1) {
      formatted += cleaned[i] + ") ";
    } else if (i === 2) {
      formatted += cleaned[i] + " ";
    } else if (i === 7) {
      formatted += "-" + cleaned[i];
    } else {
      formatted += cleaned[i];
    }
  }
  input.value = formatted;
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);

  try {
    const response = await axios.post(
      "https://europa.signo.dev.br/api/promo-filter",
      formData
    );

    if (response.status === 201) {
      formContainer.classList.add("hide");
      modalContainer.classList.add("active");
      form.reset();
    } else {
      document.getElementById("apiMessage").textContent =
        error.response.data.errors[0] != null
          ? error.response.data.errors[0]
          : "Não foi possível realizar o cadastro.";

      toast.classList.add("active");
      toast.style.animation = "slideLeft 1.5s forwards";
      setTimeout(() => {
        toast.style.animation = "slideRight 1.5s forwards";
      }, 12000);
      setTimeout(() => {
        toast.classList.remove("active");
      }, 15000);
      console.log("deu ruim");
    }
  } catch (error) {
    console.log(error)

    document.getElementById("apiMessage").textContent = "Não foi possível realizar o cadastro.";
    
    toast.classList.add("active");
    toast.style.animation = "slideLeft 1.5s forwards";
    setTimeout(() => {
      toast.style.animation = "slideRight 1.5s forwards";
    }, 12000);
    setTimeout(() => {
      toast.classList.remove("active");
    }, 15000);
  }
});
