import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  padding: 40px;
  font-family: Roboto;
  min-height: 100vh;
`

export const ResultContainer = styled.ul`
  padding: 20px;
  overflow: auto;
  height: 85%;
  background-color: #ffc533;
`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 10px;
  height: 100%;

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    max-height: 100%;
  }
`

export const LeftHeading = styled.h1`
  color: #272c47;
  font-size: 35px;
  height: 15%;
`

export const RightHeading = styled.h1`
  color: #ffbf1f;
  font-size: 25px;
  margin-bottom: 30px;
`

export const EmptyImage = styled.img`
  width: 100%;
  max-height: 99%;
`

export const LeftPanel = styled.div`
  flex: 1;
  background-color: #ffbf1f;
  display: flex;
  flex-direction: column;
  color: #000;
  padding: 20px;
`

export const RightPanel = styled.form`
  flex: 1;
  background-color: #0f172a;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
`

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  width: 100%;
`

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #ffc107;
  color: #000;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0a800;
  }
`

export const Result = styled.li`
  margin-top: 20px;
  font-size: 18px;
  list-style-type: none;
  font-weight: bold;
  width: 100%;
`
