export const categoriesMap = JSON.parse("{\"category\":{\"/\":{\"path\":\"/category/\",\"map\":{\"使用指南\":{\"path\":\"/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0,1,2,3,4]},\"指南\":{\"path\":\"/category/%E6%8C%87%E5%8D%97/\",\"indexes\":[5]},\"樱桃\":{\"path\":\"/category/%E6%A8%B1%E6%A1%83/\",\"indexes\":[6]},\"火龙果\":{\"path\":\"/category/%E7%81%AB%E9%BE%99%E6%9E%9C/\",\"indexes\":[7]},\"水果\":{\"path\":\"/category/%E6%B0%B4%E6%9E%9C/\",\"indexes\":[8,7,9,10,11,12]},\"草莓\":{\"path\":\"/category/%E8%8D%89%E8%8E%93/\",\"indexes\":[8]},\"蔬菜\":{\"path\":\"/category/%E8%94%AC%E8%8F%9C/\",\"indexes\":[13]},\"苹果\":{\"path\":\"/category/%E8%8B%B9%E6%9E%9C/\",\"indexes\":[11,12,14,15]},\"香蕉\":{\"path\":\"/category/%E9%A6%99%E8%95%89/\",\"indexes\":[16,17,9,10]}}}},\"tag\":{\"/\":{\"path\":\"/tag/\",\"map\":{\"禁用\":{\"path\":\"/tag/%E7%A6%81%E7%94%A8/\",\"indexes\":[1]},\"加密\":{\"path\":\"/tag/%E5%8A%A0%E5%AF%86/\",\"indexes\":[2]},\"布局\":{\"path\":\"/tag/%E5%B8%83%E5%B1%80/\",\"indexes\":[5]},\"Markdown\":{\"path\":\"/tag/markdown/\",\"indexes\":[3]},\"页面配置\":{\"path\":\"/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/\",\"indexes\":[0]},\"使用指南\":{\"path\":\"/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/\",\"indexes\":[0]},\"红\":{\"path\":\"/tag/%E7%BA%A2/\",\"indexes\":[13,8,7,6,11,12,14,15]},\"小\":{\"path\":\"/tag/%E5%B0%8F/\",\"indexes\":[8,6]},\"圆\":{\"path\":\"/tag/%E5%9C%86/\",\"indexes\":[13,6,11,12,14,15]},\"大\":{\"path\":\"/tag/%E5%A4%A7/\",\"indexes\":[7,11,12,14,15]},\"黄\":{\"path\":\"/tag/%E9%BB%84/\",\"indexes\":[16,17,9,10]},\"弯曲的\":{\"path\":\"/tag/%E5%BC%AF%E6%9B%B2%E7%9A%84/\",\"indexes\":[16,17,9,10]},\"长\":{\"path\":\"/tag/%E9%95%BF/\",\"indexes\":[16,17,9,10]}}}}}");

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept();
  if (__VUE_HMR_RUNTIME__.updateBlogCategory)
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
}

if (import.meta.hot)
  import.meta.hot.accept(({ categoriesMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoriesMap);
  });

