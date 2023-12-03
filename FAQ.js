const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});

document.getElementById("btn_order").onclick = function () {
    location.href = "FAQ_ORDER.html";
};

document.getElementById("btn_product").onclick = function () {
    location.href = "FAQ_PRODUCT.html";
};

document.getElementById("btn_delivery").onclick = function () {
    location.href = "FAQ_DELIVERY.html";
};

document.getElementById("btn_exchange&refund").onclick = function () {
    location.href = "FAQ_EXCHANGE&REFUND.html";
};