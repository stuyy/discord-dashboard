import styled from "styled-components";

export const SidebarStyle = styled.aside`
  width: 100px;
  background-color: ${({ theme }) => theme.base.sidebar};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
  position: fixed;
  overflow: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const MenuStyle = styled.aside`
  width: 350px;
  background-color: ${({ theme }) => theme.base.menu};
  color: ${({ theme }) => theme.text.main};
  height: 100%;
  font-family: "Poppins";
  box-sizing: border-box;
  position: fixed;
  margin-left: 100px;
`;

export const DashboardPageStyle = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme.base.content};
  color: ${({ theme }) => theme.text.main};
  font-family: "Poppins";
  box-sizing: border-box;
  position: absolute;
  margin-left: 450px;
  width: calc(100% - 450px);
`;

export const IconStyle = styled.div`
  height: 60px;
  width: 60px;
  background-color: #c4c4c4;
  border-radius: 50px;
`;

// Headers
export const BaseHeader = styled.header`
  box-sizing: border-box;
  height: ${({ theme }) => theme.height.topContent};
  box-shadow: 0px 1px 25px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
`;
export const SidebarHeader = styled(BaseHeader)`
  justify-content: center;
`;
export const DashboardHeader = styled(BaseHeader)`
  padding: 25px;
`;
export const MenuHeader = styled(BaseHeader)`
  padding: 25px;
`;

export const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px;
`;

export const GuildIcon = styled(IconStyle)`
  height: 60px;
  width: 60px;
  margin: 5px 0px;
`;
