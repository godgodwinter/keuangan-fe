import Api from "@/axios/axios";
import { useStoreDataSkills } from "@/stores/data/dataSkills";
import { computed } from "vue";
const storeDataSkills = useStoreDataSkills();

const dataAsli = computed(() => storeDataSkills.getData);

const getData = async () => {
    try {
        const response = await Api.get(`skill`);
        let res = response.data;
        storeDataSkills.setData(res);
        // console.log(res);

        return true;
    } catch (error) {
        console.error(error);
    }
};

const doStoreData = async (data: any[]) => {
    let dataForm = {
        name: data.name,
        score: data.score,
        parrent_id: 1
    }
    try {
        const response = await Api.post(`skill`, dataForm);
        data.id = response.data;
        dataAsli.value.push(data);

        // getData()
        // console.log(data);

        return true;
    } catch (error) {
        console.error(error);
    }
}


const getDataId = async (id: number): Promise<any> => {
    try {
        if (dataAsli.value.length < 1) {
            await getData();
        }
        const response = await Api.get(`skill/${id}`);
        let res = response.data;
        // let res = dataAsli.value.filter((item) => item.id == id);
        // console.log(res.id, dataAsli.value, id);
        return res;
    } catch (error) {
        console.error(error);
    }
}

const doUpdate = async (id: number, data: any[]): Promise<boolean> => {
    let dataForm = {
        name: data.name,
        score: data.score,
        parrent_id: 1
    }
    try {
        if (dataAsli.value.length < 1) {
            await getData();
        }
        const response = await Api.put(`skill/${id}`, dataForm);
        // update data
        let dataUpdate = dataAsli.value.filter((item) => item.id == id);
        dataUpdate[0].name = data.name;
        dataUpdate[0].score = data.score;
        storeDataSkills.setData(dataAsli.value);
        return true;
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id: number) => {
    try {
        const response = await Api.delete(`skill/${id}`);
        let data = dataAsli.value.filter((item) => item.id !== id);
        storeDataSkills.setData(data);
        return true;
    } catch (error) {
        console.error(error);
    }
};

const ApiSkills = {
    getData,
    deleteData,
    getDataId,
    doUpdate,
    doStoreData
};
export default ApiSkills;