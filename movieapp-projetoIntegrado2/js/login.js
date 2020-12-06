const getRequestToken = (data) => {
  const movie = data;
  // getAccountd(data.request_token);

  document.querySelector(".login1").addEventListener("click", (e) => {
    e.preventDefault();
    window.location = `https://www.themoviedb.org/authenticate/${movie.request_token}?redirect_to=https://movixapp.netlify.app/listas.html`;
    localStorage.setItem("request_token", movie.request_token);
  });
};

//   document.querySelector(".login1").addEventListener("click", () => {
//     console.log('xd')
//   });

const getAccountd = (data) => {
  let output = `${data.username} `;
  console.log(data)
  document.querySelector(".username").innerHTML = output;
};

const createSession = () => {
  const url = new URL(window.location);
  const token = url.searchParams.get("approved");
  const token2 = localStorage.getItem('request_token')
  // console.log(token2)
  // createSession() = function(){}

  if (token) {
    fetch(
      "https://api.themoviedb.org/3/authentication/session/new?api_key=4a5e130486cb63a2caff652d783f6a36",
      {
        method: "POST",
        body: JSON.stringify({ request_token: `${token2}` }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log(res);
        const hehe = res.session_id
        localStorage.setItem("sessionId", hehe);
        window.location = "index.html";
        // getAccount(localStorage.getItem('sessionId'))
      });
    }
};
createSession()


document.querySelector('.logout').addEventListener('click', (e) => {
  e.preventDefault()
  window.location = "index.html"
  localStorage.removeItem('sessionId')
  // fetch(
  //   "https://api.themoviedb.org/3/authentication/session/new?api_key=4a5e130486cb63a2caff652d783f6a36",
  //   {
  //     method: "DELETE",
  //     body: JSON.stringify({ session_id: `${localStorage.getItem("sessionId")}` }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   }
  // )
  //   .then((res) => res.json())
  //   .then((res) => {
  //     console.log(res);
  //   });
})