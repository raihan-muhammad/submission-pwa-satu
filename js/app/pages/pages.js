const content = document.querySelector("#body-content");

const loadPage = async (page) => {
  try {
    const res = await fetch(`pages/${page}.html`);
    const resText = await res.text();
    content.innerHTML = resText;
  } catch (err) {
    console.log(err);
  }
};

export default loadPage;
