var data = [{
  "id": "0",
  "title": "购物问题",
  "content": ["商品是否包邮？",
    "商品发货时间？",
    "能否指定快递公司送货？",
    "收货地址如何新增、修改？",
    "如何查询物流信息？"
  ],
  "detail": ["商品详情页中会详细说明，请仔细查看。",
    "正常期间下单发货时效为1-3天，大促期间可能会稍有延迟。",
    "统一支持顺丰。",
    "您可以在提交订单页面或者在[我的]-[收货地址管理]中进行新增、修改地址，如果已经提交了订单是无法帮您修改地址的。",
    "根据运单号在物流官网查询包裹最新状态。"
  ]
}, {
  "id": "1",
  "title": "订单问题",
  "content": ["如何修改订单信息？",
    "如何取消订单？",
    "为何订单被关闭？",
    "没收到商品却误点确认收货如何处理？"
  ],
  "detail": ["「我的」-「我的订单」，选择您需要修改的订单修改订单信息。",
    "「我的」-「我的订单」，选择您需要取消的订单选择「取消订单」即可。",
    "下单后一小时未付款，订单自动关闭。",
    "订单显示“ 确认收货 ” 状态目前不支持修改，如该订单还没有收到，请您不用担心，实际不影响商品派送，可根据运单号在物流官网查询包裹最新状态。"
  ]
}, {
  "id": "2",
  "title": "支付问题",
  "content": ["支付方式有哪些？",
    "付款后显示待支付？",
    "支付宝查询退款方法？",
    "订单重复支付如何处理？"
  ],
  "detail": ["目前只支持支付宝，后续会接入更多支付选择；",
    "付款后订单显示待付款状态，一般是由于网络问题导致，建议您先退出APP后，重新登录查看是否正常。如果依旧为待付款状态，建议您查看支付收支明细是否有支出，如果未支出，说明订单未付款成功；如果已支出，请联系在线官方客服。",
    "打开支付宝单查询退款金额。",
    "重复扣款是因网络延迟情况而产生，重复扣款金额于1-3个工作日退回原支付账号。"
  ]
}, {
  "id": "3",
  "title": "售后问题",
  "content": ["如何申请售后？"],
  "detail": ["申请售后/退换货、获取退货地址、修改退货信息等，请联系在线客服:。"]
}]

module.exports = {
  data: data
};