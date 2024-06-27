// pages/dashboard/settings/[[...slug]].tsx
import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <UserProfile />
    </div>
  );
};

export default UserProfilePage;
