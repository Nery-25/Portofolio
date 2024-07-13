function downloadOrOpenCV() {
  // URL of the CV file
  const cvUrl = "./assets/Rui Nery CV - EV.pdf";
  // Prompt user to confirm download or open in new tab
  const shouldDownload = confirm(
    "Do you want to download the CV? Click Cancel to open in a new tab."
  );

  if (shouldDownload) {
    // Create a temporary link element for downloading the file
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "Rui Nery CV";
    document.body.appendChild(link);
    link.click(); // Trigger download
    document.body.removeChild(link); // Remove the link element
  } else {
    // Open the CV file in a new tab
    window.open(cvUrl, "_blank");
  }
}
