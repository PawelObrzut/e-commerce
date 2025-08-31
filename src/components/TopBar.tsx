import styled from 'styled-components'

const TopBarConntainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12,minmax(0,1fr));
  align-items: center;
  margin: 0 auto;
  max-width: 1920px;
  background-color: var(--grey-light);
  padding: 0 3rem;
`

const GridItem = styled.div`
  grid-column: spann 6
`

const TopBarList = styled.ul`
  display: flex;
  float: right;
  align-items: center;
`

const VerticalLine = styled.div`
  border-right: 1px solid;
  height: 12px;
  margin: 12px;
`

const TopBar = () => {
  return (
    <TopBarConntainer>
      <GridItem />
      <GridItem>
        <nav aria-label="Login Nav Panel">
          <TopBarList className="desktop-list">
            <li className='flex-container'>
              <a href="#">
                <p role="presentation">Dołącz do nas</p>
              </a>
              <VerticalLine />
            </li>
            <li>
              <a href="#">
                <p role="presentation">Zaloguj się</p>
              </a>
            </li>
          </TopBarList>
        </nav>
      </GridItem>
    </TopBarConntainer>
  )
}

export default TopBar