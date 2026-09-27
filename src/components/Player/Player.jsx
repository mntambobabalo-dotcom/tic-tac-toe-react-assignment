import React from 'react';
import Avatar from 'react-nice-avatar';
import { Subtitle } from '../../styles/General.styled';
import { AvatarWrapper, PlayerWrapper, Score } from './Player.styled';

function Player({ player, isPlayerActive }) {
  return (
    <PlayerWrapper>
      <AvatarWrapper isPlayerActive={isPlayerActive ?? false} accent={player.color}>
        <Avatar {...player.avatarConfig} />
      </AvatarWrapper>

      <Subtitle>
        {player.name} ({player.choice.toUpperCase()})
      </Subtitle>
      <Score>{player.score}</Score>
    </PlayerWrapper>
  );
}

export default Player;
