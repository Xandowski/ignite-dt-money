import styled from "styled-components";
import { darken } from 'polished'

export interface RadioBoxProps {
  isActive: boolean
  activeColor: string
}

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }
  
  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background-color: #e7e9ee;
    border: 1px solid #D7D7D7;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 0.25rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + input {
      margin-top: 1rem;
    }    
  }

  button[type="submit"] {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    margin-top: 1.5rem;
    background-color: var(--green);
    color: #fff;
    border: none;
    border-radius: 0.25rem;
    font-size: 1rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter:brightness(0.9)
    }
  }
`
export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
`

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #D7D7D7;
  background: ${({isActive, activeColor}) => isActive ? `var(--${activeColor}-light)` : 'transparent'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#D7D7D7')};
  }


  img {
    width: 20px;
    height: 20px;
  }

  span {
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title)
  }
`