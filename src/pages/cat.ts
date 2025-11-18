export async function fetchCatData() {
  const response = await fetch("https://api.thecatapi.com/v1/images/search");
  const data = await response.json();
  return data[0].url;
}

export const getCatLogicButton = () => {
  const button = document.getElementById("cat-image-button");
  const catImage = document.getElementById("cat-image") as HTMLImageElement;

  if (button && catImage) {
    try {
      button.addEventListener("click", async () => {
        const imageUrl = await fetchCatData();
        catImage.src = imageUrl;
      });
    } catch (error) {
      console.error("Error fetching cat image:", error);
    }
  }
};
