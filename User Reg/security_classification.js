function security_classification_Type() {
  const security_classification_Id = document.getElementById(
    "security_classification_Id"
  ).value;
  const security_classification_Type = document.getElementById(
    "security_classification_Type"
  ).value;

  const data = fetch(
    "http://localhost:9090/demo/app/security_classification_Type",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-origin": "*",
        Accept: "application/json",
      },
      body: JSON.stringify({
        id: security_classification_Id,
        security_classification_Type: security_classification_Type,
      }),
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data); // Handle the response data as needed
      alert("Add Security Classification Type successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to Security Classification Type");
    });
}
