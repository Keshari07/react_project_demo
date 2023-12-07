function UserInfo() {
  const user_Type = document.getElementById("user_Type").value;
  const first_Name = document.getElementById("first_Name").value;
  const last_Name = document.getElementById("last_Name").value;
  const email_Address = document.getElementById("email_Address").value;
  const password = document.getElementById("password").value;
  const password_C = document.getElementById("password_C").value;
  const data = fetch("http://localhost:9090/demo/app/addusertype", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      user_Type: user_Type,
      first_Name: first_Name,
      last_Name: last_Name,
      email_Address: email_Address,
      password: password,
      password_C: password_C,
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
