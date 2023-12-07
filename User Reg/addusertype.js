function registerUser() {
  const userId = document.getElementById("userId").value;
  const userType = document.getElementById("userType").value;

  const data = fetch("http://localhost:9090/demo/app/addusertype", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: userId,
      userType: userType,
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
