import { memo } from "react";

const UserCard = memo(function UserCard({ user }) {
  console.log("UserCard render");

  return (
    <div>
      <h2>{user.name}</h2>
      <p>Amžius: {user.age}</p>
    </div>
  );
});

export default UserCard;