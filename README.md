# 📚 BookWorms Mobile App

![React Native](https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white)
![Zustand](https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=react&logoColor=white)
![Cloudinary](https://img.shields.io/badge/Cloudinary-3448C5?style=for-the-badge&logo=cloudinary&logoColor=white)

BookWorms is a mobile application that helps users **discover and recommend books**. 

The app provides personalized book recommendations, user reviews, and a smooth reading experience.

---

## ✨ Features

- 🔍 Personalized book recommendations
- 📖 Search & browse books by **genre, author, or title**
- ⭐ User reviews & ratings
- ❤️ Add books to **favorites or reading lists**
- 🤝 Share recommendations with friends
- ☁️ Cloud-based image storage with **Cloudinary**

---

## 🛠️ Tech Stack

- **React Native (Expo)** → Mobile app development
- **JavaScript (ES6+)**
- **Zustand** → Lightweight state management
- **Cloudinary** → Image hosting & optimization
- **Node.js + Express** → Backend API
- **MongoDB + Mongoose** → Database

---

## 📸 Screenshots

| Sign Up | Login | Home |
|---------|-------|------|
| ![SignUp](./mobile/assets/images/s.jpeg) | ![Login](./mobile/assets/images/l.jpeg) | ![Home](./mobile/assets/images/h.jpeg) |

| Create | Profile |
|--------|---------| 
| ![Create](./mobile/assets/images/c.jpeg) | ![Profile](./mobile/assets/images/p.jpeg) |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Mobile device with Expo Go app OR Android/iOS simulator

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Grishj/bookhub
cd BookWorms
```

### 2️⃣ Install dependencies

**Frontend (Mobile):**
```bash
cd mobile
npm install
```

**Backend:**
```bash
cd backend
npm install
```

### 3️⃣ Environment Setup

Create a `.env` file in the **backend** directory:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### 4️⃣ Start the development servers

**Backend:**
```bash
cd backend
npm run dev
```

**Frontend:**
```bash
cd mobile
npx expo start
```

### 5️⃣ Run the app

- 📱 Scan the QR code with the **Expo Go app** (iOS/Android)
- 🖥️ Or run on an emulator:
  ```bash
  # For Android
  npm run android
  
  # For iOS (Mac only)
  npm run ios
  ```

---

## 📱 App Structure

```
BookWorms/
├── mobile/                 # React Native frontend
│   ├── app/               # Expo Router pages
│   ├── components/        # Reusable components
│   ├── store/            # Zustand state management
│   └── assets/           # Images, fonts, etc.
└── backend/              # Node.js backend
    ├── src/
    │   ├── models/       # MongoDB models
    │   ├── routes/       # API routes
    │   └── middleware/   # Auth middleware
    └── server.js         # Entry point
```

---

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Books
- `GET /api/books` - Get all books
- `POST /api/books` - Create new book
- `GET /api/books/:id` - Get book by ID
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



## 👨‍💻 Author

**Grish Joshi**
- GitHub: [@Grishj](https://github.com/Grishj)

---

## 🙏 Acknowledgments

- Icons from [Lucide React](https://lucide.dev/)
- UI inspiration from modern book apps
- Thanks to the React Native and Expo communities

---

