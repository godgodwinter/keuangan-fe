import Api from "@/axios/axios";
import { useStoreDataKategori } from "@/stores/data/dataKategori";
import { computed } from "vue";
const storeDataKategori = useStoreDataKategori();

const dataAsli = computed(() => storeDataKategori.getData);

const getData = async () => {
    try {
        const response = await Api.get(`admin/kategori`);
        let res = response.data;
        storeDataKategori.setData(res);
        // console.log(res);

        return true;
    } catch (error) {
        console.error(error);
    }
};

const doStoreData = async (data: any[]) => {
    let dataForm = {
        nama: data.nama,
        jenis: data.jenis
    }
    try {
        const response = await Api.post(`admin/kategori`, dataForm);
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
        const response = await Api.get(`admin/kategori/${id}`);
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
        jenis: data.jenis
    }
    try {
        if (dataAsli.value.length < 1) {
            await getData();
        }
        const response = await Api.put(`admin/kategori/${id}`, dataForm);
        // update data
        let dataUpdate = dataAsli.value.filter((item) => item.id == id);
        dataUpdate[0].nama = data.nama;
        dataUpdate[0].jenis = data.jenis;
        storeDataKategori.setData(dataAsli.value);
        return true;
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id: number) => {
    try {
        const response = await Api.delete(`admin/kategori/${id}`);
        let data = dataAsli.value.filter((item) => item.id !== id);
        storeDataKategori.setData(data);
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