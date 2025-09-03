import type { ElementType, ComponentPropsWithoutRef } from "react";
import styled from "styled-components";

const NavIconWrapper = styled.button<{ $hideOnMobile?: boolean; $hideOnDesktop?: boolean }>`
  position: relative;
  display: inline-grid;
  place-items: center;
  aspect-ratio: 1;
  width: 40px;
  border-radius: 50%;
  overflow: hidden;
  background: none;
  border: none;
  cursor: pointer;

  svg {
    width: auto;
    height: auto;
    display: block;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: var(--grey-strong);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.2s ease;
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  ${({ $hideOnMobile }) =>
    $hideOnMobile &&
    `
    @media (max-width: 959px) {
      display: none;
    }
  `}

  ${({ $hideOnDesktop }) => 
    $hideOnDesktop &&
  `
    @media (min-width: 959px) {
      display: none;
    }
  `
  }
`;

type NavIconProps<T extends ElementType> = {
  onClick?: () => void,
  hideOnMobile?: boolean,
  hideOnDesktop?: boolean,
  as?: T;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
} & ComponentPropsWithoutRef<T>;

const NavIcon = <T extends ElementType = "button">({
  as,
  icon: Icon,
  hideOnMobile,
  hideOnDesktop,
  ...props
}: NavIconProps<T>) => {
  return (
    <NavIconWrapper as={as} {...props} $hideOnMobile={hideOnMobile} $hideOnDesktop={hideOnDesktop}>
      <Icon />
    </NavIconWrapper>
  );
};

export default NavIcon;
