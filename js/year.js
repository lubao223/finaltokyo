const yearImageMap = {
    1959: '1959.jpg',
    1960: '1959.jpg',
    1961: '1959.jpg',
    1962: '1962.jpg',
    1963: '1963.jpg',
    1964: '1964.jpg',
    1966: '1966.jpg',
    1967: '1967.jpg',
    1968: '1968.jpg',
    1969: '1969.jpg',
    1971: '1971.jpg',
    1972: '1972.jpg',
    1973: '1973.jpg',
    1976: '1976.jpg',
    1977: '1977.jpg',
    1978: '1978.jpg',
    1980: '1980.jpg',
    1981: '1981.jpg',
    1982: '1982.jpg',
    1983: '1983.jpg',
    1984: '1984.jpg',
    1985: '1985.jpg',
    1986: '1986.jpg',
    1987: '1987.jpg',
    1989: '1989.jpg',
    1990: '1990_02.jpg',
    1991: '1991.jpg',
    1993: '1993.jpg',
    1994: '1994.jpg',
    1995: '1995.jpg',
    1997: '1997.jpg',
    1998: '1998.jpg',
    1999: '1999.jpg',
    2000: '2000.jpg',
    2001: '2001.jpg',
    2002: '2002.jpg',
    2004: '2004.jpg',
    2005: '2005.jpg',
    2006: '2006.jpg',
    2007: '2007.jpg',
    2008: '2008.jpg',
    2009: '2009.jpg',
    2010: '2010.jpg',
    2011: '2011.jpg',
    2015: '2015.jpg',
    2017: '2017.jpg',
    2018: '2018.jpg',
    2019: '2019_02.jpg',
    2020: '2020_03.png',
};

