import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'LexicalSynonym'

// input
const text = '帮我订一张京到沪的机票，优先南航'

// qcloud public parameter
const capi = new Capi({
  SecretId: SecretId,
  SecretKey: SecretKey,
  serviceType: ServiceType
})

capi.request({
  Region: Region,
  Action: action,
  text: text,
}, function (error, data) {
  console.log(JSON.stringify(data, null, 2))
})

/**
 * {
 * "code": 0,
 * "message": "",
 * "codeDesc": "Success",
 * "query": null,
 * "syns": [
 *   {
 *     "word_ori": {
 *       "idx_beg": 2,
 *       "idx_end": 3,
 *       "text": "订"
 *     },
 *     "word_syns": [
 *       {
 *         "conf": 0.27936321496964,
 *        "text": "定"
 *      }
 *     ]
 *   },
 *   {
 *     "word_ori": {
 *       "idx_beg": 3,
 *       "idx_end": 4,
 *       "text": "一"
 *     },
 *     "word_syns": [
 *       {
 *         "conf": 1,
 *         "text": "1"
 *       }
 *     ]
 *   },
 *   {
 *     "word_ori": {
 *       "idx_beg": 5,
 *       "idx_end": 6,
 *       "text": "京"
 *     },
 *     "word_syns": [
 *       {
 *         "conf": 0.59977006912231,
 *         "text": "北京"
 *       }
 *     ]
 *   },
 *   {
 *     "word_ori": {
 *       "idx_beg": 9,
 *       "idx_end": 10,
 *       "text": "机票"
 *     },
 *     "word_syns": [
 *       {
 *         "conf": 0.42561995983124,
 *         "text": "飞机票价"
 *       },
 *       {
 *         "conf": 1,
 *         "text": "飞机票"
 *       }
 *     ]
 *   }
 * ]
 * }
 */