function handleCardClick(event) {
  if (!event.target.closest(".productBuyBtn")) {
    console.log("Click on card")
    // Ваш код для відкриття інформаційної сторінки про товар тут
  }
}

function handleButtonClick(event) {
  event.stopPropagation() // Зупиняє подальше розповсюдження події
  console.log("Click on button")
  // Ваш код для обробки кліку на кнопку "Купити" тут
}
