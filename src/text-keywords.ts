import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'TextKeywords'
const read = require('read-file')

// input
const title = 'AWS CEO 访谈：云计算能力已是另14家提供商总和，5年以后如何？'
const channel = 'CHnews_news_tech'
const content= read.sync('./asset/tech-article.txt', 'utf8') // content from https://mp.weixin.qq.com/s/tG3ZAHNYB2df9DnvLtX-Cg

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
  channel: channel,
  content: content
}, function (error, data) {
  console.log(data)
})

/**
 * { code: 0,
 * message: '',
 * codeDesc: 'Success',
 * keywords:
 *  [ { keyword: 'aws', score: 0.99000000953674, type: 'keyword' },
 *    { keyword: '云计算', score: 0.99000000953674, type: 'keyword' },
 *    { keyword: '亚马逊', score: 0.58894109725952, type: 'keyword' } ] }
 */