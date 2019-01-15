import axios from "axios"

export function getFinanceNav() {
    const url = "http://localhost:3003/list";
    return axios.get(url)
}

export function getFinanceListById(id) {
    const url = "http://localhost:3000/getFinanceList";
    const params = { financeId: id }
    return axios.post(url, params)
}