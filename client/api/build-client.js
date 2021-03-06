import axios from 'axios';

const buildClient = ({ req }) => {
  if (typeof window === 'undefined') {
    return axios.create({
      // use http://ingress-nginx-controller.ingress-nginx.svc.cluster.local for developing on local machine
      baseURL: 'http://www.tocky.vn',
      headers: req.headers,
    });
  } else {
    return axios.create({
      baseURL: '/',
    });
  }
};

export default buildClient;
