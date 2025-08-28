import styled from 'styled-components'

const HeaderWrapper = styled.div`
  color: var(--black-primary);
  font-size: 2rem;
  padding: 0.5rem;
  marginn: auto;
`
const Nav = styled.nav`
  
`
const Header = styled.header`
  margin: 0 auto;
  align-items: center;
  max-width: 120rem;
`

const LogoContainer = styled.div`
  grid-column: span 5;
`

const MobileMenuContainer = styled.div`
  grid-column: span 1;
`

const UserToolsContainer = styled.div`
  grid-column: span 6;
`

const NavBar = () => {
  return (
    <HeaderWrapper>
      <Nav aria-label='Navigation panel'>
        <Header className='grid-container'>
          <LogoContainer className='nav--grid__item'>LOGO-PH</LogoContainer>

          <MobileMenuContainer className='nav--grid__item lg--screen__menu'>
            <nav className='display--sm__off'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </MobileMenuContainer>

          <UserToolsContainer className='nav--grid__item'>
            <div className='flex-container gap-4 float-right'>

              <button className='nav-icon'>
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path>
                </svg>
              </button>


              <button className='nav-icon' aria-label="Login" type="button">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path>
                  </svg>
              </button>

              <a className='nav-icon' aria-label="Items in the basket" href="" title="Items in the basket">

                  <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                    <path stroke="currentColor" stroke-width="1.15" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                  </svg>

              </a>

              <button className='nav-icon' aria-label="menu" type="button" aria-haspopup="true">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                </svg>
              </button>
            </div>
          </UserToolsContainer>

        </Header>
      </Nav>
    </HeaderWrapper>
  )
}

export default NavBar