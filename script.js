document.getElementById("submit-btn").addEventListener("click", function () {
     sendToChatGPT();
  });
  
  // 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
  
  function sendToChatGPT() {
    let value = document.getElementById("word-input").value;
  
    let body = {
      model: "gpt-3.5-turbo",
      messages: [{ "role": "user", "content": value }],
    };
  
    let headers = {
      Authorization: "Bearer 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",
    };
  
    axios
      .post("https://api.openai.com/v1/chat/completions", body, {
        headers: headers,
      })
      .then((response) => {
         let reply = response.data.choices[0].message.content;
        document.getElementById("reply-content").textContent = reply;
      });
  }
  // window.onload = function() {
  //   // Rediriger l'utilisateur vers la page de connexion lorsqu'il actualise la page.
  //   window.location.href = 'login.html';
  // }
  
  