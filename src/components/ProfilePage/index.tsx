import React from 'react';

import { Container, Banner, Avatar, ProfileData, LocationIcon, CakeIcon, Followage, EditButton } from './styles';

import Feed from '../Feed';

const ProfilePage: React.FC = () => {
  return (
      <Container>
          <Banner>
              <Avatar />
          </Banner>

          <ProfileData>
              <EditButton outlined>Editar Perfil</EditButton>

              <h1>Leonardo Galvão</h1>
              <h2>@leo_galvao015</h2>

              <p>
                  Developer at <a href="https://starsystemweb.com.br">@StarSystem</a>
              </p>

              <ul>
                  <li>
                      <LocationIcon />
                      Ibitiúva, Brasil
                  </li>
                  <li>
                      <CakeIcon />
                      Nascido(a) em 11 de maio de 2000
                  </li>
              </ul>

              <Followage>
                  <span>
                      Seguindo <strong>52</strong>
                  </span>
                  <span>
                      <strong>520 </strong> seguidores
                  </span>
              </Followage>
          </ProfileData>

          <Feed />
      </Container>
  );
}

export default ProfilePage;