import type { NextPage } from "next";
import useRandomStation from "../hooks/useRandomStation";

const Home: NextPage = () => {
  const { refetch, station, loading } = useRandomStation();

  if (loading || !station) {
    return <p>Loading...</p>;
  }

  return <h1>{station?.name}</h1>;
};

export default Home;
