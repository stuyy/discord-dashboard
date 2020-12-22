import styled from "styled-components";

export const SidebarStyle = styled.aside`
  width: 100px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
`;

export const MenuStyle = styled.aside`
  width: 350px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
`;

export const DashboardPageStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  font-family: "Poppins";
`;
