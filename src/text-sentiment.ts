import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'TextSentiment'

// input
const content = '不高兴了'
const type = 4 // 1：电商；2：APP；3：美食；4：酒店和其他。

// qcloud public parameter
const capi = new Capi({
  SecretId: SecretId,
  SecretKey: SecretKey,
  serviceType: ServiceType
})

capi.request({
  Region: Region,
  Action: action,
  content: content,
  type: type
}, function (error, data) {
  console.log(data)
})

/**
 * { code: 0,
 * message: '',
 * codeDesc: 'Success',
 * positive: 0.052381001412868,
 * negative: 0.94761902093887 }
 */