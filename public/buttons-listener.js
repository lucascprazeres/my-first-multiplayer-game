export default function createButtonsListener(document) {
  const leftButton = document.getElementById("left")
  const upButton = document.getElementById("up")
  const downButton = document.getElementById("down")
  const rightButton = document.getElementById("right")
  
  const state = {
    observers: [],
    playerId: null
  }

  function registerPlayerId(playerId) {
    state.playerId = playerId
  }

  function subscribe(observerFunction) {
    state.observers.push(observerFunction)
  }

  function notifyAll(command) {
    for (const observerFunction of state.observers) {
      observerFunction(command)
    }
  }

  leftButton.addEventListener("click", () => {
    handleButton("Left")
  })

  upButton.addEventListener("click", () => {
    handleButton("Up")
  })

  downButton.addEventListener("click", () => {
    handleButton("Down")
  })

  rightButton.addEventListener("click", () => {
    handleButton("Right")
  })

  function handleButton(direction) {
    const  correspondingArrowKey = getCorrespondingArrowKey(direction);

    const command = {
      type: 'move-player',
      playerId: state.playerId,
      keyPressed: correspondingArrowKey,
    }

    notifyAll(command)
  }

  function getCorrespondingArrowKey(direction) {
    return 'Arrow' + direction;
  }

  return {
    subscribe,
    registerPlayerId
  }
}