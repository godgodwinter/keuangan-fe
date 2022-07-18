import Api from "@/axios/axios";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { computed } from "vue";
const storeDataTransaksi = useStoreDataTransaksi();

const dataAsli = computed(() => storeDataTransaksi.getData);

const getData = async () => {
    try {
        const response = await Api.get(`admin/transaksi`);
        let res = response.data;
        let resRekap = response.dataRekap;
        storeDataTransaksi.setData(res);
        storeDataTransaksi.setDataRekap(resRekap);
        // console.log(res);

        return true;
    } catch (error) {
        console.error(error);
    }
};

const doStoreData = async (data: any[]) => {
    let dataForm = {
        tgl: data.tgl,
        nama: data.nama,
        nominal: data.nominal,
        kategori_id: data.kategori_id,
        jenis: data.jenis,
    }
    try {
        const response = await Api.post(`admin/transaksi`, dataForm);
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
        const response = await Api.get(`admin/transaksi/${id}`);
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
        tgl: data.tgl,
        nama: data.nama,
        nominal: data.nominal,
        kategori_id: data.kategori_id,
        jenis: data.jenis,
    }
    try {
        if (dataAsli.value.length < 1) {
            await getData();
        }
        const response = await Api.put(`admin/transaksi/${id}`, dataForm);
        // update data
        let dataUpdate = dataAsli.value.filter((item) => item.id == id);
        dataUpdate[0].tgl = data.tgl;
        dataUpdate[0].nama = data.nama;
        dataUpdate[0].nominal = data.nominal;
        dataUpdate[0].kategori_id = data.kategori_id;
        dataUpdate[0].jenis = data.jenis;
        storeDataTransaksi.setData(dataAsli.value);
        return true;
    } catch (error) {
        console.error(error);
    }
}

const deleteData = async (id: number) => {
    try {
        const response = await Api.delete(`admin/transaksi/${id}`);
        let data = dataAsli.value.filter((item) => item.id !== id);
        storeDataTransaksi.setData(data);
        return true;
    } catch (error) {
        console.error(error);
    }
};

const ApiTransaksi = {
    getData,
    deleteData,
    getDataId,
    doUpdate,
    doStoreData
};
export default ApiTransaksi;