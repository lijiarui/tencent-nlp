import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'TextSensitivity'

// input
const content = '习近平'
const type = 2 // 1: 色情 2: 政治

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
 * sensitive: 0.62245933120185,
 * nonsensitive: 0.37754066879815 }
 */