import Api from "@/axios/axios";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { ref, computed } from "vue";
import Toast from "@/components/lib/Toast"
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);
const storeDataTransaksi = useStoreDataTransaksi();

const dataAsli = computed(() => storeDataTransaksi.getData);
const dataShow = computed(() => storeDataTransaksi.getDataShow);
const dataRekap = computed(() => storeDataTransaksi.getDataRekap);

const dataAsliTgl = ref([]);
const data = ref([]);

const fnSetData = () => {
    dataAsliTgl.value = [...new Set(dataAsli.value.map((item) => item.tgl))];
    // console.log(dataAsli.value);
    data.value = [];
    dataAsliTgl.value.forEach((item) => {
        let sumPemasukan = 0;
        dataAsli.value.forEach((item2) => {
            if (item2.tgl === item && item2.jenis === "Pemasukan") {
                sumPemasukan += parseInt(item2.nominal);
            }
        });
        let sumPengeluaran = 0;
        dataAsli.value.forEach((item2) => {
            if (item2.tgl === item && item2.jenis === "Pengeluaran") {
                sumPengeluaran += parseInt(item2.nominal);
            }
        });
        let saldoPerTgl = 0;
        saldoPerTgl = sumPemasukan - sumPengeluaran;
        // saldo = parseInt(sumPemasukan) - parseInt(sumPengeluaran);
        data.value.push({
            date: item,
            tgl: moment(item).format("DD"),
            blnthn: moment(item).format("MMMM YYYY"),
            week: moment(item).format("dddd"),
            data: dataAsli.value.filter((item2) => item2.tgl === item),
            count: dataAsli.value.filter((item2) => item2.tgl === item).length,
            sumPemasukan,
            sumPengeluaran,
            saldoPerTgl,
        });
    });
    console.log(data.value);
    storeDataTransaksi.setDataShow(data.value);
};

const getData = async () => {
    try {
        const response = await Api.get(`admin/transaksi`);
        let res = response.data;
        let resRekap = response.dataRekap;
        storeDataTransaksi.setData(res);
        storeDataTransaksi.setDataRekap(resRekap);
        // console.log(res);
        fnSetData();

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
        kategori_nama: data.kategori_nama,
        jenis: data.jenis,
    }
    try {
        const response = await Api.post(`admin/transaksi`, dataForm);
        data.id = response.id;
        dataAsli.value.push(data);
        getData();
        // if (data.jenis == "Pemasukan") {
        //     dataRekap.value.pemasukan += data.nominal;
        // } else {
        //     dataRekap.value.pengeluaran += data.nominal;
        // }
        // dataRekap.value.saldo = dataRekap.value.pemasukan - dataRekap.value.pengeluaran;
        // // storeDataTransaksi.setData(dataAsli.value);
        // storeDataTransaksi.setDataRekap(dataRekap.value);

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
        // let dataUpdate = dataAsli.value.filter((item) => item.id == id);
        // dataUpdate[0].tgl = data.tgl;
        // dataUpdate[0].nama = data.nama;
        // dataUpdate[0].nominal = data.nominal;
        // dataUpdate[0].kategori_id = data.kategori_id;
        // dataUpdate[0].jenis = data.jenis;
        // storeDataTransaksi.setData(dataAsli.value);

        getData();
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

        getData();
        // getData();
        // if (jenis == "Pemasukan") {
        //     dataRekap.value.pemasukan -= nominal;
        // } else {
        //     dataRekap.value.pengeluaran -= nominal;
        // }
        // dataRekap.value.saldo = dataRekap.value.pemasukan - dataRekap.value.pengeluaran;
        // // storeDataTransaksi.setData(dataAsli.value);
        // storeDataTransaksi.setDataRekap(dataRekap.value);
        return true;
    } catch (error) {
        // Toast.danger("Error", "Gagal menghapus data");
        console.error(error);
        return false;
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