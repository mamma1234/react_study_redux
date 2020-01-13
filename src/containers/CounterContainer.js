import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'; // **** (1) 불러오기
import Counter from '../components/Counter';
import { increment, decrement } from '../store/modules/counter';

class CounterContainer extends Component {
  handleIncrement = () => {
    this.props.increment();
  };
  handleDecrement = () => {
    this.props.decrement();
  };
  render() {
    const { color, number } = this.props;
    return (
      <Counter
        color={color}
        value={number}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
      />
    );
  }
}

const mapStateToProps = ({ counter }) => ({
  color: counter.color,
  number: counter.number,
});

// // immutable start
// const mapStateToProps = ({ counter }) => ({
//     // **** .get 을 사용해서 값 조회
//     color: counter.get('color'),
//     number: counter.get('number'),
// });
// // immutable end

// const mapDispatchToProps = dispatch =>
//   bindActionCreators({ increment, decrement }, dispatch); // **** (2) bindActionCreators 사용.

  // **** 함수가 아닌 객체 설정시 자동 bindActionCreators 됨
const mapDispatchToProps = { increment, decrement };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CounterContainer);