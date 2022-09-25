let progress = 0;
const progressBar = document.querySelector(".progress-loading > .progress-bar");
const containerLoading = document.querySelector(".container-loading");
const loading = document.querySelector(".loading");

function loader() {
  setTimeout(() => {
    progress += 5;
    if (progress > 100) {
      loading.style.opacity = "0";
      setTimeout(() => {
        loading.style.display = "none";
      }, 600);
      return;
    }
    progressBar.innerText = `${progress}%`;
    progressBar.style.width = `${progress}%`;
    loader();
  }, 100);
}

loader();