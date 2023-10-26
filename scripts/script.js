const buttonForm = document.querySelector("#button-form");
const form = document.querySelector("#form-promotion")

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    console.log(formData);
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
