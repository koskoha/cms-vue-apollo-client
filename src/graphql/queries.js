import { gql } from "apollo-boost";

/* User Queries */
export const GET_CURRENT_USER = gql`
  query {
    currentUser {
      id
      username
      email
      role
    }
  }
`;

/* User Mutations */
export const SIGNIN_USER = gql`
  mutation($login: String!, $password: String!) {
    signIn(login: $login, password: $password) {
      token
    }
  }
`;

export const SIGNUP_USER = gql`
  mutation($username: String!, $email: String!, $password: String!) {
    signUp(username: $username, email: $email, password: $password) {
      token
    }
  }
`;
