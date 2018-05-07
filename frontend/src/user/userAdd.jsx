import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton';

export default props => {
    return (
        <div className='container' id='modalDiv'>

            <h1>Add User</h1>
           
            <div className='modal-form'>
                <label>Name</label>
                <input 
                    id='nameUser' 
                    className='form-control' 
                    onChange={props.handleChangeName}
                    value={props.nameUser}>
                </input>

                <label>Account</label>
                <input 
                    id='accountUser' 
                    className='form-control'
                    onChange={props.handleChangeAccount}
                    value={props.account}>
                </input>
                <label>Device Name</label>
                <input 
                    id='deviceName' 
                    className='form-control'
                    onChange={props.handleChangeDevice}
                    value={props.deviceName}>
                    
                </input>
                <label>Project</label>
                <input 
                    id='project' 
                    className='form-control'
                    onChange={props.handleChangeProject}
                    value={props.project}>
                </input>
                <label>Location</label>
                <input 
                    id='location' 
                    className='form-control'
                    onChange={props.handleChangeLocation}
                    value={props.location}>
                </input>
                <label>Hiring Date</label>
                <input 
                    id='hiringDate' 
                    className='form-control'
                    onChange={props.handleChangeHiringDate}
                    value={props.hiringDate}
                    type='date'>
                </input>
            </div>

            <div className='modal-actions'>
                <button onClick={props.handleAdd} className="btn btn-success" id='btnSave'>Save</button>
                <button onClick={props.onCloseModal} className="btn btn-danger" id='btnExit'>Exit</button>
            </div>
            
        </div>
    )
}