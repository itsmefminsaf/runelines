import Image from "next/image";

const ProfilePhoto = ({ src, userName }: { src: string; userName: string }) => {
  return (
    <div className="aspect-square size-fit">
      <Image
        className="rounded-full"
        src={src}
        alt={`${userName}'s profile photo`}
        width={128}
        height={128}
      />
    </div>
  );
};

export default ProfilePhoto;
