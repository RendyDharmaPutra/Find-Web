import { ApiResponseType } from "~/core/type/api_response_type";
import { ProfileCard } from "../../card/profile_card";
import { ProfileType } from "../../../type/profile_type";
import { ProfileNotFound } from "./profile_not_found";

type HomeProfileProps = {
  profile: ApiResponseType<{
    profile: ProfileType;
  }>;
};

export const HomeProfile: React.FC<HomeProfileProps> = (props) => {
  const profile = props.profile;

  return (
    <section className="flex flex-col w-full h-fit max-h-[200px] border border-darkSecondaryBG/10 shadow-sm ">
      {profile.status === "Success" ? (
        <ProfileCard profile={profile.data!.profile} />
      ) : (
        <ProfileNotFound
          message={profile.message}
          description={profile.error!}
        />
      )}
    </section>
  );
};
