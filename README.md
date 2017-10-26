# tencent-nlp

## lexical-analysis
#### desp 
分词&命名实体API
#### input 
帮我订一张北京到上海的机票
#### output
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