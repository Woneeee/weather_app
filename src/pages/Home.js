import { useQuery } from "@tanstack/react-query";
import { getWeather } from "../api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faPlus } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { useCurrentPos } from "../lib/useCurrentPos";
import { Loading } from "../components/Loading";

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

const SHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 40px;
`;

const Menu = styled.div`
  font-size: 26px;
`;

const MyLocation = styled.div`
  font-size: 24px;
  text-align: center;
  p {
    font-size: 16px;
    margin-top: 10px;
  }
`;

const More = styled.div`
  font-size: 26px;
`;

const Section = styled.section`
  margin-top: 50%;
  padding: 0 40px;

  h3 {
    font-size: 46px;
    font-weight: 200;
  }
`;

const TempWrap = styled.div`
  display: flex;
  justify-content: space-between;

  .temp {
    font-size: 180px;
    font-weight: 200;
    span {
      display: block;
      font-size: 90px;
      transform: translate(200px, -170px);
    }
  }
`;

const Temp = styled.div`
  width: 50%;
  &:nth-child(2) {
    height: 180px;
    /* background-color: gray; */
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    flex-direction: column;
  }
`;

const Num = styled.div`
  font-size: 34px;
  font-weight: 300;
  padding: 15px 0;
  &:nth-child(2) {
    border-top: 1px solid #eee;
  }
`;

export const Home = () => {
  const { lat, lon } = useCurrentPos();
  const { data, isLoading } = useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: getWeather,
  });

  // console.log(lat, lon);

  console.log(data);

  console.log(isLoading);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {data && (
            <Container>
              <SHeader>
                <Menu>
                  <FontAwesomeIcon icon={faBars} />
                </Menu>

                <MyLocation>
                  <h3>{data.name}</h3>
                  <p>Sat, 19:30 pm</p>
                </MyLocation>

                <More>
                  <FontAwesomeIcon icon={faPlus} />
                </More>
              </SHeader>

              <Section>
                <h3>{data.weather[0].main}</h3>

                <TempWrap>
                  <Temp className="temp">
                    {Math.round(data.main.temp)}
                    <span>°</span>
                  </Temp>

                  <Temp>
                    <Num>
                      {Math.round(data.main.temp_max)}
                      <span>°</span>c
                    </Num>

                    <Num>
                      {Math.round(data.main.temp_min)}
                      <span>°</span>c
                    </Num>
                  </Temp>
                </TempWrap>
              </Section>
            </Container>
          )}
        </>
      )}
    </>
  );
};
