import axios from 'axios'
const SERVER_URL = 'https://agile-spire-19725.herokuapp.com/api/'

const itemService = {

  index: async (PageSize: any, currentPage: any) => {
    return await axios.get(SERVER_URL + 'items?size=' + PageSize + '&page=' + currentPage,
      {
        headers: {
        }
      })
  },
  createItem: async (data: any) => {
    return await axios.post(SERVER_URL + 'items', data)
  },
  deleteItem: async (data: any) => {
    return await axios.post(SERVER_URL + 'items/delete', data)
  }

}
export default itemService
