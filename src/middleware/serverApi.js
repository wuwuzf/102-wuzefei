import axios from 'axios';
import { normalize } from '../../node_modules/normalizr';

const API_DOMAIN = 'http://xly-wkop.xiaoniangao.cn';

const callServerApi = (endpoint, params,normalizeFuc) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'POST',
      url: API_DOMAIN + endpoint,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: params
    }).then(res => {
      if (res.data.ret === 1) {
        // return resolve(res);
        console.error(res);
        return resolve(normalizeFuc ? normalizeFuc(res.data.data) : res);
      }
      console.error('ret 出错',res.data)
      return reject({ errMsg: res.data });
    }).catch(err => {
      console.error('请求 出错',err)
      return reject({ errMsg: JSON.stringify(err) });
    });
  });
}

export default store => next => action => {
  if (!action.SERVER_API) {
    return next(action);
  }
  const {
    type,
    endpoint,
    params,
    normalizeFuc
  } = action.SERVER_API;

  if (typeof type !== 'string') {
    throw new Error('type shoudle be a string');
  }
  if (typeof endpoint !== 'string') {
    throw new Error('endpoint shoudle be a string');
  }
  if (typeof params !== 'object') {
    throw new Error('params shoudle be a object');
  }

  next({
    type: `${type}_REQ`
  });

  return callServerApi(endpoint, params,normalizeFuc)
    .then(res => {
      console.log(res)
      next({
        type: `${type}_SUC`,
        response: res
      });
    }).catch(err => {

      next({
        type: `${type}_FAI`,
        errMsg: err
      });
    });
};
