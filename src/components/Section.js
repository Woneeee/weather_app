import styled from "styled-components";

const SSection = styled.section`
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

export const Section = ({ sectionData }) => {
  return (
    <SSection>
      <h3>{sectionData.weather[0].main}</h3>

      <TempWrap>
        <Temp className="temp">
          {Math.round(sectionData.main.temp)}
          <span>°</span>
        </Temp>

        <Temp>
          <Num>
            {Math.round(sectionData.main.temp_max)}
            <span>°</span>c
          </Num>

          <Num>
            {Math.round(sectionData.main.temp_min)}
            <span>°</span>c
          </Num>
        </Temp>
      </TempWrap>
    </SSection>
  );
};
