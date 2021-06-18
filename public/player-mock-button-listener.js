export default function createPlayerMockButtonListener(document, playerMock) {
  const button = document.getElementById("toggle-mock")
  
  button.addEventListener("click", handleButtonPressed)

  function handleButtonPressed() {
    playerMock.start()
  }
}