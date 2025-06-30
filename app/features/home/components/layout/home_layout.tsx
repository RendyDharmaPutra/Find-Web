import { ApiResponseType } from "~/core/type/api_response_type";
import { HomeHeader } from "../container/header/home_header";
import { HomePerson } from "../container/person/home_person";
import { HomeProfile } from "../container/profile/home_profile";
import { PersonType } from "../../type/person_type";
import { ProfileType } from "../../type/profile_type";
import { useEffect, useState } from "react";

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
  const [query, setQuery] = useState("");

  return (
    <section className="flex flex-col w-full h-full">
      <HomeHeader query={query} setQuery={setQuery} />
      <HomePerson person={props.data.personResponse} query={query} />
      <HomeProfile profile={props.data.profileResponse} />
    </section>
  );
};
