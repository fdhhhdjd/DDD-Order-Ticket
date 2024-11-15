<p align="center"><a href="https://profile-forme.com" target="_blank"><img src="https://res.cloudinary.com/ecommerce2021/image/upload/v1659065987/avatar/logo_begsn1.png" width="300"></a></p>

<p align="center">
<a href="https://www.linkedin.com/in/tai-nguyen-tien-787545213/"><img src="https://img.icons8.com/color/48/000000/linkedin-circled--v1.png" alt="Linkedin"></a>
<a href="https://profile-forme.surge.sh"><img src="https://img.icons8.com/color/48/000000/internet--v1.png" alt="Profile"></a>
<a href="tel:0798805741"><img src="https://img.icons8.com/color/48/000000/apple-phone.png" alt="Phone"></a>
<a href = "mailto:nguyentientai10@gmail.com"><img src="https://img.icons8.com/fluency/48/000000/send-mass-email.png" alt="License"></a>
</p>

## This is project coding simple Domain-Driven Design

# DDD (Domain-Driven Design)

![DDD](./docs/assets/ddd_layers.png)

# Structure

## Tiếng Việt 🇻🇳

```
src/
├── domain/                   # Logic và quy tắc nghiệp vụ
│   ├── entities/             # Các thực thể nghiệp vụ (User, Ticket, ...)
│   ├── repositories/         # Các giao diện truy cập dữ liệu
│   └── services/             # Các dịch vụ nghiệp vụ
│
├── application/              # Xử lý ứng dụng, quản lý các trường hợp sử dụng
│   └── use-cases/            # Các trường hợp sử dụng cụ thể của hệ thống
│
├── infrastructure/           # Các thành phần hỗ trợ và kết nối
│   ├── database/             # Kết nối và cấu hình cơ sở dữ liệu
│   └── repositories/         # Các triển khai cụ thể của repositories
│
├── interfaces/               # Lớp giao diện, API cho người dùng hoặc hệ thống
│   ├── controllers/          # Các bộ điều khiển logic để xử lý yêu cầu
│   ├── routes/               # Các tuyến API
│   └── middlewares/          # Middleware (xác thực, ghi nhật ký, ...)
│
└── server.js                 # Tệp khởi động ứng dụng chính
```

## English 🇬🇧

```
src/
├── domain/                   # Business logic and rules
│   ├── entities/             # Business entities (User, Ticket, ...)
│   ├── repositories/         # Interfaces for data access
│   └── services/             # Business services
│
├── application/              # Application processing, managing use cases
│   └── use-cases/            # Specific use cases of the system
│
├── infrastructure/           # Supporting components and connections
│   ├── database/             # Database connections and configurations
│   └── repositories/         # Concrete implementations of repositories
│
├── interfaces/               # Interface layer, API for users or systems
│   ├── controllers/          # Logic controllers for handling requests
│   ├── routes/               # API routes
│   └── middlewares/          # Middleware (auth, logging, ...)
│
└── server.js                 # Main application startup file

```

## Tài Khoản Donate li Cf để có động lực code cho anh em tham khảo 😄😄

![giphy](https://3.bp.blogspot.com/-SzGvXn2sTmw/V6k-90GH3ZI/AAAAAAAAIsk/Q678Pil-0kITLPa3fD--JkNdnJVKi_BygCLcB/s1600/cf10-fbc08%2B%25281%2529.gif)

## Mk: NGUYEN TIEN TAI

## STK: 1651002972052

## Chi Nhánh: NGAN HANG TMCP AN BINH (ABBANK)

## SUPORT CONTACT: [https://profile-forme.com](https://profile-forme.com/).
