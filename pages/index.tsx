import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";
import Button from "../components/Button";
import Header from "../components/Header";
import parenthesisRegexp from "../constants/parenthesisRegexp";
import PREFECTURES from "../constants/prefectures";
import useRandomStation from "../hooks/useRandomStation";

const Container = styled.div`
  min-height: 100vh;
  @supports (-webkit-touch-callout: none) {
    min-height: -webkit-fill-available;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 16px;
  overflow: hidden;
`;

const PreText = styled.h2`
  font-weight: bold;
  margin-bottom: 1rem;
  text-align: center;
`;

const StationName = styled.h1`
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
`;

const AddressText = styled.p`
  text-align: center;
  margin-top: 16px;
`;

const LinesContainer = styled.ul`
  margin: 0;
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const LineRow = styled.li`
  background-color: ${({ color }: { color: string }) => color};
  padding: 8px 16px;
  border-radius: 16px;
  margin: 8px;
`;

const ReloadButton = styled(Button)`
  margin-top: 32px;
`;

const ShareLink = styled.a`
  margin-top: 16px;
`;

const ExternalLink = styled.a`
  color: white;
  margin-top: 48px;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  line-height: 1.5;
`;

const SmallText = styled.span`
  font-size: 0.75rem;
`;

const Home: NextPage = () => {
  const { station, loading, refetch } = useRandomStation();

  if (loading || !station) {
    return (
      <>
        <Head>
          <title>ネキ</title>
        </Head>
        <Header />
        <Container>
          <p>Loading...</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>ネキ</title>
      </Head>
      <Header />
      <Container>
        <PreText>あなたが次に行くべき駅は...</PreText>
        <StationName>{station.name}</StationName>
        <AddressText>{station.address}</AddressText>
        <LinesContainer>
          {station.lines.map((line) => (
            <LineRow color={`#${line.lineColorC}` || "#212121"} key={line.id}>
              {line.lineSymbols.length
                ? `[${line.lineSymbols.map((ls) => ls.lineSymbol).join("/")}] `
                : null}
              {line.name.replace(parenthesisRegexp, "")}
            </LineRow>
          ))}
        </LinesContainer>
        <ReloadButton onClick={() => refetch()} color="#5f5f5f">
          別の駅を探す
        </ReloadButton>
        <ShareLink
          href={`https://twitter.com/intent/tweet?url=https://neki.tinykitten.me&text=私が次に行くべき駅は、${
            station.name
          }駅(${
            PREFECTURES[station.prefId - 1]
          })でした！&via=tinykitten8&related=tinykitten8`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <Button color="#1DA1F2">Twitterでシャアする</Button>
        </ShareLink>
        <ExternalLink
          href="https://trainlcd.app"
          target="_blank"
          rel="noreferrer noopener"
        >
          TrainLCDアプリいかがですか
          <br />
          <SmallText>(趣味で作ってるので無料ですよ)</SmallText>
        </ExternalLink>
      </Container>
    </>
  );
};

export default Home;
