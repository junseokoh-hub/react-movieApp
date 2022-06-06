import React from "react";
import { IMAGE_BASE_URL } from "../../../Config";
import styled from "styled-components";

const CreditsContainer = styled.ul`
  display: flex;
`;

const IndividualCredit = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
`;

const CreditsImg = styled.img`
  width: 7.5em;
`;

const IndividualInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    margin: 0.2em 0;
    &:nth-child(1) {
      color: ${(props) => props.theme.bgColor};
      font-size: 1.1em;
      font-weight: 700;
    }
  }
`;

function SecondMenuContent({ credits }) {
  return (
    <CreditsContainer>
      {credits.cast &&
        credits.cast.slice(0, 8).map((item) => {
          return (
            <IndividualCredit key={item.credit_id}>
              <CreditsImg
                src={`https://${IMAGE_BASE_URL}/w200${item.profile_path}`}
                alt={item.original_name}
              />
              <IndividualInfo>
                <span>{item.name}</span>
                <span>Position : {item.known_for_department}</span>
                {item.character.length > 10 ? (
                  <span>Character : {item.character.slice(0, 8)}...</span>
                ) : (
                  <span>Character : {item.character}</span>
                )}
              </IndividualInfo>
            </IndividualCredit>
          );
        })}
    </CreditsContainer>
  );
}

export default SecondMenuContent;
