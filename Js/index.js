const Placee = document.querySelectorAll(".placee");
const overlay = document.querySelectorAll(".overlay");
const text = document.querySelectorAll(".text");

let images = [
  "../picture/jezael-melgoza-7H77FWkK_x4-unsplash.jpg",
  "../picture/diogo-fagundes-dbBKeN1s8GY-unsplash.jpg",
  "../picture/cole-keister-UP3pjHKx0ts-unsplash.jpg",
];

let index = 0;
const imgElement = document.querySelector("#img");

function change() {
  imgElement.src = images[index];
  index > 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 5000);
};

emailjs.init("LKNZnlH75-QcwaSwJ");

const username = document.querySelector("#username");
const phone_number = document.querySelector("#phone_number");
const customer_email = document.querySelector("#customer_email");
const place = document.querySelector("#place");
const date_time = document.querySelector("#date_time");
const message = document.querySelector("#message");
const btn_submit = document.querySelector(".messs");

function formatDatetime(date) {
  const day = ("0" + date.getDate()).slice(-2); // Thêm 0 vào ngày nếu ít hơn 10
  const month = ("0" + (date.getMonth() + 1)).slice(-2); // Thêm 0 vào tháng nếu ít hơn 10
  const year = date.getFullYear();
  const hours = ("0" + date.getHours()).slice(-2); // Thêm 0 vào giờ nếu ít hơn 10
  const minutes = ("0" + date.getMinutes()).slice(-2); // Thêm 0 vào phút nếu ít hơn 10

  // Trả về định dạng dd/mm/yyyy HH:mm
  return `${day}/${month}/${year} ${hours}:${minutes}`;
}

btn_submit.addEventListener("click", (e) => {
  const date = new Date(date_time.value);
  const formattedDatetime = formatDatetime(date);

  const data = {
    username: username.value,
    phone_number: phone_number.value,
    customer_email: customer_email.value,
    place: place.value,
    date_time: formattedDatetime,
    message: message.value,
  };

  emailjs.send("service_ef1jlhs", "template_i1ryzzs", data).then(
    function (response) {
      alert("Booking successfully sent!");
    },
    function (error) {
      alert("Booking failed: " + error.text);
    }
  );
});
