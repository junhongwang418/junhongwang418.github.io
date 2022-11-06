import * as React from "react";
import styled from "@emotion/styled";
import Spacing from "./Spacing";
import Link from "./Link";
import ThemeToggle from "./ThemeToggle";

const Root = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 32px;
`;

const NavigationRight = styled.div`
  display: flex;
`;

const NavigationLeft = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

interface HeaderProps {
  toggleTheme: () => void;
}

const Header = (props: HeaderProps) => {
  const { toggleTheme } = props;

  return (
    <Root>
      <NavigationLeft>
        <Logo>
          <Link href="/">JW</Link>
        </Logo>
        <Spacing width={32} />
        <ThemeToggle toggleTheme={toggleTheme} />
      </NavigationLeft>
      <NavigationRight>
        <Link href="/public/resume.pdf">💼 Resume</Link>
      </NavigationRight>
    </Root>
  );
};

export default Header;
