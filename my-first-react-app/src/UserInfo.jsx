import { memo } from "react";

const UserInfo = memo(function UserInfo({ user }) {
  console.log("UserInfo render");

  return (
    <div>
      <h2>Vartotojas: {user.name}</h2>
      <p>Amžius: {user.age}</p>
    </div>
  );
});

export default UserInfo;