import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      {isLiked ? (
        <AiFillHeart color="red" size={50} onClick={handleLike} />
      ) : (
        <AiOutlineHeart color="red" size={50} onClick={handleLike} />
      )}
    </div>
  );
};

export default Like;
