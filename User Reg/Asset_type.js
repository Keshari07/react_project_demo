function asset_typeForm() {
  const asset_Id = document.getElementById("asset_Id").value;
  const assetType = document.getElementById("assetType").value;

  const data = fetch("http://localhost:9090/demo/app/addasset_type", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: asset_Id,
      userType: assetType,
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
      alert("Add Asset Type successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to Asset Type");
    });
}
