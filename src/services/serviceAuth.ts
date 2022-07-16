// import { useStoreAdminAuth } from "@/stores/adminAuth";
import Api from "@/axios/axios";
import Toast from "@/components/lib/Toast";
// const storeAdminAuth = useStoreAdminAuth();

// const dataAsli = computed(() => storeAdminAuth.getData);

const doLogin = async (
    email: string,
    password: string
): Promise<boolean | undefined> => {
    try {
        const response = await Api.post(`auth/login`, {
            username: email,
            password,
        });
        const token = response.data.token;
        if (token) {
            localStorage.setItem("token", token);
            localStorage.setItem("isLogin", true);
            // storeAdminAuth.setToken(token);
            // storeAdminAuth.setIsLogin(true);
            // console.log("login berhasil");
            // console.log(response.message);
            Toast.success("Info", "Login berhasil!");
        } else {
            // console.log("login gagal");
            // console.log(response.message);
            Toast.danger("Error", "Login gagal!");
        }

        return true;
    } catch (error) {
        console.error(error);
    }
};

const doCheckToken = async (token: string): Promise<boolean | undefined> => {
    try {
        const response = await Api.post(`auth/profile`, {
            token: token,
        });
        // console.log(response.hasOwnProperty("data"));
        if (response.hasOwnProperty("data")) {
            const newToken = response.data.newToken;
            localStorage.setItem("token", newToken);
            storeAdminAuth.setToken(newToken);

            const dataMe = {
                id: response.data.me.id,
                name: response.data.me.name,
            };
            storeAdminAuth.setMe(dataMe);
            // console.log(dataMe);

            return true;
        } else {
            return false;
        }
    } catch (error) {
        Toast.danger("Error", `Gagal menghubungkan ke Server!`);
        console.error(error);
    }
};

const doLogout = async (alert = true): Promise<boolean | undefined> => {
    try {
        localStorage.removeItem("token");
        localStorage.removeItem("isLogin");
        storeAdminAuth.setToken("");
        storeAdminAuth.setIsLogin(false);
        if (alert) {
            Toast.success("Info", "Logout berhasil!");
        }
        return true;
    } catch (error) {
        console.error(error);
    }
};

const serviceAuth = {
    doLogin,
    doCheckToken,
    doLogout,
};
export default serviceAuth;
