let progress = 0;
const progressBar = document.querySelector(".progress-loading > .progress-bar");
const containerLoading = document.querySelector(".container-loading");

function loader() {
  setTimeout(() => {
    progress += 5;
    if (progress > 100) {
      containerLoading.style.opacity = "0";
      return;
    }
    progressBar.innerText = `${progress}%`;
    progressBar.style.width = `${progress}%`;
    loader();
  }, 100);
}

loader();