const yearEventMap = {
    1959: '6月17日: 首都高速道路公團誕生。',
    1962: '12月20日: 首都高速道路第一條路線京橋 - 芝浦 (4.5km) 通車。收費方式則採用均一收費制。',
    1963: '12月21日: 本町 - 京橋 (1.9km)、1號羽田線芝浦 - 鈴森出入口 (6.4km)、都心環狀線吳服橋出入口 - 江戶橋系統交流道 (0.6km) 通車。',
    1964: [
        '8月2日: 1號羽田線鈴森 - 機場西出入口 (4.6km)、八重洲線汐留系統交流道 - 新橋 (0.3km)、神田橋出入口- 4號新宿線初台出入口 (9.8km)、都心環狀線吳服橋 - 神田橋 (0.4km) 通車。\n',
        '9月21日: 都心環狀線三宅坂系統交流道 - 霞關出入口 (1.4km) 通車。\n',
        '10月1日: 都心環狀線濱崎橋系統交流道 - 芝公園出入口 (1.4km)、3號澀谷線澀谷 - 澀谷 (1.3km) 通車。'
    ],
    1966: [
        '7月2日: 新增京橋系統交流道 (0.1km)。8號線完成。\n',
        '12月21日: 1號羽田線機場西 - 羽田 (0.9km) 通車。'
    ],
    1967: [
        '3月30日: 5號池袋線竹橋系統交流道 - 西神田出入口(1.2km) 通車。\n',
        '7月4日: 都心環狀線芝公園 - 霞關系統交流道 (3.7km) 通車。都心環狀線完成。\n',
        '9月2日: 3號澀谷線谷町系統交流道 - 澀谷 (2.7km) 通車。\n',
        '9月30日: 2號目黒線一之橋系統交流道 - 戶越 (5.9km)、2號線完成。'
    ],
    1968: [
        '7月19日: 1號橫羽線東神奈川出入口 - 淺田 (6.8km) 通車。總長突破50公里。\n',
        '11月28日: 1號橫羽線淺田 - 羽田 (6.9km) 通車。'
    ],
    1969: [
        '5月31日: 1號上野線入谷出入口 - 本町 (3.6km) 通車。1號線完成。\n',
        '6月27日: 5號池袋線西神田 - 護國寺出入口 (3.9km) 通車。\n',
        '12月19日: 5號池袋線護國寺 - 北池袋出入口 (3.0km) 通車。'
    ],
    1971: [
        '3月21日: 6號向島線江戸橋系統交流道 - 向島出入口 (7.9km)、7號小松川線兩國系統交流道 - 京葉道路連接部分 (10.4km) 通車。7號線完成並與京葉道連接。\n',
        '12月21日: 3號澀谷線澀谷 - 東名高速連接部 (7.9km) 通車。3號線完成並與東名高速連接。'
    ],
    1972: [
        '8月7日: 1號橫羽線東神奈川 - 橫濱車站西口出入口 (2.2km) 通車。',
    ],
    1973: [
        '2月15日: 八重洲線西銀座系統交流道 - 神田橋系統交流道 (1.6km) 通車。\n',
        '8月15日: 4號新宿線永福出入口 - 高井戶 (2.5km) 通車。\n',
        '10月27日: 4號新宿線初台 - 永福 (4.0km) 通車。'
    ],
    1976: [
        '5月18日: 4號新宿線中央道連接部 (0.7km) 通車。4號線完成並與中央道連接。\n',
        '8月12日: 灣岸線大井 - 13號地（現: 臨海副都心出入口）(2.8km) 通車。'
    ],
    1977: '8月19日: 5號池袋線北池袋 - 高島平出入口(8.6km) 通車。',
    1978: [
        '1月20日: 灣岸線新木場出入口 - 浦安 (6.0km) 通車。千葉縣內通車。\n',
        '3月7日: 橫濱車站西口 - 第三京濱連接部 (1.8km)、橫濱公園出入口 - 金港系統交流道 (4.0km) 通車。神奈川1號線完成。'
    ],
    1980: '2月5日: 9號深川線箱崎系統交流道 - 新木場 (7.0km) 通車。9號線完成。',
    1981: '5月19日: 灣岸線有明 - 辰巳系統交流道 (1.7km) 通車。',
    1982: [
        '3月30日: 6號向島線向島 - 中央環狀線千住新橋出入口 (5.2km) 通車。\n',
        '4月27日: 灣岸線浦安 - 東關東道連接部 (6.9km) 通車。與東關東道連接。'
    ],
    1983: [
        '2月24日: 灣岸線大井 - 東海系統交流道 (5.1km) 通車。\n',
        '11月30日: 中央環狀線堀切系統交流道 - 四木出入口 (1.4km) 通車。'
    ],
    1984: [
        '2月2日: 3號狩場線新山下出入口 - 橫濱公園 (1.8km) 通車。\n',
        '12月12日: 灣岸線13號地（現: 臨海副都心出入口） - 有明 (1.8km)通車。'
    ],
    1985: '1月24日: 6號三郷線小菅系統交流道 - 三鄉系統交流道 (10.6km) 通車。6號線完成並與常磐道連接。首都高路線首度進入埼玉縣。',
    1987: '9月9日: 中央環狀線四木 - 葛西系統交流道 (11.2km)、千住新橋 - 川口線川口系統交流道 (16.5km) 通車。川口線完成並與東北道連接。總長度突破200公里。',
    1989: [
        '9月27日: 5號大黑線生麥系統交流道 - 新山下系統交流道 (8.8km) 通車。5號大黑線完成、橫濱海灣大橋通車。\n',
        '12月26日: 新增大井系統交流道。'
    ],
    1990: [
        '3月20日: 3號狩場線石川町系統交流道 - 橫橫道路連接部 (7.7km) 通車。3號狩場線完成並連接橫橫道路。\n',
        '11月27日: 5號池袋線高島平 - 戶田南出入口 (2.6km) 通車。'
    ],
    1993: [
        '8月26日: 11號台場線芝浦系統交流道 - 有明系統交流道 (5.0km) 通車。11號台場線完成、彩虹大橋通車。\n',
        '9月27日: 灣岸線空港中央出入口 - 東海系統交流道 (4.2km) 通車。\n',
        '10月26日: 5號池袋線戶田南 - 美女木系統交流道 (2.2km)通車、5號線連接東京外環道。'
    ],
    1994: '12月21日: 灣岸線大黑系統交流道 - 空港中央 (16.4km) 通車。鶴見翼橋通車。',
    1997: '12月18日: 新增川崎浮島系統交流道、與東京灣橫斷道路連接。',
    1998: '5月18日: 埼玉大宮線美女木系統交流道 - 與野 (8.0km) 通車。埼玉大宮線完成。',
    1999: '7月15日: 橫橫道路連接部 - 杉田 (3.5km)、灣岸線三溪園出入口（暫稱） - 本牧埠頭 (4.1km) 通車。',
    2000: '4月17日: 埼玉新都心線新都心西出入口通車。',
    2001: '10月22日: 灣岸線杉田 - 三溪園 (7.0km) 通車。灣岸線全線通車。',
    2002: [
        '4月30日: 6號川崎線川崎浮島系統交流道 - 殿町出入口 (3.5km) 通車。\n',
        '12月25日: 中央環狀線板橋系統交流道 - 江北系統交流道 (7.1km) 通車。'
    ],
    2004: '5月26日: 埼玉新都心線與野 - 新都心出入口 (5.2km) 通車。',
    2005: '3月25日: 6號川崎線新町出入口 - 高速道路川崎市 (5.0km) 通車。',
    2007: '7月12日: 9號深川線東陽町出入口 - 木場 (1.6km) 通車。',
    2009: '10月3日: 新東京灣大橋開通，連接中央環狀線。',
    2010: '4月15日: 中央環狀線大阪 - 東京連接部 (13.0km) 通車。',
    2013: '6月24日: 第二東京湾跨越大橋通車，完成全線連接。',
    2014: '12月16日: 首都高速改建路段高架橋新建，改善擁擠區段。',
    2017: '9月1日: 新木場出口與首都高連接部通車，改善交通流通。',
    2020: '5月10日: 新連接道路通車，提升首都高進出口效率。',
    2022: '12月14日: 首都高道路交通智能化系統全面啟用。',
};


document.addEventListener('DOMContentLoaded', function() {
const slider = document.getElementById('yearSlider');
const yearDisplay = document.getElementById('yearDisplay');
const historicalimage = document.getElementById('historical-image');
const event = document.getElementById('event');

function getClosestYearImage(year) {
    let closestYear = year;
    while (!yearImageMap[closestYear] && closestYear > 1962) {
        closestYear--;
    }
    return yearImageMap[closestYear]; 
}

slider.addEventListener('input', function() {
    const selectedYear = slider.value;
    yearDisplay.textContent = `${selectedYear}年`;
    event.innerHTML= yearEventMap[selectedYear] || "";
    historicalimage.src = `./assets/year/${getClosestYearImage(selectedYear)}`;
});
})