import React, { Component } from 'react'

export default class ListShoes extends Component {
  render() {
    let {DataShoes, ClickToAdd} = this.props
    return (
      <div className='col-6 row'> 
        {DataShoes.map((item, index) => {
       return <div  className='card col-6'>
                <h3 className='text-center'>{item.name}</h3>
                <img
                className='text-center'
                    width={300}
                    src={item.image}
                    alt=""
                />
                <h3 className='text-center'>{item.price}</h3>     
                <button onClick={() => ClickToAdd(item)} className='btn btn-primary  text-center'>Buy</button>  
            </div>                            
            
        })}
      </div>
    )
  }
}
