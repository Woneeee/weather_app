import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";
import { Helmet } from "react-helmet-async";
import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

const Container = styled.div`
  max-width: 450px;
  width: 100%;
  margin: 0 auto;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(82, 108, 177, 1) 0%,
    rgba(223, 160, 160, 0.6251750700280112) 100%
  );
  /* css gradient 구글에 쳐서 코드 복사 */
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  // console.log(lat, lon);

  // console.log(data);

  // console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Title titleName={"HOME"} />
          {data && (
            <Container>
              <Header headerData={data} />

              <Section sectionData={data} />
            </Container>
          )}
        </>
      )}
    </>
  );
};
