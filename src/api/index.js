/**
 * Created by Administrator on 2018/9/4.
 * 函数的返回值：promise对象
 */
import ajax from 'ajax'
//1.根据经纬度获取位置详情
export const reqAddredd = (geohash) => ajax('/position/${geohash}')
//2.获取食品分类列表
export const reqFoodType = () =>ajax('/index_category')
//3.根据经纬度获取商铺列表
export const reqShops = (longitude,latitude) => ajax('/shops',{longitude,latitude})
