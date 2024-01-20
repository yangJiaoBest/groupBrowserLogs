import request from '../utils/request';

// 获取分组列表
export function apiGetGroupList() {
  return request({
    url: '/api/v1/group/list?page_size=999',
    method: 'get',
  });
}

// 根据group_id获取浏览器列表
// (group_id为空, 查询所有浏览器列表)
export function apiGetAllBrowserList(group_id) {
  return request({
    url: `/api/v1/user/list?page_size=999&group_id=${group_id}`,
    method: 'get',
  });
}

// 获取当前启动的浏览器
export function apiGetBrowserStatus() {
  return request({
    url: '/api/v1/browser/local-active',
    method: 'get',
  });
}

// 登录接口
export function apiLogin() {
  return request({
    url: '登录地址',
    method: ' post',
    data,
  });
}
