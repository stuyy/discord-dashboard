import styled from "styled-components";

export const SidebarStyle = styled.aside`
  width: 100px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
`;

export const MenuStyle = styled.aside`
  width: 350px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
`;

export const DashboardPageStyle = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  font-family: "Poppins";
  box-sizing: border-box;
`;

export const IconStyle = styled.div`
  height: 50px;
  width: 50px;
  background-color: white;
  border-radius: 50px;
`;

export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
`;

export const SidebarHeader = styled(BaseHeader)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;
export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
`;
