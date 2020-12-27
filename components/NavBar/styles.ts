import styled, { css } from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const Container = styled.nav``;

type ItemProps = {
  ifIsAImage?: boolean
}

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;

export const Item = styled.li<ItemProps>`
  margin: 0 10px;
  list-style-type: none;
  padding: 20px 5px;
  ${({ ifIsAImage }) =>
  ifIsAImage ? css`` :
  css`
    &:hover{
      border: 1px solid white;
    }
  `
  }

`;

export const Logo = styled(Image).attrs({
  height: 50,
  width: 100,
})`
  object-fit: contain;
`;

export const Linka = styled(Link)``;

export const ItemLink = styled.a`
  color: ${({ theme }) => theme.color.textColor};
  padding: 3px;
`;
