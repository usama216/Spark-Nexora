# Spark Nexora Backend API

A Node.js/Express backend API for managing contact messages and admin dashboard functionality.

## Features

- **Contact Management**: Store and manage contact form submissions
- **Admin Dashboard**: View, filter, and manage contact messages
- **Analytics**: Track contact statistics and trends
- **RESTful API**: Clean API endpoints for frontend integration
- **MongoDB Integration**: Persistent data storage
- **Validation**: Input validation and error handling

## Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## API Endpoints

### Contact Endpoints
- `POST /api/contact` - Create new contact message
- `GET /api/contact` - Get all contacts (with pagination and filters)
- `GET /api/contact/:id` - Get specific contact
- `PUT /api/contact/:id/status` - Update contact status
- `PUT /api/contact/:id/note` - Add admin note
- `DELETE /api/contact/:id` - Delete contact

### Admin Endpoints
- `GET /api/admin/dashboard` - Get dashboard statistics
- `GET /api/admin/recent` - Get recent contacts
- `GET /api/admin/analytics` - Get contact analytics
- `PUT /api/admin/bulk-update` - Bulk update contact status
- `GET /api/admin/export` - Export contacts (JSON/CSV)

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Configuration**
   - Copy `config.env` and update the values:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/spark-nexora
   JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
   NODE_ENV=development
   ```

3. **Database Setup**
   - Install MongoDB locally or use MongoDB Atlas
   - Update `MONGODB_URI` in your environment file

4. **Start the Server**
   ```bash
   # Development mode
   npm run dev
   
   # Production mode
   npm start
   ```

5. **Health Check**
   - Visit `http://localhost:5000/api/health` to verify the server is running

## Database Schema

### Contact Model
```javascript
{
  name: String (required)
  email: String (required, validated)
  phone: String (optional)
  company: String (optional)
  subject: String (required)
  message: String (required)
  service: String (enum)
  budget: String (enum)
  timeline: String (enum)
  status: String (enum: new, read, replied, closed)
  priority: String (enum: low, medium, high, urgent)
  source: String (default: website)
  ipAddress: String
  userAgent: String
  adminNotes: Array
  lastContacted: Date
  tags: Array
  createdAt: Date
  updatedAt: Date
}
```

## Frontend Integration

The frontend should set the following environment variable:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:3000` (Next.js dev server)
- `http://127.0.0.1:3000`

## Error Handling

All endpoints return consistent error responses:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error (development only)"
}
```

## Development

- Use `npm run dev` for development with auto-restart
- Check console logs for debugging information
- API documentation available at `/api/health` endpoint

## Production Deployment

1. Set `NODE_ENV=production`
2. Use a secure JWT secret
3. Configure proper MongoDB connection string
4. Set up proper CORS origins
5. Use PM2 or similar process manager
6. Set up monitoring and logging

## Support

For issues or questions, contact the Spark Nexora development team.
