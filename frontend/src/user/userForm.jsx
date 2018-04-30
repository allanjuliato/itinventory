import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton';
import UserAdd from './userAdd'

export default props => {
    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            props.handleSearch()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return(
    <div role='form' className='userForm'>
        <Grid cols='12 9 10'>
            <button className="btn btn-primary" onClick={props.onOpenModal} id='btnAdd'>Add User</button>   
        </Grid>
        <Grid cols='12 9 10'>
            <input 
                id='nameUser' 
                className='form-control' 
                placeholder='Search User'
                onChange={props.handleChange}
                onKeyUp={keyHandler}
                value={props.nameUser}>
            </input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='info' icon='search' onClick={props.handleSearch}></IconButton>
            <IconButton style='default' icon='remove' onClick={props.handleClear}></IconButton>         
        </Grid>
    </div>
    )
}
