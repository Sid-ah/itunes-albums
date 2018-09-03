// @flow

import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 32%;
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  padding-right: 10px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 46%;
  float: left;
  margin-right: 10px;
`;

const AlbumCard = props => {
  const releaseDate = props.releaseDate && props.releaseDate.split ('T')[0];
  return (
    <Wrapper>
      <Image
        alt={`${props.artistName} Show Poster`}
        src={props.artworkUrl100}
      />
      <div>
        <h3>{props.collectionName}</h3>
        <h3>Genre: {props.primaryGenreName}</h3>
        <h4>Release date: {releaseDate}</h4>
        <p>Price: {props.collectionPrice} {props.currency}</p>
      </div>
    </Wrapper>
  );
};

export default AlbumCard;
