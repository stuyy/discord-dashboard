import { gql } from "@apollo/client";

export const getUser = gql`
  {
    getUser {
      id
      username
      avatar
      discriminator
      guilds {
        id
        name
        icon
        banner
        description
      }
    }
  }
`;
