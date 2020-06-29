import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '4f14103a-79ff-4533-920c-cb87d80768f3'
    }
})


export const usersAPI = {

    getUsers(currentPage = 1,pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then( response => response.data)
    },

    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then (response => response.data)
    },

    unfollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then (response => response.data)
    },

    getProfile(userId) {
        console.warn('Use obsolete method, please use new profileAPI method!!!')
        return profileAPI.getProfile(userId)
    },

}


export const profileAPI = {

    getProfile(userId) {
        return instance.get(`profile/${userId}`);
    },

    getProfileStatus(userId) {
        return instance.get(`profile/status/${userId}`)
    },

    updateProfileStatus(status) {
        return instance.put('profile/status',{
            status: status
        })
    }
}


export const authAPI = {

    me() {
        return instance.get('auth/me')
    }

}