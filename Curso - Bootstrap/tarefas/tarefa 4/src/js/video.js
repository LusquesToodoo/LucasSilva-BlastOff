const page = window.location.href.split("?")[0].split("/");

if (page[page.length - 1] == "video.html") {
  const urlParams = new URLSearchParams(window.location.href);
  const videoName = urlParams.get("name");
  const videoUrl = urlParams.get("link");
  const videoNameContainer = document.querySelector(".video-name");
  const iframeContainer = document.querySelector(".iframe-container");
  const iframe = `
<iframe class="px-2" width="100%" height="650" src="${videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
</iframe>
`;
  iframeContainer.insertAdjacentHTML("beforeend", iframe);
  videoNameContainer.innerText = videoName;
}
