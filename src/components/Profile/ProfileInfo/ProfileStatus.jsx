import React from 'react'
import styles from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateStatusEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateStatusEditMode = (evt) => {
        if (evt.key === 'Enter') {
            this.setState({
                editMode: false
            });
            this.props.updateProfileStatus(this.state.status)
        }
    }

    onStatusChange = (evt) => {
        this.setState ({
            status: evt.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }


    render() {
        return (
            <>
            {!this.state.editMode &&
            <div>
                <span onClick={this.activateStatusEditMode}
                      className={styles.status}>{this.props.status || 'type your status'}</span>
            </div>
            }

            {this.state.editMode &&
            <div>
                <input autoFocus={true} onKeyPress={this.deactivateStatusEditMode} value={this.state.status} onChange={this.onStatusChange}/>
            </div>
            }
            </>
        )
    }

}

export default ProfileStatus