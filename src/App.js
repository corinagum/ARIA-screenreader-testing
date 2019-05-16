import React from 'react';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      numbers: [1],
      time: 0
    };
  }

  componentDidMount() {
    const now = Date.now();
    this.interval = setInterval(() => this.setState({ time: Date.now() - now }), 6007);
    this.nextNum = setInterval(() => this.setState({ numbers: [...this.state.numbers, Math.floor(Math.random() * Math.floor(100))]}), 14007);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    clearInterval(this.nextNum);
  }
  render() {
    return (
      <main>
        <ul
          aria-atomic="false"
          aria-live="polite"
          aria-relevant="additions text"
        >
          { this.state.numbers.map( listValue => {
            return <li>{ listValue }</li>
          })
          }
          <li
            // aria-atomic="true"
            // aria-live="polite"
            // aria-relevant="text"
          >{ this.state.time }</li>
        </ul>
      </main>
    );
  }
}
