import { createToast } from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

const babeng = (title = 'Info !', description = '') => {
  createToast(
    {
      title,
      description,
    },
    {
      type: 'default',
      transition: 'bounce',
      position: 'bottom-right',
    },
  );
};

const info = (title = 'Info !', description = '') => {
  createToast(
    {
      title,
      description,
    },
    {
      type: 'default',
      transition: 'bounce',
      position: 'bottom-right',
    },
  );
};

const warning = (title = 'Info !', description = '') => {
  createToast(
    {
      title,
      description,
    },
    {
      type: 'warning',
      transition: 'bounce',
      position: 'bottom-right',
    },
  );
};

const danger = (title = 'Info !', description = '') => {
  createToast(
    {
      title,
      description,
    },
    {
      type: 'danger',
      transition: 'bounce',
      position: 'bottom-right',
    },
  );
};

const success = (title = 'Info !', description = '') => {
  createToast(
    {
      title,
      description,
    },
    {
      type: 'success',
      transition: 'bounce',
      position: 'bottom-right',
    },
  );
};

const Toast = {
  babeng,
  info,
  warning,
  success,
  danger,
};
export default Toast;
