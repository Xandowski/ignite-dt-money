import styled from "styled-components";

type ContentProps = {
  total?: number
}

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin-top: -12.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

export const Content = styled.div<ContentProps>`
  background-color: ${(props) => (props.total && props.total > 0 && "var(--green)" || props.total && props.total < 0 && "var(--red)") || "var(--shape)" };
  padding: 1.5rem 2rem;
  border-radius: 0.25rem ;
  color: ${(props) => props.total ? "#FFF" : "var(--text-title)"};

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2.25rem;
    font-weight: 500;
  }
`