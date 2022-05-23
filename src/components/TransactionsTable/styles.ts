import styled from "styled-components";

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    thead {
      text-align: left;
      font-weight: 400;
      line-height: 1.5rem;
    }

    td, th {
      padding: 1rem 2rem;
      color: var(--text-body);
    }

    td {
      background-color: var(--shape);

      &:first-child {
        border-radius: 0.25rem 0 0 0.25rem;
        color: var(--text-title);
      }

      &:last-child {
        border-radius: 0 0.25rem 0.25rem 0;
      }
    }

    .deposit {
      color: var(--green)
    }

    .withdraw {
      color: var(--red)
    }
  }
  
`