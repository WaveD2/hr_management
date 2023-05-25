const uploadAvatar = async () => {
  const file = await generateAvatarUpload(
    previewCanvasRef.current,
    completedCrop
  );
  if (file) {
    const formData = new FormData();
    formData.append("file", file, file.name);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: Cookies.get(ACCESS_TOKEN_KEY) || "",
      },
    };
    const json = await axios.put(API_PATHS.userProfile, formData, config);
    if (json.data && json.data.code === RESPONSE_STATUS_SUCCESS) {
      dispatch(setUserInfo(json.data.data));
    }
  }
};

const getCanvasBlob = (canvas: any): any => {
  return new Promise(function (resolve) {
    canvas.toBlob(
      (blob: any) => {
        resolve(blob);
      },
      "image/jpeg",
      1
    );
  });
};

export const generateAvatarUpload = async (canvas: any, crop: any) => {
  if (!crop || !canvas) {
    return null;
  }
  let file = null;
  const blobCanvas: Blob = await getCanvasBlob(canvas);
  file = new File([blobCanvas], "avatar.jpeg", { type: "image/jpeg" });
  return file;
};
