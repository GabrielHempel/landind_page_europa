const buttonForm = document.querySelector("#button-form");
const form = document.querySelector("#form-promotion");

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

  // try {
  //   const response = await axios.post(
  //     "http://localhost/api/register_promotion",
  //     formData
  //   );

  //   if (response.status === 201) {
  //    console.log("deu boa")

  //     form.reset();
  //   } else {
  //    console.log("não deu boa")
  //   }
  // } catch (error) {
  //   console.log("ferrou geral")
  // }
});
