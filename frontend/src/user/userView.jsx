import React from 'react'
import IconButton from '../template/iconButton'
import UserAdd from './userAdd'

export default props => {

    const renderRows = () => {
        const listView = props.listView || []
        return listView.map(user => (
            <div className='container' id='modalDiv' key={user._id}>
                <h1>View User</h1>
                <div className='modal-form'>
                    <label>Name</label>
                    <input 
                        id='nameUser' 
                        className='form-control' 
                        onChange={props.handleChangeName}
                        value={user.nameUser}>
                    </input>
                    <label>Account</label>
                    <input 
                        id='accountUser' 
                        className='form-control'
                        onChange={props.handleChangeAccount}
                        value={user.account}>
                    </input>
                    <label>Device Name</label>
                    <input 
                        id='deviceName' 
                        className='form-control'
                        onChange={props.handleChangeDevice}
                        value={user.deviceName}>
                    </input>
                    <label>Project</label>
                    <input 
                        id='project' 
                        className='form-control'
                        onChange={props.handleChangeProject}
                        value={user.project}>
                    </input>
                    <label>Location</label>
                    <input 
                        id='location' 
                        className='form-control'
                        onChange={props.handleChangeLocation}
                        value={user.location}>
                    </input>
                    <label>Hiring Date</label>
                    <input 
                        id='hiringDate' 
                        className='form-control'
                        onChange={props.handleChangeHiringDate}
                        value={user.hiringDate}
                        >
                    </input>
                </div>
                <div className='modal-actions'>
                    <button onClick={props.onCloseModalView} className="btn btn-danger" id='btnExit'>Exit</button>
                </div>
            </div>
            
        ))
    }
return (
    <form>
        {renderRows()}
    </form>
)
}


