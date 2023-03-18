import React from 'react';
import './App.css';
//Include Sweetalert
import Swal from 'sweetalert2'
class WrongAlert extends React.Component {

 
  //Button Click Function
  opensweetalertdanger()
  {
    Swal.fire({
        icon: 'error',
  title: 'Oops...',
  text: 'Something went wrong!, please fill all the required fields',

    })
  }
  render() {
   
    return (
<div className="maincontainer">
   {this.opensweetalertdanger}
</div>
)
};
}
export default WrongAlert;