import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'TextDependency'

// input
const content= '帮我订一张北京到上海的机票'

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
}, function (error, data) {
  console.log(JSON.stringify(data, null, 2))
})

/**
 * {
 * "code": 0,
 * "message": "",
 * "codeDesc": "Success",
 * "keywords": [
 *   [
 *     {
 *       "dep_rel": "HED",
 *       "father_id": 0,
 *       "id": 1,
 *       "postag": "v",
 *       "word": "帮"
 *     },
 *     {
 *       "dep_rel": "DBL",
 *       "father_id": 1,
 *       "id": 2,
 *       "postag": "r",
 *       "word": "我"
 *     },
 *     {
 *       "dep_rel": "VOB",
 *       "father_id": 1,
 *       "id": 3,
 *       "postag": "v",
 *       "word": "订"
 *     },
 *     {
 *       "dep_rel": "ATT",
 *       "father_id": 5,
 *       "id": 4,
 *       "postag": "m",
 *       "word": "一"
 *     },
 *     {
 *       "dep_rel": "ATT",
 *       "father_id": 6,
 *       "id": 5,
 *       "postag": "q",
 *       "word": "张"
 *     },
 *     {
 *       "dep_rel": "VOB",
 *       "father_id": 3,
 *       "id": 6,
 *       "postag": "ns",
 *       "word": "北京"
 *     },
 *     {
 *       "dep_rel": "CMP",
 *       "father_id": 3,
 *       "id": 7,
 *       "postag": "p",
 *       "word": "到"
 *     },
 *     {
 *       "dep_rel": "ATT",
 *       "father_id": 10,
 *       "id": 8,
 *       "postag": "ns",
 *       "word": "上海"
 *     },
 *     {
 *       "dep_rel": "RAD",
 *       "father_id": 8,
 *       "id": 9,
 *       "postag": "u",
 *       "word": "的"
 *     },
 *     {
 *       "dep_rel": "POB",
 *       "father_id": 7,
 *       "id": 10,
 *       "postag": "n",
 *       "word": "机票"
 *     }
 *   ]
 * ]
 * }
 * 
 */