const email = document.getElementById("email");
const password = document.getElementById("password");

const btnLogin = document.getElementById("btn-login");

let message = "";
let flagError = false;
btnLogin.addEventListener("click", (e) => {
  firebase
    .auth()
    .signInWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      var user = userCredential.user;
      message = "Đăng nhập thành công";
      location.href = "../Html/booking.html";
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
});
