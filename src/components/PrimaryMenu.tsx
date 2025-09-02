import styled from 'styled-components'

const PrimaryMenuContainer = styled.div`
  grid-column: span 1;
`

const PrimaryMenu = () => {
  return (
    <PrimaryMenuContainer className='nav--grid__item'>
      <nav className='display--sm__off'>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </PrimaryMenuContainer>
  )
}

export default PrimaryMenu