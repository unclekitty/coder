export const Origin = {  // * 管理员新增一个用户  addUser: '/api/aclUser/addUser',  // * 获取APP的版本号  getAppVersion: '/api/aclUser/getAppVersion',  // 新增或修改一个目录  addOrUpdateCategory: '/api/baseCategory/addOrUpdateCategory',  // * 模糊查询行业类目  fuzzySearchCategory: '/api/baseCategory/fuzzySearchCategory',  // * 获取一个父目录下的所有字目录（包括孙目录等）  getAllCategoryByParentId: '/api/baseCategory/getAllCategoryByParentId',  // * 获取同级行业目录  getBrotherCategory: '/api/baseCategory/getBrotherCategory',  // * 根据父id获取所有直接下级目录  getCategoryByParentId: '/api/baseCategory/getCategoryByParentId',  // * 根据父id获取所有直接下级目录(分页获取)  getCategoryByParentId2: '/api/baseCategory/getCategoryByParentId2',  // * 以树形形似获取所有目录  getTreeCategory: '/api/baseCategory/getTreeCategory',  // * 获取宝贝的调价列表  getGoodsAdjustPriceList: '/api/baseGoodsStatus/getGoodsAdjustPriceList',  // * 获取宝贝改名的列表信息  getGoodsRenameList: '/api/baseGoodsStatus/getGoodsRenameList',  // * 获取宝贝的上下架列表  getGoodsUpAndDownList: '/api/baseGoodsStatus/getGoodsUpAndDownList',  // * 获取宝贝详情  getItemInfo: '/api/baseInfoItem/getItemInfo',  // * 按天查宝贝的销售概况  getItemSalesOfDay: '/api/baseInfoItem/getItemSalesOfDay',  // * 按月查询宝贝的销售概况  getItemSalesOfMonth: '/api/baseInfoItem/getItemSalesOfMonth',  // * 新增用户收藏品牌  addUserBrand: '/api/baseInfoUserBrand/addUserBrand',  // * 校验用户是否收藏此品牌  checkUserBrand: '/api/baseInfoUserBrand/checkUserBrand',  // * 删除用户收藏品牌  deleteUserBrand: '/api/baseInfoUserBrand/deleteUserBrand',  // * 查询用户收藏品牌最近销售情况列表  queryUserBrandSalesList: '/api/baseInfoUserBrand/queryUserBrandSalesList',  // * 查询用户收藏品牌  queryUserBrands: '/api/baseInfoUserBrand/queryUserBrands',  // * 取消关注行业  cancelFollowCategory: '/api/baseInfoUserCategory/cancelFollowCategory',  // * 用户关注行业  followCategory: '/api/baseInfoUserCategory/followCategory',  // * 获取关注的行业列表  getFollowCategoryList: '/api/baseInfoUserCategory/getFollowCategoryList',  // * 用户是否关注了指定行业  isFavorite: '/api/baseInfoUserCategory/isFavorite',  // * 取消收藏宝贝  cancelFollowGoods: '/api/baseInfoUserGoods/cancelFollowGoods',  // * 收藏宝贝  followGoods: '/api/baseInfoUserGoods/followGoods',  // * 分页获取收藏的宝贝列表  getFollowGoodsList: '/api/baseInfoUserGoods/getFollowGoodsList',  // * 当前登录用户是否收藏了指定宝贝  isFavorite: '/api/baseInfoUserGoods/isFavorite',  // * 查询用户宝贝  queryUserGoods: '/api/baseInfoUserGoods/queryUserGoods',  // 用户收藏店铺接口  add: '/api/baseInfoUserShop/usershop/add',  // 校验用户收藏店铺接口  check: '/api/baseInfoUserShop/usershop/check',  // 删除用户已收藏的店铺  delete: '/api/baseInfoUserShop/usershop/delete',  // 查询用户已收藏的店铺列表  query: '/api/baseInfoUserShop/usershop/query',  // 查询用户默认的已收藏的店铺  default: '/api/baseInfoUserShop/usershop/query/default',  // 查询用户已收藏的店铺列表（此接口包含店铺销售额等销售数据）  detail: '/api/baseInfoUserShop/usershop/query/detail',  // * 查询品牌详情,根据品牌id(brand_id)查询  getDtDimBrandBaseInfoById: '/api/dtDimBrandBaseInfo/getDtDimBrandBaseInfoById',  // * 品牌搜索  queryBrandByName: '/api/dtDimBrandBaseInfo/queryBrandByName',  // * 分页查询品牌信息  queryPageBrandByName: '/api/dtDimBrandBaseInfo/queryPageBrandByName',  // * 通过goods name模糊查询 goods 默认 10条  queryGoodsByName: '/api/dtDimGoodsBaseInfoEtl/queryGoodsByName',  // * 通过过滤参数查询页面,必传参数:goods_name,过滤条件:行业id(可选)  queryPageGoodsByFilterParam: '/api/dtDimGoodsBaseInfoEtl/queryPageGoodsByFilterParam',  // * 店铺搜索-&gt;查询全部，分页查询，最多500条数据，每页可显示10,20,50条数据  queryPageShopByName: '/api/dtDimShopBaseInfo/queryPageShopByName',  // 根据店铺名查询匹配的店铺（模糊查询）  queryShopByName: '/api/dtDimShopBaseInfo/queryShopByName',  // 查询店铺的服务详情  queryShopServiceInfo: '/api/dtDimShopServiceInfo/queryShopServiceInfo',  // * 插入测试数据  addTestData: '/api/dtRpDayBrandCategoryStat/addTestData',  // * 查询品牌下目录的统计信息  getBrandCategoryStatistics: '/api/dtRpDayBrandCategoryStat/getBrandCategoryStatistics',  // * 获取品牌下行业每日销售明细  getDayBrandCategoryStatistics: '/api/dtRpDayBrandCategoryStat/getDayBrandCategoryStatistics',  // * 根据brandId 查询最近30天top 100宝贝销售数据  getDayBrandGoodsLast30HotStat: '/api/dtRpDayBrandGoodsLast30HotStat/getDayBrandGoodsLast30HotStat',  // * 获取品牌下的宝贝飙量榜  getBrandGoodBiaoList: '/api/dtRpDayBrandGoodsLast7BiaoStat/getBrandGoodBiaoList',  // * 添加测试数据  addTestData: '/api/dtRpDayBrandPriceDistributionStat/addTestData',  // * 获取品牌下价格段统计信息  getBrandPriceStatistics: '/api/dtRpDayBrandPriceDistributionStat/getBrandPriceStatistics',  // * 获取品牌下的价格段的日销售情况明细  getDayBrandPriceStatistics: '/api/dtRpDayBrandPriceDistributionStat/getDayBrandPriceStatistics',  // * 按天查品牌的销售概况  getDtRpDayBrandSaleStatsOfDay: '/api/dtRpDayBrandSaleStat/getDtRpDayBrandSaleStatsOfDay',  // * 根据品牌id获取最近30天 Top50 店铺销售数据  getDayBrandShopLast30HotStat: '/api/dtRpDayBrandShopLast30HotStat/getDayBrandShopLast30HotStat',  // * 获取品牌下的店铺飙量榜  getBrandShopBiaoList: '/api/dtRpDayBrandShopLast7BiaoStat/getBrandShopBiaoList',  // * 获取指定时间段的类目下的品牌销售情况统计信息  getCategoryBrandStatistics: '/api/dtRpDayCategoryBrandStat/getCategoryBrandStatistics',  // * 获取指定行业指定时间段内下的品牌日统计信息  getDayCategoryBrandStatistics: '/api/dtRpDayCategoryBrandStat/getDayCategoryBrandStatistics',  // * 获取行业的热销宝贝  getHotGoodsByCategory: '/api/dtRpDayCategoryGoodsLast30HotStat/getHotGoodsByCategory',  // * 行业下宝贝飙量榜  getCategoryGoodsBiaoList: '/api/dtRpDayCategoryGoodsLast7BiaoStat/getCategoryGoodsBiaoList',  // * 获取指定时间段的类目下的价格段情况统计信息  getCategoryPriceStatistics: '/api/dtRpDayCategoryPriceDistributionStat/getCategoryPriceStatistics',  // * 获取指定行业指定时间段内下的价格段日统计信息  getDayCategoryPriceStatistics: '/api/dtRpDayCategoryPriceDistributionStat/getDayCategoryPriceStatistics',  // * 获取行业一览的数据(行业每日销量信息)  getCategorySmry: '/api/dtRpDayCategorySaleStat/getCategorySmry',  // * 获取一个类目的子类目统计  getChildCategoryStatistics: '/api/dtRpDayCategorySaleStat/getChildCategoryStatistics',  // * 根据行业关键字查询销售日报表  getSaleStatByKey: '/api/dtRpDayCategorySaleStat/getSaleStatByKey',  // * 根据行业获取热销店铺  getHotShopByCategory: '/api/dtRpDayCategoryShopLast30HotStat/getHotShopByCategory',  // * 获取行业下最近7天的店铺飙量榜  getCategoryShopLast7BiaoList: '/api/dtRpDayCategoryShopLast7BiaoStat/getCategoryShopLast7BiaoList',  // 查询宝贝的改价详情  queryGoodsPriceChange: '/api/dtRpDayGoodsChangePriceDetail/queryGoodsPriceChange',  // 查询店铺关联的宝贝改价详情  queryShopGoodsPriceChange: '/api/dtRpDayGoodsChangePriceDetail/queryShopGoodsPriceChange',  // 查询宝贝的改名详情  queryGoodsTitleChange: '/api/dtRpDayGoodsChangeTitleDetail/queryGoodsTitleChange',  // 查询店铺关联的宝贝改名详情  queryShopGoodsTitleChange: '/api/dtRpDayGoodsChangeTitleDetail/queryShopGoodsTitleChange',  // 查询宝贝的下架详情  queryGoodsOffShelf: '/api/dtRpDayGoodsOffShelfDetail/queryGoodsOffShelf',  // 查询店铺关联宝贝的下架详情  queryShopGoodsOffShelf: '/api/dtRpDayGoodsOffShelfDetail/queryShopGoodsOffShelf',  // 查询店铺关联的宝贝上新详情  queryShopGoodsUpnew: '/api/dtRpDayGoodsUpnewShelfDetail/queryShopGoodsUpnew',  // * 添加测试数据  addTestData: '/api/dtRpDayShopBrandStat/addTestData',  // * 查询店铺下目录的统计信息(按日)  getDayShopBrandStatistics: '/api/dtRpDayShopBrandStat/getDayShopBrandStatistics',  // * 查询店铺下品牌分布统计信息  getShopBrandStatistics: '/api/dtRpDayShopBrandStat/getShopBrandStatistics',  // * 添加测试数据  addTestData: '/api/dtRpDayShopCategoryStat/addTestData',  // * 查询店铺下目录的统计信息(按日)  getDayShopCategoryStatistics: '/api/dtRpDayShopCategoryStat/getDayShopCategoryStatistics',  // * 查询店铺下类目分布统计信息  getShopCategoryStatistics: '/api/dtRpDayShopCategoryStat/getShopCategoryStatistics',  // * 添加测试数据  addTestData: '/api/dtRpDayShopGoodsLast7BiaoStat/addTestData',  // * 获取店铺下过去七天的飙量宝贝榜  getShopGoodsLast7BiaoList: '/api/dtRpDayShopGoodsLast7BiaoStat/getShopGoodsLast7BiaoList',  // 查询店铺30天内的热销宝贝  queryShopHotGoods: '/api/dtRpDayShopLast30HotStat/queryShopHotGoods',  // * 新增测试数据  addTestData: '/api/dtRpDayShopPriceDistributionStat/addTestData',  // * 获取店铺下的价格段的日销售情况明细  getDayShopPriceStatistics: '/api/dtRpDayShopPriceDistributionStat/getDayShopPriceStatistics',  // * 获取店铺下价格段统计信息  getShopPriceStatistics: '/api/dtRpDayShopPriceDistributionStat/getShopPriceStatistics',  // * 品牌类目分布  queryBrandCategory: '/api/dtRpMonthBrandCategoryStat/queryBrandCategory',  // * 查询品牌价格分布  queryBrandPrice: '/api/dtRpMonthBrandPriceDistributionStat/queryBrandPrice',  // * 获取行业品牌分布月份信息(获取指定时间段销量最高的10个品牌，剩余的归类为其他)  getMonthBrandDistByCategory: '/api/dtRpMonthCategoryBrandStat/getMonthBrandDistByCategory',  // * 获取行业品牌分布月份信息(另外一种不同的返回数据格式)  getMonthBrandDistByCategory2: '/api/dtRpMonthCategoryBrandStat/getMonthBrandDistByCategory2',  // * 获取一个行业下的月份的类目分布 (1、先获取一个行业的子类目 2、统计每个子类目下的所有下级类目数据)  getMonthCategoryDistByCategory: '/api/dtRpMonthCategoryCategoryStat/getMonthCategoryDistByCategory',  // * 获取一个行业下的月份的类目分布(另外一种返回值格式)  getMonthCategoryDistByCategory2: '/api/dtRpMonthCategoryCategoryStat/getMonthCategoryDistByCategory2',  // * 获取行业的价格分布  getMonthPriceDistByCategory: '/api/dtRpMonthCategoryPriceDistributionStat/getMonthPriceDistByCategory',  // * 获取行业的价格分布(另外一种数据返回格式)  getMonthPriceDistByCategory2: '/api/dtRpMonthCategoryPriceDistributionStat/getMonthPriceDistByCategory2',  // 查询店铺的品牌分布数据  queryShopBrand: '/api/dtRpMonthShopBrandStat/queryShopBrand',  // 查询店铺的类目分布，type:month,表示查询月统计,type:week,表示按周统计  queryShopCategory: '/api/dtRpMonthShopCategoryStat/queryShopCategory',  // 查询店铺的按价格分布详情  queryShopPrice: '/api/dtRpMonthShopPriceStat/queryShopPrice',  // * 清除缓存  clearCache: '/api/dtTransFlag/clearCache',  // * 加载缓存  loadCache: '/api/dtTransFlag/loadCache',  // * AB表同步数据  syncData: '/api/dtTransFlag/syncData',  // 按天查宝贝的销售概况  getGoodsSaleStat: '/api/goodsSaleStat/getGoodsSaleStat',  // 获取推荐品牌  getRecommandBarnd: '/api/recommand/getRecommandBarnd',  // 获取推荐宝贝  getRecommandGoods: '/api/recommand/getRecommandGoods',  // 获取推荐店铺  getRecommandShop: '/api/recommand/getRecommandShop',  // 按天查店铺的销售概况  getShopSaleStat: '/api/shopSaleStat/getShopSaleStat',}