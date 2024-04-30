function decodeJWTToken(token) {
    try {
        const payload = token.split('.')[1]; // Phần thứ hai của token chứa payload
        const decodedPayload = atob(payload); // Giải mã payload từ base64
        return JSON.parse(decodedPayload); // Trả về đối tượng JSON từ payload đã giải mã
    } catch (error) {
        console.error('Error decoding token:', error);
        throw new Error('Invalid token'); // Ném lỗi nếu có lỗi khi giải mã token
    }
}
export default decodeJWTToken;