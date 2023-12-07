function assetInfoForm() {
  const user_Id = document.getElementById("user_Id").value;
  const asset_type = document.getElementById("asset_type").value;
  const asset_name = document.getElementById("asset_name").value;
  const asset_identifier = document.getElementById("asset_identifier").value;
  const custodian = document.getElementById("custodian").value;
  const user_type = document.getElementById("user_type").value;
  const asset_description = document.getElementById("asset_description").value;
  const backup_location = document.getElementById("backup_location").value;
  const data = fetch("http://localhost:9090/demo/app/assetInfo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-origin": "*",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: user_Id,
      asset_Type: asset_type,
      asset_Name: asset_name,
      asset_Identifier: asset_identifier,
      custodian: custodian,
      user_Type: user_type,
      asset_Description: asset_description,
      location: location,
      security_Classification: security_classification,
      backup_Location: backup_location,
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
      alert("assetInfoForm added successfully");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to add assetInfoForm");
    });
}
