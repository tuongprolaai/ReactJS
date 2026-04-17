<!-- Day 44 -->
1. Truy cập tài nguyên được bảo vệ (VD: thông tin người dùng đang đăng nhập)
-> VD: Gọi API /auth/me (without JWT) => 401

2. Authentication (Xác thực người dùng)
- Gửi đi thông tin đăng nhập (Credentials)
=> Nhận token (lưu vào client)

3. Truy cập tài nguyên được bảo vệ
-> VD: Gọi API /auth/me (with JWT) => Backend check JWT (Authorization - Check quyền truy cập vào tài nguyên)
- JWT hợp lệ: 200 + data
- JWT không hợp lệ: 401

1. Error Boundaries
2. Code Splitting
3. React portal
4. userReducer hook

<!-- Day 45 -->
- Load more (Button click -> Load more)
- Infinity load (Scroll -> load more)