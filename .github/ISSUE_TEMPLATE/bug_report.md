---
name: Bug report
about: Help us improve react
title: ''
labels: ''
assignees: ''

---

## 버그 내용
 
## 재현 과정
 
1. Go to '...'
2. Click on '....'
3. Scroll down to '....'
4. See error

## 우려 사항

## 스크린샷 또는 소스 코드

```javascript
export default class App extends Component {

  state = { date: new Date() }

  render = () =>
    <DatePicker
      date={this.state.date}
      onDateChange={date => this.setState({ date })}
    />

}
```

## 환경(Desktop)

- OS: [e.g. iOS]
- Browser [e.g. chrome, safari]
- Version [e.g. 22]
 
## 환경(Mobile)

- Device: [e.g. iPhone6]
- OS: [e.g. iOS8.1]
- Browser [e.g. stock browser, safari]
- Version [e.g. 22]
 
## 기타


