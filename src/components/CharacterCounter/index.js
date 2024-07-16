import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {
  MainContainer,
  ResultContainer,
  Container,
  LeftPanel,
  RightPanel,
  Result,
  LeftHeading,
  RightHeading,
  InputContainer,
  Input,
  Button,
  EmptyImage,
} from './styledComponents'

class CharacterCounter extends Component {
  state = {charList: [], inputValue: ''}

  handleInputChange = event => {
    this.setState({inputValue: event.target.value})
  }

  handleAddClick = event => {
    event.preventDefault()
    const {inputValue} = this.state

    const newItem = {id: uuidv4(), name: inputValue.trim()}

    this.setState(prev => ({
      charList: [...prev.charList, newItem],
      inputValue: '',
    }))
  }

  renderEmptyView = () => (
    <EmptyImage
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
    />
  )

  render() {
    const {inputValue, charList} = this.state
    return (
      <MainContainer>
        <Container>
          <LeftPanel>
            <LeftHeading>Count the characters like a Boss...</LeftHeading>
            <ResultContainer>
              {charList.length === 0
                ? this.renderEmptyView()
                : charList.map(each => {
                    const result = `${each.name}: ${each.name.length}`
                    return (
                      <Result key={each.id}>
                        <p>{result}</p>
                      </Result>
                    )
                  })}
            </ResultContainer>
          </LeftPanel>
          <RightPanel onSubmit={this.handleAddClick}>
            <RightHeading>Character Counter</RightHeading>
            <InputContainer>
              <Input
                type="text"
                value={inputValue}
                onChange={this.handleInputChange}
                placeholder="Enter the Characters here"
              />
              <Button type="submit">Add</Button>
            </InputContainer>
          </RightPanel>
        </Container>
      </MainContainer>
    )
  }
}

export default CharacterCounter
