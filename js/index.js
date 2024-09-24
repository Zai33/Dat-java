const myVedio = document.getElementById("vedio1");
const playPaused = () => {
  if (myVedio.paused) {
    myVedio.play();
  } else {
    myVedio.pause();
  }
};

const makeBig = () => {
  myVedio.width = 560;
};

const makeSmall = () => {
  myVedio.width = 320;
};

const makeNormal = () => {
  myVedio.width = 420;
};
