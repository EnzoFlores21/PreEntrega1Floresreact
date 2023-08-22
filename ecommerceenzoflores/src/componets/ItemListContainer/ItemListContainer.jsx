import React from 'react'

const ItemListContainer = (greeting) => {
    return (
        <div className='d-flex justify-content-center'>
            {greeting.saludos}
        </div>
    )
}

export default ItemListContainer