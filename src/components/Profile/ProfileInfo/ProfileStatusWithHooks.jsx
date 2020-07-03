import React, {useEffect, useState} from 'react'
import styles from './ProfileStatus.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };

    const deactivateStatusEditMode = (evt) => {
        if (evt.key === 'Enter') {
            setEditMode(false);
            props.updateProfileStatus(status)
        }
    }

    const onStatusChange = (evt) => {
        setStatus(evt.currentTarget.value)
    }

        return (
            <>
            {!editMode &&
            <div>
                <span
                    onClick={activateEditMode}
                      className={styles.status}>{props.status || 'type your status'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input autoFocus={true}
                       onKeyPress={deactivateStatusEditMode}
                       value={status}
                       onChange={onStatusChange}
                />
            </div>
            }
            </>
        )


}

export default ProfileStatusWithHooks