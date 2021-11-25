import type { NextPage } from "next";
import styled from "styled-components";
import Button from "../components/Button";
import parenthesisRegexp from "../constants/parenthesisRegexp";
import useRandomStation from "../hooks/useRandomStation";

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PreText = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
`;

const StationName = styled.h1`
  font-size: 3rem;
  font-weight: bold;
`;

const LinesContainer = styled.ul`
  margin: 0;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
`;

const LineRow = styled.li`
  background-color: ${({ color }: { color: string }) => color};
  padding: 8px 16px;
  border-radius: 16px;
  margin: 8px;
`;

const ShareLink = styled.a`
  margin-top: 32px;
`;

const Home: NextPage = () => {
  const { station, loading } = useRandomStation();

  if (loading || !station) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <PreText>あなたが次に行くべき駅は...</PreText>
      <StationName>{station.name}</StationName>
      <LinesContainer>
        {station.lines.map((line) => (
          <LineRow color={`#${line.lineColorC}` || "#212121"} key={line.id}>
            {line.name.replace(parenthesisRegexp, "")}
          </LineRow>
        ))}
      </LinesContainer>
      <ShareLink
        href={`https://twitter.com/intent/tweet?url=https://neki.tinykitten.me&text=私が次に行くべき駅は、${station.name}駅でした！&via=tinykitten8&related=tinykitten8`}
        target="_blank"
        rel="noreferrer noopener"
      >
        <Button color="#1DA1F2">Twitterでシャアする</Button>
      </ShareLink>
    </Container>
  );
};

export default Home;
