# Spark Nexora - Full Stack Setup Guide

This guide will help you set up both the frontend and backend for the Spark Nexora contact management system.

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)
```bash
# Install all dependencies
npm run install:all

# Start both frontend and backend
npm run dev:full
```

### Option 2: Manual Setup
```bash
# Install frontend dependencies
npm install

# Install backend dependencies
cd backend
npm install
cd ..

# Start backend (Terminal 1)
cd backend
npm run dev

# Start frontend (Terminal 2)
npm run dev
```

### Option 3: Windows Batch Script
Double-click `start-dev.bat` to start both servers automatically.

## 📁 Project Structure

```
Spark-Nexora/
├── src/                          # Frontend (Next.js)
│   ├── app/
│   │   ├── admin/               # Admin dashboard
│   │   └── page.tsx             # Main website
│   └── components/
│       ├── admin/               # Admin dashboard components
│       └── ContactSection.tsx   # Contact form
├── backend/                     # Backend (Node.js/Express)
│   ├── src/
│   │   ├── controllers/         # API controllers
│   │   ├── models/              # Database models
│   │   ├── routes/              # API routes
│   │   └── server.js            # Main server file
│   └── package.json
└── public/                      # Static assets
```

## 🔧 Backend Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

### 1. Database Setup

**Option A: Local MongoDB**
1. Install MongoDB locally
2. Start MongoDB service
3. No additional configuration needed

**Option B: MongoDB Atlas (Cloud)**
1. Create account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get connection string
4. Update `backend/config.env` with your connection string

### 2. Environment Configuration
Update `backend/config.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/spark-nexora
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
NODE_ENV=development
```

### 3. Start Backend
```bash
cd backend
npm install
npm run dev
```

Backend will be available at: `http://localhost:5000`

## 🎨 Frontend Setup

### 1. Environment Variables
Create `.env.local` in the root directory:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### 2. Start Frontend
```bash
npm install
npm run dev
```

Frontend will be available at: `http://localhost:3000`

## 📊 Admin Dashboard

Access the admin dashboard at: `http://localhost:3000/admin`

### Features:
- **Overview**: Contact statistics and metrics
- **Messages**: View, filter, and manage contact messages
- **Analytics**: Charts and insights
- **Bulk Actions**: Update multiple contacts at once
- **Export**: Download contacts as CSV/JSON

## 🔌 API Endpoints

### Contact Management
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contacts (with pagination)
- `GET /api/contact/:id` - Get specific contact
- `PUT /api/contact/:id/status` - Update contact status
- `DELETE /api/contact/:id` - Delete contact

### Admin Dashboard
- `GET /api/admin/dashboard` - Dashboard statistics
- `GET /api/admin/recent` - Recent contacts
- `GET /api/admin/analytics` - Analytics data
- `GET /api/admin/export` - Export contacts

## 🛠️ Development Commands

```bash
# Frontend only
npm run dev

# Backend only
npm run dev:backend

# Both frontend and backend
npm run dev:full

# Install all dependencies
npm run install:all

# Build for production
npm run build

# Start production server
npm start
```

## 🐛 Troubleshooting

### Common Issues

1. **Backend not starting**
   - Check if MongoDB is running
   - Verify `config.env` file exists
   - Check port 5000 is not in use

2. **Frontend API errors**
   - Ensure backend is running on port 5000
   - Check `NEXT_PUBLIC_API_URL` environment variable
   - Verify CORS settings in backend

3. **Database connection issues**
   - Verify MongoDB is running
   - Check connection string in `config.env`
   - Ensure database name is correct

4. **Admin dashboard not loading**
   - Check if backend API is responding
   - Verify all admin components are properly imported
   - Check browser console for errors

### Debug Mode
Set `NODE_ENV=development` in `backend/config.env` for detailed error messages.

## 📝 Features Overview

### Contact Form Integration
- ✅ Real-time form validation
- ✅ Backend API integration
- ✅ Success/error handling
- ✅ Form reset after submission

### Admin Dashboard
- ✅ Responsive design
- ✅ Contact management
- ✅ Status updates
- ✅ Priority management
- ✅ Search and filtering
- ✅ Pagination
- ✅ Analytics charts
- ✅ Export functionality
- ✅ Admin notes
- ✅ Bulk operations

### Backend API
- ✅ RESTful endpoints
- ✅ Input validation
- ✅ Error handling
- ✅ MongoDB integration
- ✅ CORS configuration
- ✅ Environment configuration

## 🚀 Production Deployment

### Backend
1. Set `NODE_ENV=production`
2. Use secure JWT secret
3. Configure production MongoDB
4. Set up PM2 or similar
5. Configure reverse proxy (nginx)

### Frontend
1. Build: `npm run build`
2. Start: `npm start`
3. Configure environment variables
4. Set up CDN for static assets

## 📞 Support

For issues or questions:
1. Check this setup guide
2. Review error logs
3. Check MongoDB connection
4. Verify environment variables
5. Contact development team

---

**Happy Coding! 🎉**
