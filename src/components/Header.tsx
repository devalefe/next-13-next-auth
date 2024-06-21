import { SignOut } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";
import { Button } from "./Button";

type HeaderProps = {
  avatarUrl: string;
  userFullName: string;
  userEmail: string;
  handleLogout: () => void;
};

export const Header = ({
  avatarUrl,
  userFullName,
  userEmail,
  handleLogout,
}: HeaderProps) => (
  <div className="z-50 flex h-16 items-center justify-between gap-3 bg-gray-50 px-3 py-2 shadow-md">
    <div className="flex items-center gap-3">
      <Avatar size={48} src={avatarUrl} />

      <div className="flex flex-col gap-1">
        <span className="text-sm font-bold">{userFullName}</span>
        <span className="text-xs text-gray-600">{userEmail}</span>
      </div>
    </div>

    <Button
      text="Sair"
      icon={<SignOut size={14} />}
      onClick={handleLogout}
      className="px-4 py-2 text-xs"
    />
  </div>
);
