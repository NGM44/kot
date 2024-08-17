export async function downloadBase64File(
  base64: string,
  type: string,
  fileName: string
) {
  const blob = await fetch(`data:${type};base64,${base64}`).then((res) =>
    res.blob()
  );
  const anchor = document.createElement("a");
  const blobURL = URL.createObjectURL(blob);
  anchor.href = blobURL;
  anchor.download = fileName;
  anchor.click();
}
