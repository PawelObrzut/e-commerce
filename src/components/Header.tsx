import styled from 'styled-components'

const HeaderWrapper = styled.div`
  color: var(--black-primary);
  font-size: 2rem;
  padding: 0.5rem 2.5rem;
  marginn: auto;
`

const Header = styled.header`
  margin: 0 auto;
  align-items: center;
  max-width: 120rem;
`

const LogoContainer = styled.div`
  grid-column: span 5;
`

const PrimaryMenuContainer = styled.div`
  grid-column: span 1;
`

const SecondaryMenuContainer = styled.div`
  grid-column: span 6;
`

const UserToolsContainer = styled.div`
  display: flex;
  float: right;
  align-items: center;
`

const SearchBarContainer = styled.div`
  display: grid;
  justify-content: end;
  align-items: center;
`

const SwooshContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 0;
  width: 0;
`

const InputBarContainer = styled.div`
  grid-column: 2;

`

const SeatchInputContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  vertical-align: baseline;
  transition: width 400ms cubic-bezier(0.6, 0, 0.1, 1);
`

const SearchIconContainer = styled.div`
  margin: 0;
  padding: 0;

`

const SearchIcon = styled.button`
  border: 0;
  display: flex;
  position: relative;
  width: 36px;
  padding: 6px;
  overflow-y: hidden;
`

const CancelSearchContainer = styled.div`
  opacity: 0;
  visibility: hidden;
  height: 0;
`

const SearchResultsContainer = styled.div`
  position: absolute;
  background: var(--white-primary);
  opacity: 0;
  visibility: hidden;
  transition: opacity 250ms cubic-bezier(0.6, 0, 0.1, 1);
`

const SearchScrim = styled.div`
  opacity: 0;
  z-index: 1;
  visibility: hidden;
  display: block;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`

const NavBar = () => {
  return (
    <HeaderWrapper>
      <nav aria-label='Navigation panel'>
        <Header className='grid-container'>
          <LogoContainer className='nav--grid__item'>
            <a href="">logo</a>
          </LogoContainer>

          <PrimaryMenuContainer className='nav--grid__item'>
            <nav className='display--sm__off'>
              <ul>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </nav>
          </PrimaryMenuContainer>

          <SecondaryMenuContainer className='nav--grid__item'>
            <UserToolsContainer>
              <search aria-label="Szukaj produktów">
                <form>
                  <SearchBarContainer>
                    <SwooshContainer></SwooshContainer>
                    <InputBarContainer>
                      <SeatchInputContainer>
                        <SearchIconContainer>
                          <SearchIcon>
                            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M13.962 16.296a6.716 6.716 0 01-3.462.954 6.728 6.728 0 01-4.773-1.977A6.728 6.728 0 013.75 10.5c0-1.864.755-3.551 1.977-4.773A6.728 6.728 0 0110.5 3.75c1.864 0 3.551.755 4.773 1.977A6.728 6.728 0 0117.25 10.5a6.726 6.726 0 01-.921 3.407c-.517.882-.434 1.988.289 2.711l3.853 3.853"></path></svg>
                          </SearchIcon>
                        </SearchIconContainer>

                      </SeatchInputContainer>
                      <div className='cancel-container'>

                      </div>
                    </InputBarContainer>
                    <CancelSearchContainer><button>Anuluj</button></CancelSearchContainer>
                    <SearchResultsContainer></SearchResultsContainer>
                    <SearchScrim />
                  </SearchBarContainer>
                </form>
              </search>


              <button className='nav-icon' aria-label="Zaloguj się">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none"><path stroke="currentColor" stroke-width="1.5" d="M3.75 21v-3a3.75 3.75 0 013.75-3.75h9A3.75 3.75 0 0120.25 18v3M12 3.75a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5z"></path></svg>
              </button>


              <a aria-label="Ulubione" href='' className='display--sm__off'></a>

              <a className='nav-icon' aria-label="Przedmioty w koszyku" href="">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M8.25 8.25V6a2.25 2.25 0 012.25-2.25h3a2.25 2.25 0 110 4.5H3.75v8.25a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75V8.25H17.5"></path>
                </svg>
              </a>

              <button className='nav-icon' aria-label="menu">
                <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" role="img" width="24px" height="24px" fill="none">
                  <path stroke="currentColor" stroke-width="1.5" d="M21 5.25H3M21 12H3m18 6.75H3"></path>
                </svg>
              </button>

            </UserToolsContainer>
          </SecondaryMenuContainer>
        </Header>
      </nav>
    </HeaderWrapper>
  )
}

export default NavBar