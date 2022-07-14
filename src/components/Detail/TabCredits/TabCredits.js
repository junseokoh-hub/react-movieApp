import React from "react";
import { IMAGE_BASE_URL } from "../../../Config";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { handleImgError } from "../../../ErrorImg";

const CreditsContainer = styled.ul`
  display: flex;
  overflow-x: auto;
  @media screen and (max-width: 500px) {
    width: 100%;
  }
`;

const IndividualCredit = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 1em;
`;

const CreditsImg = styled.img`
  width: 7.5em;
  height: 180px;
  border-radius: ${(props) => props.theme.smallGap};
  border: ${(props) => props.border};
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
      {credits.slice(0, 8).map((item) => {
        const character = item.character;
        return (
          <IndividualCredit key={item.credit_id}>
            <Link to={`/profile/${item.id}`}>
              <CreditsImg
                src={`https://${IMAGE_BASE_URL}/w200${item.profile_path}`}
                alt={item.original_name}
                onError={handleImgError}
                border={item.profile_path === null ? "1px solid #fff" : ""}
              />
              <IndividualInfo>
                <span>{item.name}</span>
                <span>Position : {item.known_for_department}</span>
                {character.length > 10 ? (
                  <span>Character : {character.slice(0, 8)}...</span>
                ) : (
                  <span>Character : {character}</span>
                )}
              </IndividualInfo>
            </Link>
          </IndividualCredit>
        );
      })}
    </CreditsContainer>
  );
}

export default SecondMenuContent;
