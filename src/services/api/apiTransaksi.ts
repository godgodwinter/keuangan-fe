import Api from "@/axios/axios";
import Fungsi from "@/components/lib/FungsiCampur";
import { useStoreDataTransaksi } from "@/stores/data/dataTransaksi";
import { ref, computed } from "vue";
import Toast from "@/components/lib/Toast"
import moment from "moment/min/moment-with-locales";
import localization from "moment/locale/id";
moment.updateLocale("id", localization);
const storeDataTransaksi = useStoreDataTransaksi();

const dataAsli = computed(() => storeDataTransaksi.getData);
const dataAsliDaily = computed(() => storeDataTransaksi.getDataShowDaily);
const dataAsliDailyPerTahun = computed(() => storeDataTransaksi.getDataShowDailyPerTahun);
const dataRekap = computed(() => storeDataTransaksi.getDataRekap);
const dataBlnThn = computed(() => storeDataTransaksi.getDataBlnThn);
// const dataShow = computed(() => storeDataTransaksi.getDataShow);
// const dataShowMonthly = computed(() => storeDataTransaksi.getDataShowMonthly);
// const dataRekap = computed(() => storeDataTransaksi.getDataRekap);

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
            bln: moment(item).format("MM"),
            thn: moment(item).format("YYYY"),
            blnthn: moment(item).format("MMMM YYYY"),
            week: moment(item).format("dddd"),
            data: dataAsli.value.filter((item2) => item2.tgl === item),
            count: dataAsli.value.filter((item2) => item2.tgl === item).length,
            sumPemasukan,
            sumPengeluaran,
            saldoPerTgl,
        });
    });
    // sort desc tgl
    data.value.sort((a, b) => {
        return moment(b.date).unix() - moment(a.date).unix();
    });
    // console.log(data.value);
    storeDataTransaksi.setDataShow(data.value);
};

const dataDaily = ref([]);
const fnGetDataDaily = (bln = moment().format("MM"), year = moment().format("YYYY")) => {
    let result = [];
    // console.log(bln, year);
    data.value.forEach((item) => {
        if (item.bln === bln && item.thn === year) {
            result.push(item);
        }
    });

    return result;
}
const fnGetDataDailyPerTahun = (year = moment().format("YYYY")) => {
    let result = [];
    // console.log(bln, year);
    dataAsli.value.forEach((item) => {
        //  jika tgl sama dengan year maka push
        if (item.tgl.includes(year)) {
            result.push(item);
        }

        // if (item.thn === year) {
        //     result.push(item);
        // }
    });

    return result;
}

const fnGetDataRekapYearly = (year = moment().format("YYYY")) => {
    let result = {
        pemasukan: 0,
        pengeluaran: 0,
        saldo: 0,
    };

    data.value.forEach((item) => {
        // if (item.tgl.includes(item2.number)) {
        if ((item.thn).includes((year))) {
            result.pemasukan += item.sumPemasukan;
            result.pengeluaran += item.sumPengeluaran;
            result.saldo = result.pemasukan - result.pengeluaran;
        }
    });
    return result;
}


const dataMonthly = ref([]);
const fnGetDataMonthly = (year = moment().format("YYYY")) => {
    let result = [];
    Fungsi.getMonthNamesObj().forEach((item, index) => {
        result.push({
            index,
            nama: item.name,
            number: item.number,
            string: item.string,
            pemasukan: 0,
            pengeluaran: 0,
            saldoMonthly: 0,
        });
    });

    // data.value.filter tgl berdasarkan bulan
    data.value.forEach((item) => {
        result.forEach((item2) => {
            // console.log(item.bln + item.thn, item2.string + year, (item.bln + item.thn).includes((item2.string + year)));

            // if (item.tgl.includes(item2.number)) {
            if ((item.bln + item.thn).includes((item2.string + year))) {
                item2.pemasukan += item.sumPemasukan;
                item2.pengeluaran += item.sumPengeluaran;
                item2.saldoMonthly = item2.pemasukan - item2.pengeluaran;
            }
        });
    });
    return result;
}
const dataShowYearly = ref([]);
const fnGetDataShowYearly = () => {
    let result = [];
    Fungsi.getLastYear().forEach((item, index) => {
        result.push({
            index,
            nama: item,
            pemasukan: 0,
            pengeluaran: 0,
            saldoYeardataShowYearly: 0,
        });
    });

    // data.value.filter tgl berdasarkan bulan
    data.value.forEach((item) => {
        result.forEach((item2) => {
            // console.log(item.bln, item2.string, item.bln.includes(item2.string));

            // if (item.tgl.includes(item2.number)) {
            if (item.thn.includes(item2.nama)) {
                item2.pemasukan += item.sumPemasukan;
                item2.pengeluaran += item.sumPengeluaran;
                item2.saldo = item2.pemasukan - item2.pengeluaran;
            }
        });
    });
    return result;
}

