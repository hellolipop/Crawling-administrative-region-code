
# area-puppeteer
基于 puppeteer 的中国行政区域抓取爬虫（配合iview-area组件使用）

## 数据来源（地址中的时间可替换为最新时间以更新数据，最新时间的网址要先进行校验是否存在）
* 国家统计局：[统计用区划代码和城乡划分代码](http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2020/index.html)
* 国家民政部：[中华人民共和国行政区划代码](http://www.mca.gov.cn/article/sj/tjbz/a/)

## 数据更新 

```
git clone git@github.com:dwqs/area-puppeteer.git
npm i
npm start // 生成市县区数据
npm run format // 格式化数据
npm run json // 生成后端需要的JSON文件文件名称为SYD.json
```

生成的数据包含两份：`cities.js` 和 `areas.js`，前者是市级数据，后者是县区数据

格式化后会生成两份数据：`pca.js` 和 `pcaa.js`，前者仅省市数据，后者包含省市区数据

生成后端数据：`SYD.json`，包含所有省市区数据

获取到更新后的数据之后将pcaa.js文件用来替换前端所需地址数据，SYD.json文件给到后端以匹配数据

