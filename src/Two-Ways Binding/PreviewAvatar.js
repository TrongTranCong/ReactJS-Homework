import React from "react";
import { useState, useEffect } from "react";
export default function PreviewAvatar() {
  const [avatar, setAvatar] = useState();

  useEffect(() => {
    //cleanup funcs
    return () => {
      if (!avatar) return null;
      URL.revokeObjectURL(avatar.preview);  
    };
  }, [avatar]);
  const handlePreviewAvatar = (e) => {
    //file là object
    const file = e.target.files[0];
    // Vì file là object nên có thể tùy ý thêm 1 property
    file.preview = URL.createObjectURL(file); //preview là 1 property

    setAvatar(file);
  };
  return (
    <div>
      <h1>Avatar</h1>
      <input type="file" onChange={handlePreviewAvatar} />
      {avatar && <img src={avatar.preview} alt="" width={"60%"} />}
    </div>
  );
}
