/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: '',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '',

  PROVINCE: '河南',
  CITY: '信阳',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: '',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'eNPzsR1RvM69t962mEtvY6rmqgt1cUfa1QjXzWrT1G8',
      // 所在省份
      province: "江苏",
      // 所在城市
      city: "苏州",
      // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
      // horoscopeDateType: '今日',
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      // openUrl: "https://wangxinleo.cn",
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      // horoscopeDate: '10-02',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '2000', date: '10-02',
        },
        {
          type: '*生日', name: '自己', year: '1996', date: '09-20',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      festivals_limit: 3,
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
    {
       // 想要发送的人的名字
       name: '前度',
       // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
       id: 'oiQFc6tkHIh6wilQ1YXzanYP21bg',
       // 使用微信测试号：你想对他发送的模板消息的模板ID
       useTemplateId: 'nmEprXIS5LiX99tByqKQXSHesIHJaaU_RCHOB5IdhKc',
       // 所在省份
       province: "江苏",
       // 所在城市
       city: "苏州",
       // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
       // horoscopeDateType: '今日',
       // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
       // openUrl: "https://wangxinleo.cn",
       // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
       // horoscopeDate: '10-02',
       festivals: [
         // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
         {"type": "*生日", "name": "老妹", "year": "2005", "date": "11-22", isShowAge: true},
         {"type": "*生日", "name": "老爸", "year": "1976", "date": "03-09", isShowAge: true},
         {"type": "*生日", "name": "老妈", "year": "1977", "date": "11-17", isShowAge: true},
         {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09", isShowAge: true},
         // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
         {"type": "节日", "name": "结婚纪念日", "year": "1996", "date": "09-01"},
         {"type": "节日", "name": "相识纪念日", "year": "2021", "date": "09-01"},
       ],
       festivals_limit: 6,
       // 我们在一起已经有xxxx天了的配置
       customizedDateList: [
         // 在一起的日子
         { keyword: 'love_day', date: '2022-09-08' },
         // 结婚纪念日
         { keyword: 'marry_day', date: '2022-09-09' },
       ],

    },
   //  {
   //    // 想要发送的人的名字
   //    name: '小吴',
   //    // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   //    id: 'oiQFc6mV0j0MtIlY4s3xu4H5pTro',
   //    // 使用微信测试号：你想对他发送的模板消息的模板ID
   //    useTemplateId: 'a6o_Kq1azd3dzEw9_dPUyPCcM8q_SEQ7YUSAPbMuOpc',
   //    // 所在省份
   //    province: "安徽",
   //    // 所在城市
   //    city: "黄山",
   //    // 获取什么时候的星座运势，可选：['今日', '明日', '本周', '本月', '今年'], 留空则随机
   //    // horoscopeDateType: '今日',
   //    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   //    // openUrl: "https://wangxinleo.cn",
   //    // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
   //    // horoscopeDate: '10-02',
   //    festivals: [
   //      // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
   //      {"type": "生日", "name": "我", "year": "2001", "date": "10-22", isShowAge: false},
   //      // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
   //      // {"type": "节日", "name": "相识纪念日", "year": "2018", "date": "08-01"},
   //    ],
   //    festivals_limit: 1,
   //    // 我们在一起已经有xxxx天了的配置
   //    customizedDateList: [
   //      // 在一起的日子
   //      { keyword: 'love_day', date: '2018-08-01' },
   //      // 结婚纪念日
   //      // { keyword: 'marry_day', date: '2022-09-09' },
   //    ],

   // },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'MEl0ULi41uNeOLTM2V7oAlu7sZAAj_GHNZHx1v1wHeU',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiQFc6tkHIh6wilQ1YXzanYP21bg',
    }
  ],


  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, date 仅填月日即可, 请严格按照示例填写
   * type必须填！ 只能 “生日” 和 “节日” 二选一!
   * 
   * --- 阴历配置开始 ---
   * 如果日期使用阴历，请在 “生日” 或 "节日“ 前添加 * 符号
   * --- 阴历配置结束 ---
   * 
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   * 
   * --- 是否展示周岁信息开始 ---
   * isShowAge: true 展示岁数, 仅type为生日生效
   * isShowAge: false 不展示岁数, 仅type为生日生效
   * 删除isShowAge属性，也会不展示岁数
   * --- 是否展示周岁信息结束 ---
   */
  // FESTIVALS: [
  //   // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
  //   {"type": "*生日", "name": "老婆", "year": "1996", "date": "09-09", isShowAge: true},
  //   {"type": "*生日", "name": "老爸", "year": "1976", "date": "03-09", isShowAge: true},
  //   {"type": "*生日", "name": "老妈", "year": "1977", "date": "11-17", isShowAge: true},
  //   {"type": "*生日", "name": "老妹", "year": "2005", "date": "11-22", isShowAge: true},
  //   // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
  //   {"type": "节日", "name": "结婚纪念日", "year": "1996", "date": "09-31"},
  //   {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
  //   // 你可以不断按格式往下增加
  //   // ...
  // ],

  /**
   * 限制重要节日的展示条目, 需要填写数字;
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 0,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }}
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-09-08"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2022-09-09"},
    // 退伍日
    {"keyword": "ex_day", date: "2022-09-10"},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }}
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你,就好像捡到了100斤的运气",
    ]},
    // 你可以不断按格式往下增加
    // ...
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""

}

module.exports = USER_CONFIG

