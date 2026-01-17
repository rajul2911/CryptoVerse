# 🚀 CryptoWeb - Cryptocurrency Tracking Application

A modern React application for tracking cryptocurrency prices, details, history, and news using RapidAPI's Coinranking API.

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [API Configuration](#api-configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Technologies Used](#technologies-used)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## ✨ Features

- 📊 View real-time cryptocurrency prices and market data
- 📈 Interactive price history charts with multiple time periods
- 🔍 Detailed cryptocurrency information
- 📰 Latest cryptocurrency news
- 💱 Exchange information and coins
- 🎨 Responsive and modern UI

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v14 or higher)
- **npm** or **yarn**
- A **RapidAPI** account (free tier available)

## 📥 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/cryptoweb.git
   cd cryptoweb
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory and add your API key:

   ```env
   REACT_APP_API_KEY=YOUR_API_KEY
   ```

4. **Start the development server**

   ```bash
   npm start
   ```

   The app will open at [http://localhost:3000](http://localhost:3000)

## 🔑 API Configuration

This project uses the [RapidAPI](https://rapidapi.com/hub) platform to fetch cryptocurrency data.

### Step-by-Step API Setup:

1. **Sign up for RapidAPI**
   - Visit [https://rapidapi.com/hub](https://rapidapi.com/hub)
   - Create a free account

2. **Subscribe to Coinranking API**
   - Search for "Coinranking" in the RapidAPI Hub
   - Subscribe to the API (free tier available)
   - Navigate to the "Endpoints" section

3. **Get Your API Key**
   - Click on any endpoint
   - Go to the **"Code Snippets"** section
   - Select:
     - **Target:** JavaScript
     - **Client:** Axios
   - Copy the `x-rapidapi-key` from the headers

4. **Test Your API Key**
   - Use the "Test Endpoint" button
   - Verify you receive a **200 OK** response
   - If successful, your API key is working correctly

5. **Add API Key to Project**
   - Open the `.env` file in the root directory
   - Replace `YOUR_API_KEY` with your actual API key:
   
   ```env
   REACT_APP_API_KEY=your_actual_api_key_here
   ```

### API Implementation Example:

The API is configured in [src/Services/cryptoApi.js](src/Services/cryptoApi.js):

```javascript
const cryptoApiHeader = {
  "x-rapidapi-key": process.env.REACT_APP_API_KEY,
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
};

const baseUrl = "https://coinranking1.p.rapidapi.com";
```

## 📁 Project Structure

```
cryptoweb/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── index.js
│   ├── app/
│   │   └── store.js              # Redux store configuration
│   ├── Component/
│   │   ├── Cryptocurrencies.jsx  # Cryptocurrency list component
│   │   ├── CryptoDetails.jsx     # Individual crypto details
│   │   ├── Homepage.jsx          # Home page component
│   │   ├── LineChart.jsx         # Price chart component
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── News.jsx              # Crypto news component
│   │   └── index.js              # Component exports
│   ├── image/                    # Static images
│   └── Services/
│       ├── cryptoApi.js          # Coinranking API service
│       └── cryptoNewsApi.js      # Crypto news API service
├── .env                          # Environment variables (not in git)
├── .gitignore
├── package.json
├── Readme.md
└── vercel.json                   # Vercel deployment config
```

## 🎯 Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm test`
Launches the test runner in interactive watch mode

### `npm run build`
Builds the app for production to the `build` folder

### `npm run eject`
**Note: this is a one-way operation. Once you `eject`, you can't go back!**

## 🛠 Technologies Used

- **React** - Frontend framework
- **Redux Toolkit** - State management
- **RTK Query** - API data fetching
- **React Router** - Navigation
- **Chart.js** / **Recharts** - Data visualization
- **Ant Design** - UI components
- **RapidAPI** - API platform

## 🌐 API Endpoints

The application uses the following endpoints from [src/Services/cryptoApi.js](src/Services/cryptoApi.js):

| Endpoint | Description |
|----------|-------------|
| `useGetCryptosQuery` | Fetch list of cryptocurrencies |
| `useGetCryptoDetailsQuery` | Get detailed info for a specific coin |
| `useGetCryptoHistoryQuery` | Fetch historical price data |
| `useGetExchangesQuery` | Get cryptocurrency exchanges |
| `useGetExchangeCoinsQuery` | Get coins from specific exchange |

### Example Usage:

```javascript
import { useGetCryptosQuery } from '../Services/cryptoApi';

const { data, isFetching } = useGetCryptosQuery(10);
```

## 🚀 Deployment

This project is configured for deployment on Vercel. Simply:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your `REACT_APP_API_KEY` in Vercel's environment variables
4. Deploy!

## ⚠️ Important Notes

- **Never commit your `.env` file** to version control
- The `.env` file is already added to `.gitignore`
- Always use environment variables for sensitive data
- Free tier API has rate limits - check RapidAPI documentation

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 📧 Contact

For any questions or suggestions, please open an issue on GitHub.

---

**Happy Coding! 🎉**