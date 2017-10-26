import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'TextClassify'
const read = require('read-file')

// input
const title = '沧桑虽经数千年 归来仍是少年'
const content = read.sync('./asset/political-article.txt', 'utf8') // content from https://mp.weixin.qq.com/s/xwkVqG3Se3NyahIxIY653Q
const secd_nav = ''
const url = 'https://mp.weixin.qq.com/s/xwkVqG3Se3NyahIxIY653Q'

// qcloud public parameter
const capi = new Capi({
  SecretId: SecretId,
  SecretKey: SecretKey,
  serviceType: ServiceType
})

capi.request({
  Region: Region,
  Action: action,
  title: title,
  content: content,
  secd_nav: secd_nav,
  url: url
}, function (error, data) {
  console.log(data)
})

/**
 * { code: 0,
 * message: '',
 * codeDesc: 'Success',
 * classes:
 *  [ { class: '别的政治类别', class_num: 42, conf: 1 },
 *    { class: '心灵鸡汤', class_num: 40, conf: 0 },
 *    { class: '文化', class_num: 61, conf: 0 } ] }
 */