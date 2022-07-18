import Api from "@/axios/axios";
import { useStoreDataProfile } from "@/stores/data/dataProfile";
import { computed } from "vue";
import { useStoreAdminAuth } from "@/stores/adminAuth";
const storeAdminAuth = useStoreAdminAuth();

const me = computed(() => storeAdminAuth.me);
const storeDataProfile = useStoreDataProfile();

const dataAsli = computed(() => storeDataProfile.getData);

const getData = async () => {
    try {
        const response = await Api.post(`admin/auth/profile`);
        let res = response.data.me;
        storeDataProfile.setData(res);
        // console.log(res);

        return res;
    } catch (error) {
        console.error(error);
    }
};

const doUpdate = async (data): Promise<boolean> => {
    let dataForm = {
        // id: 1,
        nama: data.nama,
        username: data.username,
        email: data.email,
        password: data.password,

    }
    try {

        const response = await Api.put(`admin/auth/profile`, dataForm);

        const dataMe = {
            nama: data.nama,
            username: data.username,
            email: data.email,
        };

        storeAdminAuth.setMe(dataMe);
        // console.log(me.value);

        // console.log(dataForm, data.name);
        // console.log(response);

        // storeDataProfile.setData(dataForm);
        return true;
    } catch (error) {
        console.error(error);
    }
}

const ApiProfile = {
    getData,
    doUpdate
};
export default ApiProfile;