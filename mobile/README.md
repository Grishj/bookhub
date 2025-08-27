````markdown
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
- **Node.js + Express (backend)**
- **MongoDB + Mongoose (database)** \*

---

## 📸 Screenshots

| Sign Up                                   | Login                                    | Home                                    |
| ----------------------------------------- | ---------------------------------------- | --------------------------------------- |
| ![SignUp](../mobile/assets/images/s.jpeg) | ![Login](../mobile/assets/images/l.jpeg) | ![Home](../mobile/assets/images/h.jpeg) |

| Create                                    | Profile                                    |
| ----------------------------------------- | ------------------------------------------ |
| ![Create](../mobile/assets/images/c.jpeg) | ![Profile](../mobile/assets/images/p.jpeg) |

## 🚀 Getting Started

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Grishj/bookhub
cd BookWorms
cd mobile -> npm install-> npx expo start
```

cd backend -> npm install -> npm run dev

```

```
````

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Start the development server

```bash
npx expo start
```

### 4️⃣ Run the app

- 📱 Scan the QR code with the **Expo Go app** (iOS/Android)
- ▶️ Or run on an emulator:

  ```bash
  npm run android
  npm run ios
  ```

---

## 🔑 Environment Variables

Create a `.env` file in the root of your project and add:

```env
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

---
