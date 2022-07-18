import Api from "@/axios/axios";
import { useStoreDataUsers } from "@/stores/data/dataUsers";
import { computed } from "vue";
const storeDataUsers = useStoreDataUsers();

const dataAsli = computed(() => storeDataUsers.getData);

const getData = async () => {
    try {
        const response = await Api.get(`admin/users`);
        let res = response.data;
        storeDataUsers.setData(res);
        // console.log(res);

        return true;
    } catch (error) {
        console.error(error);
    }
};

const doStoreData = async (data: any[]) => {
    let dataForm = {
        nama: data.nama,
        email: data.email,
        username: data.username,
        password: data.password,
    }
    try {
        const response = await Api.post(`admin/users`, dataForm);
        data.id = response.id;
        dataAsli.value.push(data);

        // getData()
        // console.log(dataAsli.value);

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
        const response = await Api.get(`admin/users/${id}`);
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
        nama: data.nama,
        email: data.email,
        username: data.username,
        password: data.password,
    }
    try {
        if (dataAsli.value.length < 1) {
            await getData();
        }
        const response = await Api.put(`admin/users/${id}`, dataForm);
        // update data
        let dataUpdate = dataAsli.value.filter((item) => item.id == id);
        dataUpdate[0].nama = data.nama;
        dataUpdate[0].email = data.email;
        dataUpdate[0].username = data.username;
        dataUpdate[0].password = data.password;
        storeDataUsers.setData(dataAsli.value);
        return true;
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id: number) => {
    try {
        const response = await Api.delete(`admin/users/${id}`);
        let data = dataAsli.value.filter((item) => item.id !== id);
        storeDataUsers.setData(data);
        return true;
    } catch (error) {
        console.error(error);
    }
};

const ApiKategori = {
    getData,
    deleteData,
    getDataId,
    doUpdate,
    doStoreData
};
export default ApiKategori;