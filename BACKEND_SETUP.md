# Complete Backend & Form Setup Guide

## 🎯 What Was Set Up

✅ **Backend Server** - Express.js API
✅ **MySQL Database** - Table for storing submissions
✅ **Email Service** - Microsoft Graph API integration
✅ **Frontend Form** - Connected to backend with SweetAlert2 modals
✅ **Error Handling** - Comprehensive error management

---

## 🚀 Quick Start

### Step 1: Install Frontend Dependencies
```bash
npm install
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Start Backend Server
```bash
cd backend
npm run dev
```
Expected output:
```
✅ Server running on http://localhost:5000
📧 Email service configured for: sales@optimal-itsolutions.com
```

### Step 4: Start Frontend (in new terminal)
```bash
npm run dev
```

---

## 📋 File Structure

```
logo-web-studios-lp/
├── backend/
│   ├── config/
│   │   └── database.js          # MySQL connection & table setup
│   ├── services/
│   │   └── emailService.js      # Microsoft Graph API email sending
│   ├── routes/
│   │   └── consultationRoutes.js # API endpoints
│   ├── .env                      # Configuration (DO NOT COMMIT)
│   ├── .gitignore               # Ignore sensitive files
│   ├── package.json             # Dependencies
│   ├── server.js                # Main server file
│   └── README.md                # Backend documentation
├── src/
│   ├── components/site/
│   │   └── ConsultForm.jsx      # Updated form component
│   └── ...
├── package.json                  # Added sweetalert2 dependency
└── ...
```

---

## 🔧 Configuration

### Backend Environment (.env)
Located at `backend/.env` - Already configured with:
- ✅ Microsoft Graph API credentials
- ✅ MySQL database connection
- ✅ Server port (5000)
- ✅ Frontend URL (http://localhost:5173)

---

## 📨 Email Flow

When a user submits the form:

1. **Form Data Sent** → Backend API
2. **Data Validation** → Check required fields & email format
3. **Database Save** → Store in `optimal_web_development_lp` table
4. **User Email** → Confirmation sent to user's email
5. **Admin Email** → Notification sent to sales@optimal-itsolutions.com
6. **Success Modal** → SweetAlert2 shows to user
7. **Form Reset** → All fields cleared

### Email Templates
- **User Email**: Professional confirmation with service details
- **Admin Email**: Full submission with all details for follow-up

---

## 📊 Database Table Schema

### optimal_web_development_lp

| Column | Type | Notes |
|--------|------|-------|
| id | INT (Primary Key) | Auto-increment |
| client_name | VARCHAR(255) | Required |
| email | VARCHAR(255) | Required, validated |
| phone | VARCHAR(20) | Required |
| service | VARCHAR(255) | Required, dropdown options |
| information | LONGTEXT | Required, project details |
| created_at | TIMESTAMP | Auto-set on creation |
| status | ENUM('new', 'contacted', 'archived') | Tracks submission status |

---

## 🛡️ Security Features

✅ **Input Validation**
- Email format validation
- Required field checks
- Phone number format support

✅ **Error Handling**
- Try-catch blocks throughout
- Graceful fallbacks for email failures
- User-friendly error messages

✅ **CORS Protection**
- Frontend URL whitelist
- Prevents unauthorized requests

✅ **Sensitive Data**
- Environment variables for credentials
- .gitignore prevents .env commit
- Never logs credentials

---

## 🎨 Form UI Integration

### SweetAlert2 Modals
The form uses theme-matched SweetAlert2 modals:

**Success Modal:**
- Icon: ✓ (checkmark)
- Color: Orange (#ff7418)
- Message: Confirmation with timing
- Auto-close after confirmation

**Error Modal:**
- Icon: ✗ (X)
- Color: Orange (#ff7418)
- Message: Error description
- Try again option

**Connection Error Modal:**
- Icon: Warning
- Color: Orange (#ff7418)
- Message: Backend connection issue
- Includes backend URL for debugging

---

## 🔗 API Endpoints

### 1. Submit Consultation
```
POST /api/submit-consultation
Content-Type: application/json

Body:
{
  "client_name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "service": "Website Design & Development",
  "information": "Details about project..."
}

Response (200):
{
  "success": true,
  "message": "Consultation request received successfully. We will be in touch soon!"
}
```

### 2. Get All Consultations (Admin)
```
GET /api/consultations

Response (200):
{
  "success": true,
  "data": [
    {
      "id": 1,
      "client_name": "John Doe",
      "email": "john@example.com",
      "phone": "+1234567890",
      "service": "Website Design & Development",
      "information": "...",
      "created_at": "2026-08-14T10:30:00Z",
      "status": "new"
    }
  ]
}
```

### 3. Health Check
```
GET /health

Response (200):
{
  "status": "OK",
  "message": "Server is running"
}
```

---

## 🐛 Troubleshooting

### Issue: "Cannot connect to server"
**Solution:**
- Verify backend is running: `npm run dev` in `/backend`
- Check port 5000 is available
- Look for errors in backend terminal

### Issue: Emails not sending
**Solution:**
- Verify Microsoft Graph API credentials in `.env`
- Check if credentials have "Mail.Send" permission
- Form data still saves even if email fails

### Issue: Database connection error
**Solution:**
- Verify MySQL credentials in `backend/.env`
- Ensure database server is running
- Check if `u273509482_optimal_db` exists

### Issue: Form not submitting
**Solution:**
- Open browser console for errors (F12)
- Verify all required fields are filled
- Check network tab for API response

---

## 📝 Form Fields

**Full Name***
- Text input
- Required
- Stored as: client_name

**Phone***
- Tel input
- Required
- Format: Any international format

**Email***
- Email input
- Required
- Validated format

**Service***
- Select dropdown
- Required
- Options from SERVICES data

**Information***
- Textarea
- Required
- Up to 65,535 characters

---

## 🚢 Deployment

When deploying:

1. **Backend:**
   - Set NODE_ENV=production
   - Update FRONTEND_URL to production domain
   - Use production database credentials
   - Update CORS origins

2. **Frontend:**
   - Change API URL from localhost:5000 to production URL
   - Build with `npm run build`

3. **Database:**
   - Create backups
   - Run migrations on production server
   - Test email sending before launch

---

## 📞 Support

For issues or questions:
- Check backend logs for errors
- Review browser console (F12)
- Verify all credentials are correct
- Test with `/health` endpoint

---

**Setup Complete!** 🎉

Your form is now fully functional with backend processing, email notifications, and database storage.
