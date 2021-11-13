import axiosClient from './axiosClient'

const electionApi = {
    getAll(params) {
        const url = '/public/races2/2020/G?filter.officecode=P'
        return axiosClient.get(url, params);
    },

    get(id) {
        const url = `/public/races2/2020/G?filter.officecode=P/${id}`
        return axiosClient.get(url)
    },

    // add(data) {
    //     const url = '/public/races2/2020/G?filter.officecode=P'
    //     return axiosClient.post(url, data)
    // },

    // update(data) {
    //     const url = `/public/races2/2020/G?filter.officecode=P/${data.id}`
    //     return axiosClient.patch(url, data)
    // },

    // remove(id) {
    //     const url = `/public/races2/2020/G?filter.officecode=P/${id}`
    //     return axiosClient.delete(url)
    // }
}

export default electionApi;
