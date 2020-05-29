import React, { Component } from 'react';
import './otp-input.css';

export default class CustomOtpInput extends Component {
  componentDidMount() {
    var obj = document.getElementById('partitioned');
    obj.addEventListener('keydown', stopCarret);
    obj.addEventListener('keyup', stopCarret);

    function stopCarret() {
      if (obj.value.length > 3) {
        setCaretPosition(obj, 4);
      }
    }

    function setCaretPosition(elem, caretPos) {
      if (elem != null) {
        if (elem.createTextRange) {
          var range = elem.createTextRange();
          range.move('character', caretPos);
          range.select();
        }
        else {
          if (elem.selectionStart) {
            elem.focus();
            elem.setSelectionRange(caretPos, caretPos);
          }
          else
            elem.focus();
        }
      }
    }
  }
  render() {
    return (
      <>
        <div id="divOuter" className={this.props.containerStyle}>
          <div id="divInner">
            <div className="otp-dot-cont">
              <span className="otp-dot" /><span className="otp-dot" /><span className="otp-dot" /><span className="otp-dot" />
            </div>
            <input id="partitioned" type="password" maxLength={"4"} onChange={(e) => this.props.onChange(e.target.value)} />
          </div>
        </div>
      </>
    );
  }
}