const fnGetDataChart = async (bln = moment().format("MM"), year = moment().format("YYYY")) => {
    let jml = dataRekap.value.pengeluaran + dataRekap.value.pemasukan;
    let persentase = {
        // dua angka dibelakan koma
        pemasukan: (dataRekap.value.pemasukan / jml * 100).toFixed(2),
        pengeluaran: (dataRekap.value.pengeluaran / jml * 100).toFixed(2)
    }

    let ringkasan = [
        {
            id: 1,
            nama: "Pengeluaran",
            nominal: dataRekap.value.pengeluaran,
            persentase: persentase.pengeluaran,
            color: 'c5c5c5',
            bgcolor: `bg-[${'c5c5c5'}]`,
        },
        {
            id: 2,
            nama: "Pemasukan",
            nominal: dataRekap.value.pemasukan,
            persentase: persentase.pemasukan,
            color: 'c5c5c5',
            bgcolor: `bg-[${'c5c5c5'}]`,
        }
    ];

    // console.log(dataAsliDailyPerTahun.value);
    let pengeluaran = [];
    let pemasukan = [];
    // filter uniq kategori_nama dan kategori_id
    let kategori_nama = dataAsliDailyPerTahun.value.filter((item, index) => {
        return dataAsliDailyPerTahun.value.findIndex((item2) => {
            return item.kategori_nama === item2.kategori_nama && item.kategori_id === item2.kategori_id && item.jenis === "Pengeluaran";;
        }
        ) === index;
    });
    let kategori_namaPemasukan = dataAsliDailyPerTahun.value.filter((item, index) => {
        return dataAsliDailyPerTahun.value.findIndex((item2) => {
            return item.kategori_nama === item2.kategori_nama && item.kategori_id === item2.kategori_id && item.jenis === "Pemasukan";;
        }
        ) === index;
    });

    let sumNominalPengeluaran = dataRekap.value.pengeluaran;
    let sumNominalPemasukan = dataRekap.value.pemasukan;

    kategori_nama.forEach((item) => {
        let obj = {
            id: item.kategori_id,
            nama: item.kategori_nama,
            nominal: dataAsliDailyPerTahun.value.filter((item2) => item2.kategori_nama === item.kategori_nama).reduce((acc, item3) => acc + parseInt(item3.nominal), 0),
            //     //                
            persentase: (item.nominal / sumNominalPengeluaran * 100).toFixed(2),
            color: 'c5c5c5',
            bgcolor: `bg-[${'c5c5c5'}]`,
        }
        // console.log(obj.nominal);
        pengeluaran.push(obj);
    });
    kategori_namaPemasukan.forEach((item) => {
        let objPemasukan = {
            id: item.kategori_id,
            nama: item.kategori_nama,
            nominal: dataAsliDailyPerTahun.value.filter((item2) => item2.kategori_nama === item.kategori_nama).reduce((acc, item3) => acc + parseInt(item3.nominal), 0),
            //     //                
            persentase: (item.nominal / sumNominalPemasukan * 100).toFixed(2),
            color: 'c5c5c5',
            bgcolor: `bg-[${'c5c5c5'}]`,
        }
        // console.log(objPemasukan.nominal);
        pemasukan.push(objPemasukan);
    });


    let result = {
        ringkasan,
        pengeluaran: pengeluaran,
        pemasukan: pemasukan,
    };

    storeDataTransaksi.setDataChart(result);
    return result;
}

const getData = async () => {
    try {
        const response = await Api.get(`admin/transaksi`);
        const res = response.data;
        const resRekap = response.dataRekap;
        storeDataTransaksi.setData(res);
        storeDataTransaksi.setDataRekapAll(resRekap);
        // console.log(res);
        await fnSetData();
        // console.log(dataBlnThn.value);

        const resultMonthly = fnGetDataMonthly(dataBlnThn.value.thn); //YYYY
        storeDataTransaksi.setDataShowMonthly(resultMonthly);
        const resultYearly = fnGetDataShowYearly();
        storeDataTransaksi.setDataShowYearly(resultYearly);
        const resultDailyPerTahun = fnGetDataDailyPerTahun(dataBlnThn.value.thn);// YYYY
        storeDataTransaksi.setDataShowDailyPerTahun(resultDailyPerTahun);
        const resultDaily = fnGetDataDaily(dataBlnThn.value.bln, dataBlnThn.value.thn);//MM YYYY
        storeDataTransaksi.setDataShowDaily(resultDaily);
        const resultRekapYearly = fnGetDataRekapYearly(dataBlnThn.value.thn);
        storeDataTransaksi.setDataRekap(resultRekapYearly);
        fnGetDataChart();
        // const resultChart = await fnGetDataChart(dataBlnThn.value.bln, dataBlnThn.value.thn);
        // storeDataTransaksi.setDataChart(resultChart);

        // console.log(resultChart);


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
    doStoreData,
    fnGetDataChart
};
export default ApiTransaksi;