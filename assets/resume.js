
  function copyAddress() {
    navigator.clipboard.writeText("pdg2619@gmail.com")
      .then(() => {
        alert("Code copied to clipboard!");
      })
      .catch(err => {
        console.error("Failed to copy code: ", err);
      });
  }