import { useState } from 'react'
import styled from 'styled-components'
import PrimaryMenu from './PrimaryMenu'
import NavIcon from './NavIcon'
import { BasketIcon, HamburgerMenuIcon, UserIcon, SearchIcon, FavouritesIcon } from './SvgIcons'

const HeaderWrapper = styled.div`
  color: var(--black-primary);
  font-size: 2rem;
  padding: 0.5rem 2.5rem;
  margin: auto;
`

const Header = styled.header`
  display: grid;
  grid-template-columns: repeat(12,minmax(0,1fr));
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
  grid-template-columns: 0 36px 0;
  justify-content: end;
  align-items: center;

  @media (min-width: 1200px) {
    grid-template-columns: 0 180px 0;
  }

  
`

const SwooshContainer = styled.div`
  visibility: hidden;
  opacity: 0;
  height: 0;
  width: 0;
`

const InputBarContainer = styled.div`
  grid-column: 2;
  margin: 0;
  padding: 0;
  border: 0;
  z-index: 20;
`

const SearchInputContainer = styled.div`
  display: flex;

  vertical-align: baseline;
  transition: width 400ms cubic-bezier(0.6, 0, 0.1, 1);
  border-radius: 2rem;


  &:has(input:hover) {
    background-color: var(--grey-light);
  }

  @media (min-width: 1200px) {
    width: 180px;
    background-color: var(--grey-light-2);
  }

  transition: width 400ms cubic-bezier(0.6, 0, 0.1, 1);
`

const SearchIconContainer = styled.div`
  border: 0;
  display: flex;
  position: relative;
  overflow-y: hidden;
  z-index: 5;
`

const SearchInput = styled.input<{ $isOpen: boolean }>`
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  border-radius: 2rem;
  width: ${({ $isOpen }) => ($isOpen ? "100%" : 0)};
  padding: 0;
  cursor: text;
  font-size: 1rem;
  outline: none;


  &:hover {
    background-color: var(--grey-light);
  }
  
  @media (min-width: 1200px) {
    visibility: visible;
    width: 100%;
    margin: 0;
    padding: 10px 0px 9px 12px;
  }
`

const CancelSearchContainer = styled.div<{ $isOpen: boolean }>`
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  height: 0;
  z-index: 20;

  height: auto;
  width: auto;
`

const SearchResultsContainer = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  background-color: beige;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  transition: opacity 250ms cubic-bezier(0.6, 0, 0.1, 1);
  width: 100%;
  min-height: 80vh;
  top: 0;
  right: 0;
  z-index: 10;
  
`

const SerchPopUpContainer = styled.div`
  margin-top: 3rem;
  border: solid 1px red;
`

const PopularSerches = styled.section`
  display: grid;
  grid-template-columns: repeat(10,minmax(0,1fr));
  background-color: azure;
  min-height: 120px;
`

const SearchTrey = styled.div`
  display: grid;
  grid-column: 3/9;
  column-gap: 12px;
`

const NavBar = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <HeaderWrapper>
      <nav aria-label='Navigation panel'>
        <Header>
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

                      <SearchInputContainer>
                        <SearchIconContainer>
                          <NavIcon
                            onClick={() => setSearchOpen(true)}
                            icon={SearchIcon}
                            aria-label="Search"
                            type="button" />
                        </SearchIconContainer>

                        <SearchInput
                          $isOpen={searchOpen}
                          onFocus={() => setSearchOpen(true)}
                          type="search"
                          value=""
                          placeholder='Search...'
                          autoComplete='off'
                          aria-label='Search for items'
                          inputMode='search'
                          aria-required="true"
                        />

                      </SearchInputContainer>
                      <div className='cancel-container'>

                      </div>
                    </InputBarContainer>

                    <CancelSearchContainer $isOpen={searchOpen} >
                      <button onClick={() => setSearchOpen(false)} type="submit" >Anuluj</button>
                    </CancelSearchContainer>

                    <SearchResultsContainer $isOpen={searchOpen} >
                      <SerchPopUpContainer>
                        <PopularSerches aria-label='Popular Search Terms'>
                          <SearchTrey>
                            <p>Popular search terms</p>
                            <div>
                              {/* <a href="">model x1</a>
                              <a href="">shoes</a>
                              <a href="">fashion in Stockholm</a>
                              <a href="">kids trousers</a> */}
                            </div>
                          </SearchTrey>
                        </PopularSerches>
                      </SerchPopUpContainer>
                    </SearchResultsContainer>

                  </SearchBarContainer>
                </form>
              </search>

              <NavIcon icon={UserIcon} aria-label="Login" type="button" />
              <NavIcon as="a" icon={FavouritesIcon} aria-label="Favourites" hideOnMobile />
              <NavIcon as="a" href="/basket" icon={BasketIcon} aria-label="Basket" />
              <NavIcon icon={HamburgerMenuIcon} aria-label="Menu" type="button" hideOnDesktop />

            </UserToolsContainer>
          </SecondaryMenuContainer>
        </Header>
      </nav>
    </HeaderWrapper>
  )
}

export default NavBar