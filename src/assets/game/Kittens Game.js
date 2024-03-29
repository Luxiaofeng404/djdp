// Kittens Game
//观察天空
const targetNode = document.querySelector('#observeButton');
// 当观察到变动时执行的回调函数
const callback = function (mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            targetNode.firstChild && targetNode.firstChild.click();
        }
    }
};
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, { attributes: true, childList: true, subtree: true });

//定时器
const timer = setInterval(() => {
    //派出猎人
    const manpower_num = $('.resource_manpower .resAmount');
    const manpower_max = $('.resource_manpower .maxRes');
    const manpower_btn = $('#fastHuntContainer a')[0];
    manpower_num.text() == manpower_max.text().slice(1) && manpower_btn.click();

    //木材
    const catnip_num = $('.resource_catnip .resAmount');
    const catnip_max = $('.resource_catnip .maxRes');
    const woodAll = $('.craft.resource_wood .all');
    catnip_num.text() == catnip_max.text().slice(1) && woodAll.click();

    //木梁
    const wood_num = $('.resource_wood .resAmount');
    const wood_max = $('.resource_wood .maxRes');
    const beamAll = $('.resource_beam .all');
    wood_num.text() == wood_max.text().slice(1) && beamAll.click();

    //石板
    const minerals_num = $('.resource_minerals .resAmount');
    const minerals_max = $('.resource_minerals .maxRes');
    const slabAll = $('.resource_slab .all');
    minerals_num.text() == minerals_max.text().slice(1) && slabAll.click();

    //资源数据-铁
    const iron_num = $('.resource_iron .resAmount');
    const iron_max = $('.resource_iron .maxRes');
    //资源数据-煤
    const coal_num = $('.resource_coal .resAmount');
    const coal_max = $('.resource_coal .maxRes');
    //全部btn-金属板
    const plateAll = $('.resource_plate .all');
    //全部btn-钢
    const steelAll = $('.resource_steel .all');
    //生成-钢
    coal_num.text() == coal_max.text().slice(1) && steelAll.click();
    //生成-钢、金属板
    iron_num.text() == iron_max.text().slice(1) && (steelAll.click(), plateAll.click());

    //资源数据-文化
    const culture_num = $('.resource_culture .resAmount');
    const culture_max = $('.resource_culture .maxRes');
    //全部btn-羊皮纸
    const parchmentAll = $('.resource_parchment .all');
    //全部btn-手稿
    const manuscriptAll = $('.resource_manuscript .all');
    //生成-羊皮纸
    parchmentAll.click();
    //生成-羊皮纸、手稿
    culture_num.text() == culture_max.text().slice(1) && (parchmentAll.click(), manuscriptAll.click());
}, 2000);