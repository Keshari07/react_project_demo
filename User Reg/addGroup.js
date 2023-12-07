function groupUser() {
  const groupId = document.getElementById("groupID").value;
  const groupType = document.getElementById("groupType").value;

  const data = fetch("http://localhost:9090/demo/app/addgrouptype", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: groupId,
      userType: groupType,
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
      alert("Group User successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to Group User");
    });
}
