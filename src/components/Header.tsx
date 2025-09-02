import styled from 'styled-components'
import PrimaryMenu from './PrimaryMenu'
import NavIcon from './NavIcon'
import { BasketIcon, HamburgerMenuIcon, UserIcon, SearchIcon, FavouritesIcon } from './SvgIcons'

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
  border: 0;
  display: flex;
  position: relative;
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

          <PrimaryMenu />

          <SecondaryMenuContainer className='nav--grid__item'>
            <UserToolsContainer>
              <search aria-label="Szukaj produktów">
                <form>
                  <SearchBarContainer>
                    <SwooshContainer></SwooshContainer>
                    <InputBarContainer>
                      <SeatchInputContainer>
                        <SearchIconContainer>
                          <NavIcon icon={SearchIcon} aria-label="Login" type="button" />
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

              <NavIcon icon={UserIcon} aria-label="Login" type="button" />
              <NavIcon  as="a" icon={FavouritesIcon} aria-label="Favourites" hideOnMobile />
              <a aria-label="Ulubione" href='' className='display--sm__off'></a>
              <NavIcon as="a" href="/basket" icon={BasketIcon} aria-label="Basket" />
              <NavIcon icon={HamburgerMenuIcon} aria-label="Menu" type="button" />


            </UserToolsContainer>
          </SecondaryMenuContainer>
        </Header>
      </nav>
    </HeaderWrapper>
  )
}

export default NavBar