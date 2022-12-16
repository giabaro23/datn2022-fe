"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WORK_TYPE = exports.PAY_TYPE = exports.TOPIC_ALL = exports.formatDate = exports.TOPIC = exports.LOCATION = void 0;
var LOCATION = ['An Giang', 'Bà rịa – Vũng tàu', 'Bắc Giang', 'Bắc Kạn', 'Bạc Liêu', 'Bắc Ninh', 'Bến Tre', 'Bình Định', 'Bình Dương', 'Bình Phước', 'Bình Thuận', 'Cà Mau', 'Cần Thơ', 'Cao Bằng ', 'Đà Nẵng', 'Đắk Lắk', 'Đắk Nông', 'Điện Biên', 'Đồng Nai', 'Đồng Tháp', 'Gia Lai', 'Hà Giang', 'Hà Nam', 'Hà Nội ', 'Hà Tĩnh', 'Hải Dương', 'Hải Phòng', 'Hậu Giang', 'Hòa Bình', 'Hưng Yên', 'Khánh Hòa', 'Kiên Giang', 'Kon Tum', 'Lai Châu', 'Lâm Đồng', 'Lạng Sơn', 'Lào Cai', 'Long An', 'Nam Định', 'Nghệ An', 'Ninh Bình', 'Ninh Thuận', 'Phú Thọ', 'Phú Yên', 'Quảng Bình', 'Quảng Nam', 'Quảng Ngãi', 'Quảng Ninh', 'Quảng Trị', 'Sóc Trăng', 'Sơn La', 'Tây Ninh', 'Thái Bình', 'Thái Nguyên', 'Thanh Hóa', 'Thừa Thiên Huế', 'Tiền Giang', 'Thành phố Hồ Chí Minh', 'Trà Vinh', 'Tuyên Quang', 'Vĩnh Long', 'Vĩnh Phúc', 'Yên Bái'];
exports.LOCATION = LOCATION;
var TOPIC = ["IT và lập trình", "Kiến trúc và xây dựng", "Marketing và Bán hàng", "Thiết kế", "Video", "Viết lách & Dịch thuật", "Lĩnh vực khác"];
exports.TOPIC = TOPIC;

var formatDate = function formatDate(date) {
  var time = new Date(date);
  return time.getDate() + '-' + time.getMonth() + '-' + time.getFullYear();
};

exports.formatDate = formatDate;
var TOPIC_ALL = [{
  topicName: "IT và lập trình",
  subTopic: ["Lập trình web", "Ứng dụng di động", "Việc lập trình khác", "Tư vấn, thiết kế hệ thống mạng", "Quản lý dự án", "Lập trình nhúng"]
}, {
  topicName: "Kiến trúc và xây dựng",
  subTopic: ["Thiết kế nội thất nhà và chung cư", "Thiết kế ngoại thất", "Thiết kế xây dựng nhà", "Dựng phối cảnh 3D", "Việc kiến trúc và xây dựng khác"]
}, {
  topicName: "Marketing và bán hàng",
  subTopic: ["Cộng tác viên bán hàng", "Tư vấn bán hàng & Giới thiệu sản phẩm", "Tổ chức sự kiện", "Quảng cáo facebook", "Việc kinh doanh và marketing khác"]
}, {
  topicName: "Thiết kế",
  subTopic: ["Thiết kế logo", "Thiết kế đồ họa", "Thiết kế giao diện Website", "Làm video clip", "Việc thiết kế khác"]
}, {
  topicName: "Video",
  subTopic: ["Video hoạt hình", "Video review", "Video giới thiệu sản phẩm và công ty", "Việc làm về video khác"]
}, {
  topicName: "Viết lách và dịch thuật",
  subTopic: ["Viết báo & tạp chí", "Quản lý fanpage", "Viết sách", "Dịch thuật", "Biên tập và chỉnh sửa nội dung", "Công việc khác liên quan"]
}, {
  topicName: "Lĩnh vực khác",
  subTopic: ["Lĩnh vực khác"]
}];
exports.TOPIC_ALL = TOPIC_ALL;
var PAY_TYPE = ["Trả theo dự án", "Trả theo tháng", "Trả theo giờ"];
exports.PAY_TYPE = PAY_TYPE;
var WORK_TYPE = ["Toàn thời gian", "Bán thời gian"];
exports.WORK_TYPE = WORK_TYPE;