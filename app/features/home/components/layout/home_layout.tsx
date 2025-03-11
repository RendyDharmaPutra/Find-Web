import { ApiResponseType } from "~/core/type/api_response_type";
import { HomeHeader } from "../container/header/home_header";
import { HomePerson } from "../container/person/home_person";
import { HomeProfile } from "../container/home_profile";
import { PersonType } from "../../type/person_type";
import { ProfileType } from "../../type/profile_type";

type HomeLayoutProps = {
  data: {
    personResponse: ApiResponseType<{
      person: PersonType[];
    }>;
    profileResponse: ApiResponseType<{
      profile: ProfileType;
    }>;
  };
};

export const HomeLayout: React.FC<HomeLayoutProps> = (props) => {
  return (
    <section className="flex flex-col w-full h-full">
      <HomeHeader />
      <HomePerson person={props.data.personResponse} />
      <HomeProfile />
    </section>
  );
};
