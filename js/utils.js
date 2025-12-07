// Phiên bản siêu nhẹ – chỉ cần 1 dòng
export const formatPrice = (price) =>
    price ? Number(price).toLocaleString('vi-VN') + ' ₫' : 'Liên hệ';
