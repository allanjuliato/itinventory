import React from 'react'
import IconButton from '../template/iconButton'
import UserAdd from './userAdd'

export default props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(user => (
            <tr key={user._id}>
                <td>{user.nameUser}</td>
                <td>
                    <IconButton style='primary' icon='eye-open' onClick={props.onOpenModalView}></IconButton>
                    <IconButton style='info' icon='link' onClick={() => props.handleLink(user)}></IconButton>
                    <IconButton style='warning' icon='pencil' onClick={() => props.handleAlter(user)}></IconButton>
                </td>
            </tr>
        ))
    }
return (
    <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th className='tableActions'>Ações</th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
    </table>
)
}