import styled from "styled-components";

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 10rem;
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #fff;
    width: 12.5rem;
    height: 3rem;
    border-radius: 0.25rem;
    background-color: var(--blue-light);
    border: none;
    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9)
    }
  }
`