import { SecretId, SecretKey, ServiceType, Region } from './config'
const Capi = require('qcloudapi-sdk')
const action = 'ContentTranscode'

// input
const url = 'http://www.botorange.com/'
const to_html = 1 // 1: html 0: xml

// qcloud public parameter
const capi = new Capi({
  SecretId: SecretId,
  SecretKey: SecretKey,
  serviceType: ServiceType
})

capi.request({
  Region: Region,
  Action: action,
  url: url,
  to_html: to_html
}, function (error, data) {
  console.log(data)
})

/**
 * { code: 0,
 * message: '',
 * codeDesc: 'Success',
 * content: '<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html PUBLIC "-//WAPFORUM//DTD XHTML Mobile 1.0//EN" "http://www.wapforum.org/DTD/xhtml-mobile10.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="application/xhtml+xml; charset=UTF-8"/><title>小桔机器人|桔子互动</title><style type="text/css">* {margin:0;padding:0;}body {font-family: Arial,Helvetica,sans-serif;}a {cursor: pointer;text-decoration: underline;}body, div, p, a, table, textarea, form, img, ol, ul, li, h1, h2, h3, h4, h5, h6 {border:0 none;}#tc_content {font-size: 16px;line-height: 25px;word-wrap: break-word;padding: 5px 6px;overflow: hidden;}</style></head><body><div id="tc_content">小桔微信机器人&#160;<br />&#160;微信智能聊天机器人&#160;&amp;&amp;&#160;微信自动化社群运营工具&#160;<br />&#160;我们是一家专注于智能会话服务的创业公司，&#160;<br />&#160;致力于以智能会话代替传统网页，为用户提供更个性化、精练化的智能服务。&#160;<br /><a href="http://www.botorange.com/" position="6">聊天机器人</a> <a href="http://www.botorange.com/" position="6">社群运营工具</a> <a href="http://www.botorange.com/" position="6">关于我们</a> <br /><a href="http://www.botorange.com/" position="6">联系我们</a> <br />智能聊天机器人&#160;<br />我们是一家专注于智能会话服务的创业公司，致力于以智能会话代替传统网页，为用户提供更个性化、精练化的智能服务。\n优雅简单的接入实施，提供RESTFUL&#160;API，&#160;微信个人号，微信公众号，Web&#160;SDK&#160;等多种接入方式，覆盖多平台使用。&#160;<br />顶级社群营销管理专家&#160;点我体验产品&#160;<br /><img alt="soso_tc_slider_img" src="http://picwap.qbview.com/pa-cgi/p?d=http%3A%2F%2Fbotorange.oss-cn-beijing.aliyuncs.com%2Fpic%2Fpic02.jpg"/><br />&#160;微信群裂变：传播不过期的群二维码，管理上万个微信群的后台，实测进群用户增长61%、用户留存增长32%、群交易流水增长36%；轻松打败99%还没找到正确方法的群裂变运营；无成本获取千万流量。\n能全真模拟人工回复的机器人：根据时间间隔、进群人数、回复人数、回复消息类型等多维度条件分别触发不同的回复文案，可针对每位用户精细化运营，大大提升留存率。&#160;\n最全面的群数据分析：每日入群退群人员信息汇总，活跃情况时段分析，专业全面的数据分析帮你解答！定期对社群用户进行排名，大大提升微信群用户积极性。&#160;\n自动拉人入群：根据关键词，验证信息，表单自动拉取好友入群，释放人力，解放生产力。更有付费入群功能，帮你提高社群用户质量。&#160;\n多群直播：可根据需求，将多个群组建联盟，多群之间数据共享，消息互通，让多群的管理不再繁琐，多个群之间用户也可互相交流。&#160;<br />客户及合作伙伴&#160;<img src="http://picwap.qbview.com/pa-cgi/p?d=http%3A%2F%2Fbotorange.oss-cn-beijing.aliyuncs.com%2Fpic%2Fcompany.png" alt="SosoImg"/>联系我们&#160;<br />&amp;copy;&#160;北京桔子互动科技有限公司.\n<a href="http://www.botorange.com/">京ICP备15019082号-1</a> <br /></div></body></html>' }
 */