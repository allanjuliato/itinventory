import React, { Component } from 'react'
import axios from 'axios'
import Modal from 'react-responsive-modal'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import PageHeader from '../template/pageHeader'
import UserForm from './userForm'
import UserList from './userList'
import UserAdd from './userAdd'
import UserView from './userView'


const URL = 'http://localhost:3003/api/user'



export default class User extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            nameUser: '',
            account:'',
            deviceName:'',
            project:'',
            location:'',
            hiringDate:'',
            list: [], 
            listView: [],
            openAdd: false, 
            openView: false
        }

        this.handleChange=this.handleChange.bind(this)

        //Start User
        this.handleChangeName = this.handleChangeName.bind(this)
        this.handleChangeAccount = this.handleChangeAccount.bind(this)
        this.handleChangeDevice = this.handleChangeDevice.bind(this)
        this.handleChangeProject = this.handleChangeProject.bind(this)
        this.handleChangeLocation = this.handleChangeLocation.bind(this)
        this.handleChangeHiringDate = this.handleChangeHiringDate.bind(this)
        //End User

        // Start Actions
        this.handleAdd = this.handleAdd.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.handleClear = this.handleClear.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleView = this.handleView.bind(this)
        //End Actions

        //Start Modal
        this.onOpenModal = this.onOpenModal.bind(this)
        this.onCloseModal = this.onCloseModal.bind(this)

        this.onOpenModalView = this.onOpenModalView.bind(this)
        this.onCloseModalView = this.onCloseModalView.bind(this)
        //End Modal

        this.refresh()
    }

    handleSearch() {
        this.refresh(this.state.nameUser)
    }

    handleClear() {
        this.refresh()
    }

    refresh(nameUser = '') {
        const search = nameUser ? `&nameUser__regex=/${nameUser}/` : ''
        axios.get(`${URL}?sort=-createdAt${search}`).then(resp => this.setState({...this.state, nameUser, list:resp.data}))
    }
    
    handleChange(e) {
        this.setState({...this.state, nameUser: e.target.value })
    }

    handleChangeName(name) {
        this.setState({...this.state, nameUser: name.target.value })
    }

    handleChangeAccount(account) {
        this.setState({...this.state, account: account.target.value })
    }

    handleChangeDevice(device) {
        this.setState({...this.state, deviceName: device.target.value })
    }

    handleChangeProject(project) {
        this.setState({...this.state, project: project.target.value })
    }

    handleChangeLocation(location) {
        this.setState({...this.state, location: location.target.value })
    }

    handleChangeHiringDate(hiringDate) {
        this.setState({...this.state, hiringDate: hiringDate.target.value })
    }

    handleAdd(){
        const nameUser = this.state.nameUser
        const account = this.state.account
        const deviceName = this.state.deviceName
        const project = this.state.project
        const location = this.state.location
        const hiringDate = this.state.hiringDate

        axios.post(URL, {nameUser, account, deviceName, project, location, hiringDate}).then(resp => this.onCloseModal())
        
        toast.success("User Added Successfully!", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000
        })
    }

    handleRemove(user) {
        axios.get(`${URL}/${user._id}`).then(resp => this.refresh())
    }

    handleView(user) {
        axios.get(`${URL}?_id=${user._id}`).then(resp => this.setState({...this.state, listView:resp.data}))
         this.onOpenModalView()
    }

    onOpenModal () {
        this.setState({...this.state, openAdd: true})
    }

    onCloseModal () {
        this.setState({...this.state, openAdd: false})
        this.refresh()
    }

    onOpenModalView () {
        this.setState({...this.state, openView: true})
    }

    onCloseModalView () {
        this.setState({...this.state, openView: false})
        this.refresh()
    }

      
 
    render() {
        return(
           
            <div>
                <ToastContainer />
                <Modal open={this.state.openAdd} onClose={this.onCloseModal} little>
                    <UserAdd 
                        nameUser={this.state.nameUser}
                        account={this.state.account}
                        deviceName={this.state.deviceName}
                        project={this.state.project}
                        location={this.state.location}
                        hiringDate={this.state.hiringDate}

                        handleChangeName={this.handleChangeName}
                        handleChangeAccount={this.handleChangeAccount}
                        handleChangeDevice={this.handleChangeDevice}
                        handleChangeProject={this.handleChangeProject}
                        handleChangeLocation={this.handleChangeLocation}
                        handleChangeHiringDate={this.handleChangeHiringDate}

                        handleChange={this.handleChange}
                        handleAdd={this.handleAdd}
                        onCloseModal={this.onCloseModal}
                    />
                </Modal>

                <Modal open={this.state.openView} onClose={this.onCloseModalView} little>
                    <UserView

                        nameUser={this.state.nameUser}
                        account={this.state.account}
                        deviceName={this.state.deviceName}
                        project={this.state.project}
                        location={this.state.location}
                        hiringDate={this.state.hiringDate}

                        handleChangeName={this.handleChangeName}
                        handleChangeAccount={this.handleChangeAccount}
                        handleChangeDevice={this.handleChangeDevice}
                        handleChangeProject={this.handleChangeProject}
                        handleChangeLocation={this.handleChangeLocation}
                        handleChangeHiringDate={this.handleChangeHiringDate}
                        onCloseModalView = {this.onCloseModalView}
                        listView={this.state.listView}
                    />
                </Modal>

                <PageHeader name='User' id='user'></PageHeader>
                <UserForm 
                    nameUser={this.state.nameUser}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear}

                    onOpenModal={this.onOpenModal}
                    onCloseModal={this.onCloseModal}
                />
                <PageHeader name='User List'></PageHeader>
                <UserList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleView={this.handleView}
                    onOpenModalView={this.onOpenModalView}
                    onCloseModalView={this.onCloseModalView}
                />
            </div>
        )
    }
}