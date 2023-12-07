function registerUser() {
  const userName = document.getElementById("userName").value;
  const userEmail = document.getElementById("userEmail").value;
  const userPassword = document.getElementById("userPassword").value;

  const data = fetch("http://localhost:9090/demo/app/adduser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
      about: "Welcome",
    }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Handle the response data as needed
      alert("User added successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add user");
    });
}
