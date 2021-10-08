import axios from "axios";
import { ref } from 'vue'
import { useRouter } from 'vue-router';


export default function useCompanies(){

    //properties
    const companies = ref([])


    // functions
    const getCompanies = async () => {
        let response = await axios.get('/api/companies')
        companies.value = response.data.data;
    }

    const destroyCompany = async (id) => {
        await axios.delete(`/api/companies/${id}`)
    }

    return{
        companies,
        getCompanies,
        destroyCompany
    }
}
