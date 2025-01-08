const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("Re-Password");
const btnLogin = document.getElementById("btn-login");

let message = "";
let flagError = false;
btnLogin.addEventListener("click", (e) => {
  if (password.value === repassword.value) {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        message = "Đăng ký thành công";
        location.href = "../Html/SignIn.html";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        message = "Thông tin không hợp lệ";
        flagError = true;
      })
      .finally(() => {
        Toastify({
          text: message,
          duration: 10000,
          close: true,
          gravity: "top",
          position: "right",
          backgroundColor: flagError
            ? "linear-gradient(to right, #FF6B6B, #FF4E50)"
            : "linear-gradient(to right, #66BB6A, #388E3C)",
          stopOnFocus: true,
        }).showToast();
      });
  }
});
