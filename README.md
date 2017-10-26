# TENCENT-NLP

<!-- toc -->

- [LexicalAnalysis](#lexicalanalysis)
- [TextSentiment](#textsentiment)
- [TextClassify](#textclassify)
- [TextKeywords](#textkeywords)
- [TextDependency](#textdependency)
- [LexicalSynonym](#lexicalsynonym)
- [LexicalCheck](#lexicalcheck)
- [ContentTranscode](#contenttranscode)
- [TextSensitivity](#textsensitivity)
- [ContentGrab](#contentgrab)

<!-- tocstop -->

## LexicalAnalysis
#### DESP 
分词&命名实体API
#### INPUT 
帮我订一张北京到上海的机票
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "tokens": [
        {
            "pos": 0, 
            "wlen": "2", 
            "word": "帮", 
            "wtype": "动词", 
            "wtype_pos": 31
        }, 
        {
            "pos": 2, 
            "wlen": "2", 
            "word": "我", 
            "wtype": "代词", 
            "wtype_pos": 27
        }, 
        {
            "pos": 4, 
            "wlen": "2", 
            "word": "订", 
            "wtype": "动词", 
            "wtype_pos": 31
        }, 
        {
            "pos": 6, 
            "wlen": "2", 
            "word": "一", 
            "wtype": "数词", 
            "wtype_pos": 15
        }, 
        {
            "pos": 8, 
            "wlen": "2", 
            "word": "张", 
            "wtype": "量词", 
            "wtype_pos": 26
        }, 
        {
            "pos": 10, 
            "wlen": "4", 
            "word": "北京", 
            "wtype": "地名", 
            "wtype_pos": 20
        }, 
        {
            "pos": 14, 
            "wlen": "2", 
            "word": "到", 
            "wtype": "介词", 
            "wtype_pos": 25
        }, 
        {
            "pos": 16, 
            "wlen": "4", 
            "word": "上海", 
            "wtype": "地名", 
            "wtype_pos": 20
        }, 
        {
            "pos": 20, 
            "wlen": "2", 
            "word": "的", 
            "wtype": "助词", 
            "wtype_pos": 30
        }, 
        {
            "pos": 22, 
            "wlen": "4", 
            "word": "机票", 
            "wtype": "名词", 
            "wtype_pos": 16
        }
    ], 
    "combtokens": [
        {
            "cls": "地名", 
            "pos": 10, 
            "wlen": "4", 
            "word": "北京"
        }, 
        {
            "cls": "地名", 
            "pos": 16, 
            "wlen": "4", 
            "word": "上海"
        }
    ]
}
```

## TextSentiment
#### DESP 
情感分析
#### INPUT 
不高兴了
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "positive": 0.052381001412868, 
    "negative": 0.94761902093887
}
```

## TextClassify
#### DESP 
文本分类
#### INPUT 
an article from [新华网] (https://mp.weixin.qq.com/s/xwkVqG3Se3NyahIxIY653Q)    
Soure [political-article](https://github.com/lijiarui/tencent-nlp/blob/master/asset/political-article.txt)
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "classes": [
        {
            "class": "别的政治类别", 
            "class_num": 42, 
            "conf": 1
        }, 
        {
            "class": "心灵鸡汤", 
            "class_num": 40, 
            "conf": 0
        }, 
        {
            "class": "文化", 
            "class_num": 61, 
            "conf": 0
        }
    ]
}
```

## TextKeywords
#### DESP 
关键词提取
#### INPUT 
Soure [tech-article](https://github.com/lijiarui/tencent-nlp/blob/master/asset/tech-article.txt)
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "keywords": [
        {
            "keyword": "aws", 
            "score": 0.99000000953674, 
            "type": "keyword"
        }, 
        {
            "keyword": "云计算", 
            "score": 0.99000000953674, 
            "type": "keyword"
        }, 
        {
            "keyword": "亚马逊", 
            "score": 0.58894109725952, 
            "type": "keyword"
        }
    ]
}
```

## TextDependency
#### DESP 
句法分析
#### INPUT 
帮我订一张北京到上海的机票
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "keywords": [
        [
            {
                "dep_rel": "HED", 
                "father_id": 0, 
                "id": 1, 
                "postag": "v", 
                "word": "帮"
            }, 
            {
                "dep_rel": "DBL", 
                "father_id": 1, 
                "id": 2, 
                "postag": "r", 
                "word": "我"
            }, 
            {
                "dep_rel": "VOB", 
                "father_id": 1, 
                "id": 3, 
                "postag": "v", 
                "word": "订"
            }, 
            {
                "dep_rel": "ATT", 
                "father_id": 5, 
                "id": 4, 
                "postag": "m", 
                "word": "一"
            }, 
            {
                "dep_rel": "ATT", 
                "father_id": 6, 
                "id": 5, 
                "postag": "q", 
                "word": "张"
            }, 
            {
                "dep_rel": "VOB", 
                "father_id": 3, 
                "id": 6, 
                "postag": "ns", 
                "word": "北京"
            }, 
            {
                "dep_rel": "CMP", 
                "father_id": 3, 
                "id": 7, 
                "postag": "p", 
                "word": "到"
            }, 
            {
                "dep_rel": "ATT", 
                "father_id": 10, 
                "id": 8, 
                "postag": "ns", 
                "word": "上海"
            }, 
            {
                "dep_rel": "RAD", 
                "father_id": 8, 
                "id": 9, 
                "postag": "u", 
                "word": "的"
            }, 
            {
                "dep_rel": "POB", 
                "father_id": 7, 
                "id": 10, 
                "postag": "n", 
                "word": "机票"
            }
        ]
    ]
}
```

## LexicalSynonym
#### DESP 
同义词
#### INPUT 
帮我订一张京到沪的机票，优先南航
#### TIPS
没有识别出`沪` 和 `南航`
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "query": null, 
    "syns": [
        {
            "word_ori": {
                "idx_beg": 2, 
                "idx_end": 3, 
                "text": "订"
            }, 
            "word_syns": [
                {
                    "conf": 0.27936321496964, 
                    "text": "定"
                }
            ]
        }, 
        {
            "word_ori": {
                "idx_beg": 3, 
                "idx_end": 4, 
                "text": "一"
            }, 
            "word_syns": [
                {
                    "conf": 1, 
                    "text": "1"
                }
            ]
        }, 
        {
            "word_ori": {
                "idx_beg": 5, 
                "idx_end": 6, 
                "text": "京"
            }, 
            "word_syns": [
                {
                    "conf": 0.59977006912231, 
                    "text": "北京"
                }
            ]
        }, 
        {
            "word_ori": {
                "idx_beg": 9, 
                "idx_end": 10, 
                "text": "机票"
            }, 
            "word_syns": [
                {
                    "conf": 0.42561995983124, 
                    "text": "飞机票价"
                }, 
                {
                    "conf": 1, 
                    "text": "飞机票"
                }
            ]
        }
    ]
}
```

## LexicalCheck
#### DESP 
纠错
#### INPUT 
睡交吃饭
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "text": "睡觉吃饭", 
    "text_annotate": "<em>睡觉</em>吃饭", 
    "conf": 2
}
```

## ContentTranscode
#### DESP 
转码
#### INPUT 
www.botorange.com
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "content": "<?xml version=\"1.0\" encoding=\"UTF-8\"?><!DOCTYPE html PUBLIC \"-//WAPFORUM//DTD XHTML Mobile 1.0//EN\" \"http://www.wapforum.org/DTD/xhtml-mobile10.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\"><head><meta http-equiv=\"Content-Type\" content=\"application/xhtml+xml; charset=UTF-8\"/><title>小桔机器人|桔子互动</title><style type=\"text/css\">* {margin:0;padding:0;}body {font-family: Arial,Helvetica,sans-serif;}a {cursor: pointer;text-decoration: underline;}body, div, p, a, table, textarea, form, img, ol, ul, li, h1, h2, h3, h4, h5, h6 {border:0 none;}#tc_content {font-size: 16px;line-height: 25px;word-wrap: break-word;padding: 5px 6px;overflow: hidden;}</style></head><body><div id=\"tc_content\">小桔微信机器人 <br /> 微信智能聊天机器人 && 微信自动化社群运营工具 <br /> 我们是一家专注于智能会话服务的创业公司， <br /> 致力于以智能会话代替传统网页，为用户提供更个性化、精练化的智能服务。 <br /><a href=\"http://www.botorange.com/\" position=\"6\">聊天机器人</a> <a href=\"http://www.botorange.com/\" position=\"6\">社群运营工具</a> <a href=\"http://www.botorange.com/\" position=\"6\">关于我们</a> <br /><a href=\"http://www.botorange.com/\" position=\"6\">联系我们</a> <br />智能聊天机器人 <br />我们是一家专注于智能会话服务的创业公司，致力于以智能会话代替传统网页，为用户提供更个性化、精练化的智能服务。
优雅简单的接入实施，提供RESTFUL API， 微信个人号，微信公众号，Web SDK 等多种接入方式，覆盖多平台使用。 <br />顶级社群营销管理专家 点我体验产品 <br /><img alt=\"soso_tc_slider_img\" src=\"http://picwap.qbview.com/pa-cgi/p?d=http%3A%2F%2Fbotorange.oss-cn-beijing.aliyuncs.com%2Fpic%2Fpic02.jpg\"/><br /> 微信群裂变：传播不过期的群二维码，管理上万个微信群的后台，实测进群用户增长61%、用户留存增长32%、群交易流水增长36%；轻松打败99%还没找到正确方法的群裂变运营；无成本获取千万流量。
能全真模拟人工回复的机器人：根据时间间隔、进群人数、回复人数、回复消息类型等多维度条件分别触发不同的回复文案，可针对每位用户精细化运营，大大提升留存率。 
最全面的群数据分析：每日入群退群人员信息汇总，活跃情况时段分析，专业全面的数据分析帮你解答！定期对社群用户进行排名，大大提升微信群用户积极性。 
自动拉人入群：根据关键词，验证信息，表单自动拉取好友入群，释放人力，解放生产力。更有付费入群功能，帮你提高社群用户质量。 
多群直播：可根据需求，将多个群组建联盟，多群之间数据共享，消息互通，让多群的管理不再繁琐，多个群之间用户也可互相交流。 <br />客户及合作伙伴 <img src=\"http://picwap.qbview.com/pa-cgi/p?d=http%3A%2F%2Fbotorange.oss-cn-beijing.aliyuncs.com%2Fpic%2Fcompany.png\" alt=\"SosoImg\"/>联系我们 <br />&copy; 北京桔子互动科技有限公司.
<a href=\"http://www.botorange.com/\">京ICP备15019082号-1</a> <br /></div></body></html>"
}
```

## TextSensitivity
#### DESP 
敏感信息识别
#### INPUT 
习近平
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "sensitive": 0.62245933120185, 
    "nonsensitive": 0.37754066879815
}
```

## ContentGrab
#### DESP 
下载抽取
#### INPUT 
http://weixin.sogou.com/
#### OUTPUT
```json
{
    "code": 0, 
    "message": "", 
    "codeDesc": "Success", 
    "title": "搜狗微信搜索_订阅号及文章内容独家收录，一搜即达", 
    "content": "早啊!新闻来了〔2017.10.26〕
聚焦十九大25日，中国共产党第十九届中央委员会第一次全体会议在北京举行。全会选举了中央政治局委员、中央政治局常务委员会委员、中央委员会总书记。习近平、李克强、栗战书、汪洋、王沪宁、赵乐际、韩正当选...
央视新闻
准新娘婚前竟碰到这种事!幸亏这个及时电话，否则真要哭晕了
结婚是人生的大事，也是喜事，但是如果在结婚前，准备结婚的钱被骗走了，该会是怎么样一种窘境？杭州有位准新娘，差点就要哭晕了。10月23日下午13时，杭州余杭公安临平派出所了解到，有位周姑娘正长时间接听犯罪...
华商报
老太靠车门休息，车主静候未打扰，“老吾老以及人之老”
澎湃新闻记者 邱海鸿10月20日早晨，在江苏省如皋市文化广场附近，一位老太也许是走路太累了，便倚靠在附近一辆轿车驾驶车门上，休息了一会后。此间，坐在驾驶座上的车主看到了，并没有打扰老太，而是等老太休息...
澎湃新闻
废除汉字惹的祸!韩国人婚礼现场收红包显尴尬
“汉字至今仍在韩国婚丧礼仪中广泛使用，如果全部换成谚文会怎样？”最近，韩国《首尔新闻》刊登了这则消息。对此，韩国年轻一代和老一辈人的观念有所不同，年轻人认为韩国人就应当使用韩国发明的文字，而老一辈...
每日经济新闻
三分钟速览《新闻联播》2017.10.25
10月25日纵论天下大势……首先，你得看《新闻联播》：01、中国共产党第十九届中央委员会第一次全体会议公报02、习近平等领导同志亲切会见出席党的十九大代表 特邀代表和列席人员03、习近平同志简历04、李克强同...
央视网
当年惊艳红楼的尤二姐，如今身份惊呆众人!真是美貌与才华并存的传奇人生
你们还记得87版《红楼梦》里的尤二姐吗？尤二姐出场不多，但当年一眼就被她吸引了，相貌出众，含媚带情，眼波又浸满了哀伤......但饰演尤二姐的演员张明明自从87版红楼梦播出后，好像就杳无音讯了。“贾宝玉”欧...
钱江晚报
麦当劳改名了，叫金拱门!炸出一堆段子手：KFC叫开封菜?|南都早餐
2017年10月26日，早。麦当劳改名“金拱门”昨晚是不是被“金拱门”刷屏了？没错，麦当劳改名了叫“金拱门”还冲上了微博热搜别慌看看麦当劳怎么说的南都记者从麦当劳中国公关相关负责人处获悉，因业务发展需要，...
南方都市报
85后党代表，让乡亲们离不开她凭的是什么?
读十九大报告你有什么感悟？未来五年你给自己树立了哪些小目标？“十九大回声”专题我们采访了一系列人群一起来读读他们的十九大笔记看看他们未来五年的梦想是什么？吴书香“85后”村党支部第一书记吴书香在展示...
海外网
军情|苏-57性能不达标?印度和俄罗斯的这个项目再起波折——
塔斯社10月24日报道称，俄罗斯国防产品出口公司24日称，俄罗斯和印度在继续推进研发第五代战机FGFA项目。▲塔斯社报道截图此前美国《防务新闻》周刊援引印度空军司令部的报告称，俄方提出的项目方案不能满足印方...
参考消息
微信又双叒更新啦!这次，你再也没理由说你记性差了…
小编发现，这些天微信又双叒悄悄更新啦！那些新添加的功能，你都知道吗？▲瞅瞅这些更新说明你当然不知道啦~因为按照“惯例”，微信不会在更新说明里写下所有更新内容……不信？你往下看！1.苹果手机可以用Siri...
扬子晚报
今天的人民日报，绝对值得收藏!
人民日报头版人民日报第二版人民日报第三版人民日报第四版大家都在看不要人夸颜色好，只留清气满乾坤！习近平为何说这句话？特朗普电贺习近平连任总书记！双方还说了这些大事…俄罗斯总理梅德韦杰夫将做客人民网...
人民网
他9年蹲拍街边陌生人，出现这样的画面，难以置信!
来源｜艺非凡（efifan）我们究竟是过了365天，还是一天重复了364遍。9年蹲拍都市生活中的你我，似乎每天都形色匆忙，忙里偷闲也会发个朋友圈，急于展现我们的生活一点都不单调，丰富多彩。可现实果真如此吗？丹...
扬子晚报
这两张挥手照，相隔已是5年……
 两张照片，时间相隔5年。 第一张照片，是2017年10月25日，刚刚在十九届一中全会上当选中共中央总书记的习近平，在人民大会堂亲切会见出席党的十九大代表、特邀代表和列席人员。 第二张照片，是2012年1...
人民网
《王牌特工2》：导演，你可少卖点衣服吧
Aloysius注：本文涉及剧透2015年一部“王的男人”（《王牌特工》）和一部“叔的男人”（ 《秘密特工》），让很多人仿佛看见了间谍片的复兴。姑且不讨论国内没上映的《秘密特工》，光是《王牌特工》就向中国观众...
澎湃新闻
别动不动就清“僵尸粉”，搞不好就亏大了|下周有较强冷空气
“我在清理僵尸粉，勿回！感谢一路有你，如果你的微信也想清理，推荐你加这个微信号。”平时不怎么联系的朋友，突然没头没尾发来一条消息，不少市民出于好奇，忍不住试着清除“僵尸”好友，结果有人被莫名其妙转...
扬子晚报
注意!小区、公园这两天突现\"趴地者\"?千万别紧张，他们是在..
啊，深秋来了。在这样的一个季节里，一段悲伤心塞而手残的故事发生了。枫叶红了，银杏黄了，不管咋滴，所有的叶子都落了。无数个妈妈们都快哭了。这几天在小区、公园看到这样一群人趴在地上捡落叶别紧张哈他们只...
扬子晚报
不要人夸颜色好，只留清气满乾坤
 10月25日上午，党的十九届中央委员会第一次全体会议新选出的中央政治局常委同中外记者见面，习近平总书记发表讲话。在讲话结束时，习近平总书记表示：我们欢迎各位记者朋友在中国多走走、多看看，继续关注中...
中央纪委监察部网站
沧桑虽经数千年 归来仍是少年
10月18日，中国共产党第十九次全国代表大会在北京人民大会堂开幕。新华社记者 饶爱民 摄习近平同志在党的十九大报告中指出，青年一代有理想、有本领、有担当，国家就有前途，民族就有希望。中国梦是历史的、现实...
新华网
入秋别急着把被子拿出来，忽略这几点，入冬可能要受罪
霜降后，天气说冷就冷下一场雨，气温就可能降许多被子就派上大用场啦！但是换被子之前一定要挑个好天气晒一晒1.晴天晒艳阳高照的晴朗天气最适合晒被子把被子晒得暖暖的盖着感觉格外舒服切记大风天不要晒被子容易...
扬子晚报
关注|美军F-35A战机下月赴日进行作战亮相 最令美国担心的是——
美国《防务新闻》周刊网站10月24日发表了题为《空军F-35A战机将于11月入驻日本》的报道。美空军的F-35战机即将在亚太地区进行作战亮相。今年11月初，12架F-35A将前往日本冲绳嘉手纳空军基地进行为期半年的部署。...
参考消息
加载更多内容
搜索热词热度
1 十九届政治局常委
2 38岁秋瓷炫怀孕
3 林志颖大哥卖肠粉
4 霍金公开博士论文
5 中国智轨列车运行
6 艺术家傅全香去世
7 十九大闭幕
8 C罗蝉联足球先生
9 库里扔牙套罚5万
10 泰坦尼克家书天价
编辑精选
超级赞！中国又一产业异军突起，逆袭韩国走向世界！
人民网10月24日
为了时髦显瘦，一定要露脚踝么？
VOGUE10月24日
你为万圣节买的“南瓜”，真的是南瓜吗……？
果壳网10月24日
未来可能只有两种人：玩手游的人和不玩手游的人
 新周刊10月24日
热点文章
华为手机五年蜕变：从“没钱的买华为”到“没钱买华...
腾讯科技10月24日
你关心的房价问题，官方给出了最新回应
人民网10月24日
有人60多岁还是“年轻人”，为啥你20几岁就老了
人民日报10月24日
9月房价涨了还是跌了？国家统计局权威数据来了！
央视新闻10月24日
"
}
```